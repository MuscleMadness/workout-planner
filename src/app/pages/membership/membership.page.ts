import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
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
    private gymManagementService: GymManagementService,
    private iab: InAppBrowser
  ) {}

  ngOnInit() {
    // Read gymId from query params
    this.gymId = this.route.snapshot.queryParamMap.get('gymId');
    this.phoneNumber =
      this.route.snapshot.queryParamMap.get('phoneNumber') ?? '';

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
          this.loading = false;
          this.gymInfo = response.gymInfo;
          if (this.phoneNumber) {
            this.getUserInfo();
          }
        } else {
          this.error = 'Failed to fetch gym details';
        }
      },
      error: (err) => {
        this.error = 'An error occurred while fetching gym details';
        console.error(err);
        this.loading = false;
      },
    });
  }

  getUserInfo() {
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
            this.userInfo = null; // User does not exist
            this.phoneNumber = '';
          }
        },
        (error) => {
          console.log(error);
          this.loading = false;
          this.phoneNumber = '';
        }
      );
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

  clearUserInfo() {
    this.phoneNumber = '';
    this.userInfo = null;
    this.showRegisterButton = false;
  }

  renewMembership() {
    console.log('Renewing membership for:', this.userInfo?.name);    
    this.payWithUPI();  
  }

  payWithUPI() {
    const UPI_ID = '6poornima6-1@okhdfcbank'; // Replace with actual UPI ID
    const UPI_NAME = 'Poornima';
    const TXN_NOTE = 'Membership Payment';
    const TXN_ID = this.generateRandomString();
    const ORDER_ID = this.generateRandomString();
    const AMOUNT = '10.00'; // Change as required
    const CURRENCY = 'INR';

    // get the current url
    const currentUrl = window.location.href;
    const CALLBACK_URL = encodeURIComponent(currentUrl);

    // const CALLBACK_URL = encodeURIComponent('http://localhost:8100/membership?gymId=Gym20251&phoneNumber=a');

    const uri = `upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&tid=${TXN_ID}&am=${AMOUNT}&cu=${CURRENCY}&tn=${TXN_NOTE}&tr=${ORDER_ID}&url=${CALLBACK_URL}`;
    
    // Open UPI payment intent
    this.iab.create(uri, '_system');
  }

  generateRandomString(): string {
    return Math.random().toString(36).substring(2, 12);
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
