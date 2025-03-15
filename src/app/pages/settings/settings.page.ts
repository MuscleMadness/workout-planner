import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {
  selectedLanguage: string;

  constructor(private translateService: TranslateService, private appComponent: AppComponent) {
    this.selectedLanguage = this.translateService.currentLang;
  }

  changeLanguage(event: any) {
    const language = event.detail.value;
    this.appComponent.switchLanguage(language);
  }
}