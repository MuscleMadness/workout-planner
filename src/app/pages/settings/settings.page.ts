import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';

import {
  GoogleLoginResponseOnline,
  SocialLogin,
} from '@capgo/capacitor-social-login';
import { Platform, ToastController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/gym';
import { GymManagementService } from 'src/app/services/gym-management.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  gymId: string | null = null;

  selectedLanguage: string;
  isLoggedIn: boolean = false;
  userInfo: User | null = null;
  showDashboardButton: boolean = false;

  constructor(
    private translateService: TranslateService,
    private appComponent: AppComponent,
    private platform: Platform,
    private route: ActivatedRoute,
    private router: Router,
    private gymManagementService: GymManagementService
  ) {
    this.selectedLanguage = this.translateService.currentLang;

    this.initializeApp();
  }

  ngOnInit() {
    this.gymId = this.route.snapshot.queryParamMap.get('gymId');
    if (!this.gymId) {
      this.gymId = localStorage.getItem('gymId');
    }
  }

  initializeApp() {
    this.platform.ready().then(async () => {
      await SocialLogin.initialize({
        google: {
          webClientId: environment.googleSignInClientId, // the web client id for Android and Web
        },
      });
    });
  }

  ionViewWillEnter() {
    this.loadSessionDetails();
  }

  loadSessionDetails() {
    // Check if user is logged in
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    const userResult = localStorage.getItem('authResult');
    if (userResult) {
      const userObject = JSON.parse(userResult);
      this.userInfo = {
        name: userObject.profile.name,
        phoneNumber: '',
        email: userObject.profile.email,
        dateOfBirth: '',
        gender: 'Male',
        address: '',
        emergencyContact: '',
        expiryDate: '',
        createdDate: '',
        userId: 0,
      };
    } else {
      this.userInfo = null;
    }

    var accessLevel = localStorage.getItem('role');
    console.log('Access Level:', accessLevel);
    if (accessLevel) {
      this.showDashboardButton =
        accessLevel === 'owner' ||
        accessLevel === 'editor' ||
        accessLevel === 'viewer';
    } else {
      this.showDashboardButton = false;
    }
  }

  removeQueryParams() {
    // Store current query params in localStorage
    // Because Google SignIn requires exact redirect URL
    const currentQueryParams = this.route.snapshot.queryParams;
    localStorage.setItem('queryParams', JSON.stringify(currentQueryParams));
    this.router.navigate([], {
      replaceUrl: true,
    });
  }

  restoreQueryParams() {
    const queryParams = localStorage.getItem('queryParams');
    if (queryParams) {
      const parsedQueryParams = JSON.parse(queryParams);
      this.router.navigate([], {
        queryParams: parsedQueryParams,
        replaceUrl: true,
      });
    }
  }

  async login() {
    this.removeQueryParams();

    const response = await SocialLogin.login({
      provider: 'google',
      options: {
        scopes: ['email', 'profile'],
      },
    });

    this.restoreQueryParams();

    if (response.provider === 'google') {
      const result = response.result as GoogleLoginResponseOnline;
      localStorage.setItem('authToken', result?.idToken ?? '');
      localStorage.setItem('authResult', JSON.stringify(result));
      this.getUserPermissions(result?.profile?.email ?? '');
    }
  }

  getUserPermissions(email: string) {
    this.gymManagementService.getUserPermissions('Gym20251', email).subscribe({
      next: (response) => {
        console.log('User permissions:', response);
        localStorage.setItem('role', response.accessLevel);
        this.loadSessionDetails();
      },
      error: (err) => {
        console.error('Error fetching user permissions:', err);
        localStorage.setItem('role', '');
        this.loadSessionDetails();
      },
    });
  }

  openDashboard() {
    this.router.navigate(['/dashboard'], {});
  }

  async logout() {
    await SocialLogin.logout({ provider: 'apple' });
    localStorage.removeItem('authToken');
    localStorage.removeItem('authResult');

    this.loadSessionDetails();
  }

  changeLanguage(event: any) {
    const language = event.detail.value;
    this.appComponent.switchLanguage(language);
  }
}
