import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';

import { MenuController, Platform, ToastController } from '@ionic/angular';

import { StatusBar } from '@capacitor/status-bar';
import { SplashScreen } from '@capacitor/splash-screen';

import { Storage } from '@ionic/storage-angular';

import { UserData } from './providers/user-data';
import { register } from 'swiper/element/bundle';
import { FileDownloadService } from './services/file-downloader-service';
import { MEASUREMENT_ID } from './models/AnalyticEvents';
import { GoogleAnalyticsService } from './services/google-analytics.service';
import { TranslateService } from '@ngx-translate/core';

register();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  appPages = [
    {
      title: 'Workouts',
      url: '/app/tabs/workouts',
      icon: 'calendar'
    },
    {
      title: 'Planner',
      url: '/app/tabs/workout-planner',
      icon: 'people'
    },    
    {
      title: 'Nutrients',
      url: '/app/tabs/nutrients',
      icon: 'nutrition'
    },
    {
      title: 'Know your Muscles',
      url: '/muscle-group',
      icon: 'man'
    },    
    {
      title: 'Fitness Fundamentals',
      url: '/fitness-fundamentals',
      icon: 'book'
    },
    {
      title: 'Equipments',
      url: '/equipments',
      icon: 'barbell'
    },
    {
      title: 'Settings',
      url: '/settings',
      icon: 'settings'
    },
    {
      title: 'About',
      url: '/about',
      icon: 'information-circle'
    }
  ];
  loggedIn = false;
  dark = false;

  constructor(
    private menu: MenuController,
    private platform: Platform,
    private router: Router,
    private storage: Storage,
    private userData: UserData,
    private swUpdate: SwUpdate,
    private toastCtrl: ToastController,
    private fileDownloadService: FileDownloadService,
    private gaService: GoogleAnalyticsService,
    private translate: TranslateService
  ) {
    this.initializeTranslation();
    this.initializeApp();
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.gaService.trackPageView(event.urlAfterRedirects);
      }      
    })
  }

  async ngOnInit() {
    await this.storage.create();
    this.checkLoginStatus();
    this.listenForLoginEvents();

    this.swUpdate.versionUpdates.subscribe(async res => {
      const toast = await this.toastCtrl.create({
        message: 'Update available!',
        position: 'bottom',
        buttons: [
          {
            role: 'cancel',
            text: 'Reload'
          }
        ]
      });

      await toast.present();

      toast
        .onDidDismiss()
        .then(() => this.swUpdate.activateUpdate())
        .then(() => window.location.reload());
    });
  }  
  
  initializeTranslation() {
    this.translate.addLangs(['en', 'ta']);
    this.translate.setDefaultLang('en');
  
    const savedLang = localStorage.getItem('lang');
    if (savedLang) {
      this.translate.use(savedLang);
    } else {
      const browserLang = this.translate.getBrowserLang();
      console.log('Browser Lang', browserLang);
      const defaultLang = browserLang && browserLang.match(/en|ta/) ? browserLang : 'en';
      console.log('Default Lang', defaultLang);
      this.translate.use(defaultLang);
      localStorage.setItem('lang', defaultLang);
    }
  }
  
  switchLanguage(lang: string) {
    console.log('Switching language to', lang);
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('hybrid')) {
        StatusBar.hide();
        SplashScreen.hide();
      }
    });
  }

  checkLoginStatus() {
    return this.userData.isLoggedIn().then(loggedIn => {
      return this.updateLoggedInStatus(loggedIn);
    });
  }

  updateLoggedInStatus(loggedIn: boolean) {
    setTimeout(() => {
      this.loggedIn = loggedIn;
    }, 300);
  }

  listenForLoginEvents() {
    window.addEventListener('user:login', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:signup', () => {
      this.updateLoggedInStatus(true);
    });

    window.addEventListener('user:logout', () => {
      this.updateLoggedInStatus(false);
    });
  }

  logout() {
    this.userData.logout().then(() => {
      return this.router.navigateByUrl('/app/tabs/workouts');
    });
  }

  openTutorial() {
    this.menu.enable(false);
    this.storage.set('ion_did_tutorial', false);
    this.router.navigateByUrl('/tutorial');
  }
}
