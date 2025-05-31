import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user.model';
import { GymManagementService } from 'src/app/services/gym-management.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DateUtils } from 'src/app/utils/date-utils';
import { AlertController, ToastController, ModalController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LogPaymentModalComponent } from 'src/app/components/log-payment/log-payment.component';

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
    private route: ActivatedRoute,
    private alertController: AlertController,
    private toastController: ToastController,
    private translateService: TranslateService,
    private modalController: ModalController
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

  /**
   * Navigate to edit user page with the selected user
   */
  editUser(user: User) {
    this.router.navigate(['/register-user'], {
      queryParams: { userId: user.userId, edit: true }
    });
  }

  /**
   * Open a dialog to renew user membership
   */
  async renewMembership(user: User) {
    const modal = await this.modalController.create({
      component: LogPaymentModalComponent,
      componentProps: {
        user: user,
        gymId: this.gymId,
      },
    });

    modal.onDidDismiss().then((result) => {
      if (result.data) {
        const { paymentDate, paymentMode, amount, days } = result.data;
        console.log('Payment Details:', result.data);

        this.processRenewal(user, paymentDate, paymentMode, amount, days);
      }
    });

    await modal.present();
  }

  /**
   * Process the membership renewal
   */
  private processRenewal(user: User, paymentDate: string, paymentMode: string, amount: number, days: number) {
    console.log(`Renewing membership for ${user.name}`);
    if (!this.gymId) {
      this.showToast('Gym ID not found', 'danger');
      return;
    }

    this.loading = true;

    // Calculate new expiry date based on current expiry date or today if already expired
    let startDate = new Date();
    const currentExpiry = new Date(this.convertToDateFormat(user.expiryDate));

    // If membership hasn't expired yet, extend from current expiry date
    if (currentExpiry > startDate) {
      startDate = currentExpiry;
    }

    // Add the days to the start date
    const newExpiryDate = new Date(startDate);
    newExpiryDate.setDate(newExpiryDate.getDate() + days);

    // Format the date as DD/MM/YYYY for the API
    const formattedDate = `${newExpiryDate.getDate().toString().padStart(2, '0')}/${
      (newExpiryDate.getMonth() + 1).toString().padStart(2, '0')}/${
      newExpiryDate.getFullYear()}`;

    const transactionId = `TXN${Date.now()}`; // Example: Generate a unique transaction ID
    const notes = `Renewed for ${days} days`;

    // Call service to update user's expiry date
    this.gymManagementService.updateUserExpiry(
      this.gymId,
      user.userId.toString(),
      amount,
      days,
      paymentMode,
      transactionId,
      notes,
      paymentDate // Added paidDate argument
    )
      .subscribe({
        next: () => {
          this.loading = false;
          this.showToast(`Membership renewed for ${user.name}`, 'success');
          // Update the local data
          const index = this.users.findIndex(u => u.userId === user.userId);
          if (index !== -1) {
            this.users[index].expiryDate = formattedDate;
            this.users[index].expiresInDays = this.calculateExpiryInDays(formattedDate);
            this.filterUsers(); // Re-apply filters and sorting
          }
        },
        error: (err) => {
          this.loading = false;
          console.error('Error renewing membership:', err);
          this.showToast('Failed to renew membership', 'danger');
        }
      });
  }

  /**
   * Open WhatsApp with the user's phone number and auto-filled message based on membership status
   */
  openWhatsApp(user: User) {
    if (!user.phoneNumber) {
      this.showToast('No phone number available', 'warning');
      return;
    }
    
    // Format the phone number (remove spaces, dashes, etc.)
    let phoneNumber = user.phoneNumber.toString().replace(/\s+/g, '').replace(/-/g, '');
    
    // If the phone number doesn't start with '+', add the country code
    // Assuming India (+91) as default country code, adjust as needed
    if (!phoneNumber.startsWith('+')) {
      // Remove leading zeros if any
      phoneNumber = phoneNumber.replace(/^0+/, '');
      
      // If the number doesn't have country code, add it
      if (!phoneNumber.startsWith('91')) {
        phoneNumber = '91' + phoneNumber;
      }
    }
    
    // Get the current language from TranslateService
    const currentLang = this.translateService.currentLang || this.translateService.defaultLang || 'en';
    
    // Create message based on membership status and current language
    let message = '';
    const membershipStatus = this.getMembershipStatus(user.expiryDate);
    const expiryDateFormatted = this.formatDate(user.expiryDate);
    const daysLeft = this.getRemainingDays(user.expiryDate);
    
    if (membershipStatus === 'expired') {
      if (currentLang === 'ta' || currentLang === 'tamil') {
        // Tamil message for expired membership
        message = `வணக்கம் ${user.name}, உங்கள் உறுப்பினர் சந்தா ${expiryDateFormatted} அன்று காலாவதியானது. தயவுசெய்து உங்கள் உறுப்பினர் சந்தாவை புதுப்பிக்கவும். நன்றி!`;
      } else {
        // English message (default)
        message = `Hello ${user.name}, your gym membership expired on ${expiryDateFormatted}. Please renew your membership to continue using our facilities. Thank you!`;
      }
    } else if (membershipStatus === 'expiring-soon') {
      if (currentLang === 'ta' || currentLang === 'tamil') {
        // Tamil message for expiring membership
        message = `வணக்கம் ${user.name}, உங்கள் உறுப்பினர் சந்தா ${expiryDateFormatted} அன்று காலாவதியாகும் (${daysLeft} நாட்கள் மட்டுமே உள்ளன). உங்கள் உறுப்பினர் சந்தாவை குறிப்பிட்ட நேரத்திற்குள் புதுப்பிக்கவும். நன்றி!`;
      } else {
        // English message (default)
        message = `Hello ${user.name}, your gym membership will expire on ${expiryDateFormatted} (${daysLeft} days left). Please renew your membership to avoid any interruptions. Thank you!`;
      }
    }
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create the WhatsApp URL with auto-filled message if applicable
    const whatsappUrl = `https://wa.me/${phoneNumber}${message ? '?text=' + encodedMessage : ''}`;
    
    // Open in browser
    window.open(whatsappUrl, '_blank');
  }

  /**
   * Display a toast message
   */
  private async showToast(message: string, color: 'success' | 'danger' | 'warning' = 'success') {
    const toast = await this.toastController.create({
      message,
      duration: 2000,
      color,
      position: 'bottom'
    });
    await toast.present();
  }
}
