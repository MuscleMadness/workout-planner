import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { GymManagementService } from 'src/app/services/gym-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtils } from 'src/app/utils/date-utils';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.page.html',
  styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  users: User[] = [];
  filteredUsers: User[] = [];
  searchTerm: string = '';
  sortOption: string = 'name';
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedSegment: string = 'all';

  gymId: string | null = null;
  loading: boolean = false;
  error: string | null = null;

  public DateUtils = DateUtils;

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
    this.fetchAllUsers();
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

    if (!this.gymId) {
      this.error = 'No gym ID found';
      this.loading = false;
      return;
    }

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
          updatedDate: user.UpdatedDate,
          expiresInDays: this.calculateExpiryInDays(user.ExpiryDate),
        }));
        this.filteredUsers = [...this.users];
        this.sortUsers();
      },
      error: (error) => {
        this.loading = false;
        this.error = 'Error fetching users';
        console.error('Error fetching users:', error);

        // Check if error is due to authentication issues
        console.log('Authentication error. Redirecting to settings page.');
        this.router.navigate(['/settings']);
      },
    });
  }

  calculateExpiryInDays(expiryDate: string): number {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffInMs = expiry.getTime() - today.getTime();
    const diffInDays = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    return diffInDays;
  }

  filterUsers() {
    // First apply search filter
    let result = [...this.users];

    if (this.searchTerm.trim()) {
      const term = this.searchTerm.toLowerCase().trim();
      result = result.filter(
        (user) =>
          user.name.toLowerCase().includes(term) ||
          user.phoneNumber.includes(term) ||
          (user.email && user.email.toLowerCase().includes(term)) ||
          (user.address && user.address.toLowerCase().includes(term))
      );
    }

    // Then apply segment filter
    if (this.selectedSegment !== 'all') {
      result = result.filter((user) => {
        const status = this.getMembershipStatus(user.expiryDate);
        if (this.selectedSegment === 'active' && status === 'active')
          return true;
        if (this.selectedSegment === 'expiring' && status === 'expiring-soon')
          return true;
        if (this.selectedSegment === 'expired' && status === 'expired')
          return true;
        return false;
      });
    }

    this.filteredUsers = result;
    this.sortUsers();
  }

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
    this.filterUsers();
  }

  sortUsers() {
    this.filteredUsers.sort((a, b) => {
      let compareA, compareB;

      // Determine which property to sort by
      switch (this.sortOption) {
        case 'name':
          compareA = a.name.toLowerCase();
          compareB = b.name.toLowerCase();
          break;
        case 'expiryDate':
          compareA = new Date(this.convertToDateFormat(a.expiryDate)).getTime();
          compareB = new Date(this.convertToDateFormat(b.expiryDate)).getTime();
          break;
        case 'createdDate':
          compareA = new Date(
            this.convertToDateFormat(a.createdDate)
          ).getTime();
          compareB = new Date(
            this.convertToDateFormat(b.createdDate)
          ).getTime();
          break;
        default:
          compareA = a.name.toLowerCase();
          compareB = b.name.toLowerCase();
      }

      // Apply sort direction
      if (this.sortDirection === 'asc') {
        return compareA > compareB ? 1 : -1;
      } else {
        return compareA < compareB ? 1 : -1;
      }
    });
  }

  changeSortOption(option: string) {
    if (this.sortOption === option) {
      // Toggle direction if clicking the same option
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    } else {
      // Default to ascending for new sort option
      this.sortOption = option;
      this.sortDirection = 'asc';
    }
    this.sortUsers();
  }

  formatDate(date: string): string {
    if (!date) return 'N/A';

    // Convert DD/MM/YYYY format to a Date object
    const parts = date.split('/');
    if (parts.length === 3) {
      // Format as "May 15, 2025"
      const dateObj = new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
      return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    }

    // If it's already in ISO format (YYYY-MM-DD)
    try {
      const dateObj = new Date(date);
      return dateObj.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      });
    } catch (e) {
      return date; // Return as is if parsing fails
    }
  }

  getRemainingDays(expiryDate: string): number {
    if (!expiryDate) return 0;

    const expiry = new Date(this.convertToDateFormat(expiryDate));
    const today = new Date();
    const diffTime = expiry.getTime() - today.getTime();
    return Math.ceil(diffTime / (1000 * 3600 * 24));
  }

  convertToDateFormat(dateString: string): string {
    // Convert from DD/MM/YYYY to YYYY-MM-DD format for Date constructor
    const parts = dateString.split('/');
    if (parts.length !== 3) return dateString;
    return `${parts[2]}-${parts[1]}-${parts[0]}`;
  }

  getMembershipStatus(expiryDate: string): string {
    const remainingDays = this.getRemainingDays(expiryDate);

    if (remainingDays <= 0) {
      return 'expired';
    } else if (remainingDays <= 7) {
      return 'expiring-soon';
    } else {
      return 'active';
    }
  }
}
