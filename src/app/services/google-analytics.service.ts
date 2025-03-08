import { Injectable } from '@angular/core';
import { MEASUREMENT_ID } from '../models/AnalyticEvents';

declare var gtag : any;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsService {

  constructor() { }

  trackPageView(url: string) {
    gtag('config', MEASUREMENT_ID, { page_path: url });
  }

   trackEvent(eventName: string, eventCategory: string, eventLabel: string, value?: string) {
    gtag('event', eventName, {
      // event Type - example: 'SCROLL_TO_TOP_CLICKED'
      'event_category': eventCategory,
      // the label that will show up in the dashboard as the events name
      'event_label': eventLabel,
      // a short description of what happened
      'value': value
    });
  }
}
