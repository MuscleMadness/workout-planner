import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/gym';
import { GymManagementService } from 'src/app/services/gym-management.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  gymId: string | null = null;

  loading: boolean = false;
  error: string | null = null;
  users: any[] = [];

  constructor(
    private gymManagementService: GymManagementService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.gymId = this.route.snapshot.queryParamMap.get('gymId');
    if (!this.gymId) {
      this.gymId = localStorage.getItem('gymId');
    }
  }

  ionViewWillEnter() {
    if (!this.gymId) {
      this.router.navigate(['/settings']);
      return;
    }
    this.fetchAllUsers();
  }

  fetchAllUsers() {
    this.loading = true;
    this.error = null;

    this.gymManagementService.getAllUsers(this.gymId).subscribe({
      next: (data) => {
        this.loading = false;
        console.log('Fetched Users:', data);
        this.users = data.map((user: any) => ({
          userId: user.UserId,
          name: user.Name,
          phoneNumber: user.PhoneNumber,
          email: user.Email,
          dateOfBirth: user.DateOfBirth,
          gender: user.Gender,
          address: user.Address,
          emergencyContact: user.EmegencyContact,
          createdDate: user.CreatedDate,
          expiryDate: user.ExpiryDate,
          expiresInDays: this.calculateExpiryInDays(user.ExpiryDate),
        }));
      },
      error: (error) => {
        this.loading = false;
        this.error = 'Error fetching users';
        console.error('Error fetching users:', error);
      },
    });
  }
  getExpiryStyle(expiresInDays: number): any {
    if (expiresInDays < 0) {
      // Expired
      return { color: 'red', fontWeight: 'bold' };
    } else if (expiresInDays === 0) {
      // Expires today
      return { color: 'orange', fontWeight: 'bold' };
    } else {
      // Valid (Expires in the future)
      return { color: 'green', fontWeight: 'bold' };
    }
  }

  getExpiryStatus(expiresInDays: number): string {
    if (expiresInDays > 0) {
      return `Expires in ${expiresInDays} days`;
    } else if (expiresInDays === 0) {
      return 'Expires today';
    } else {
      return `Expired (${Math.abs(expiresInDays)} days ago)`;
    }
  }

  calculateExpiryInDays(expiryDate: string): number {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffInMs = expiry.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  }

  openUserDetails(user: User) {
    this.router.navigate(['/register-user'], {
      queryParams: { gymId: this.gymId },
      state: { user: user }
    });
  }
}
