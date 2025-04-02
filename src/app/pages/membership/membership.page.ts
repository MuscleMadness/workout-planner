import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gym, User } from 'src/app/models/gym';
import { GymManagementService } from 'src/app/services/gym-management.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.page.html',
  styleUrls: ['./membership.page.scss'],
})
export class MembershipPage implements OnInit {
  gymId: string | null = null;
  gymInfo: Gym | null = null;
  loading: boolean = false;
  error: string | null = null;

  phoneNumber: string = '';
  userInfo: User | null = null;
  showRegisterButton = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gymManagementService: GymManagementService
  ) {}

  ngOnInit() {
    // Read gymId from query params
    this.gymId = this.route.snapshot.queryParamMap.get('gymId');
    console.log('Gym ID:', this.gymId);

    if (this.gymId) {
      this.getGymInfo();
    }
  }

  getGymInfo() {
    if (!this.gymId) {
      this.error = 'Gym ID not found in URL';
      return;
    }

    this.loading = true;
    this.error = null;

    this.gymManagementService.getGymInfo(this.gymId).subscribe({
      next: (response) => {
        console.log(response);
        if (response.success) {
          this.gymInfo = response.gymInfo;
        } else {
          this.error = 'Failed to fetch gym details';
        }
        this.loading = false;
      },
      error: (err) => {
        this.error = 'An error occurred while fetching gym details';
        console.error(err);
        this.loading = false;
      },
    });
  }

  checkUser() {
    this.showRegisterButton = false;
    if (!this.phoneNumber) {
      this.error = 'Please enter a phone number.';
      return;
    }

    this.loading = true;
    this.error = '';

    this.gymManagementService
      .getUserInfo(this.gymId, this.phoneNumber)
      .subscribe(
        (response: any) => {
          console.log(response);
          this.loading = false;
          if (response.status === 'success') {
            this.userInfo = response.user; // Store user data
          } else {
            this.showRegisterButton = true;
            this.userInfo = null; // User does not exist
            this.error = 'User not found. Would you like to register?';
          }
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.error = 'An error occurred while checking membership.';
        }
      );
  }

  registerUser() {
    if (this.gymId && this.phoneNumber) {
      this.router.navigate(['/register-user'], {
        queryParams: { gymId: this.gymId, phoneNumber: this.phoneNumber },
      });
    } else {
      console.error('Gym ID or Phone Number is missing.');
    }
  }

  callGym(contactNumber: string) {
    if (contactNumber) {
      window.open(`tel:${contactNumber}`, '_system'); // Opens the phone dialer
    } else {
      console.error('Contact number is not available.');
    }
  }

  emailGym(email: string) {
    if (email) {
      window.open(`mailto:${email}`, '_system'); // Opens the email client
    } else {
      console.error('Email address is not available.');
    }
  }
}
