import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { MenuController } from '@ionic/angular';

import { Storage } from '@ionic/storage-angular';
import { CATEGORY_TUTORIAL, TYPE_TUTORIAL_COMPLETED } from 'src/app/models/AnalyticEvents';
import { GoogleAnalyticsService } from 'src/app/services/google-analytics.service';

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
  styleUrls: ['./tutorial.scss'],
})
export class TutorialPage {
  showSkip = true;

  constructor(
    public menu: MenuController,
    public router: Router,
    public storage: Storage,
    private googleAnalyticsService: GoogleAnalyticsService
  ) {}

  skipTutorial() {
    this.googleAnalyticsService.trackEvent(TYPE_TUTORIAL_COMPLETED, CATEGORY_TUTORIAL, 'Skip Tutorial Tapped');

    this.openHomePage();
  }

  startApp() {
    this.googleAnalyticsService.trackEvent(TYPE_TUTORIAL_COMPLETED, CATEGORY_TUTORIAL, 'Tutorial Completed');

    this.openHomePage()
      .then(() => this.storage.set('ion_did_tutorial', true));
  }

  openHomePage() {
    return this.router.navigateByUrl('/app/tabs/workouts', { replaceUrl: true });
  }

  ionViewWillEnter() {
    this.storage.get('ion_did_tutorial').then(res => {
      if (res === true) {
        this.openHomePage();
      }
    });

    this.menu.enable(false);
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
    this.menu.enable(true);
  }
}
