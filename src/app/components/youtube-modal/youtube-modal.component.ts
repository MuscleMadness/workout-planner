import { Component, HostListener, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-youtube-modal',
  templateUrl: './youtube-modal.component.html',
  styleUrls: ['./youtube-modal.component.scss'],
})
export class YoutubeModalComponent {
  @Input() videoId!: string;
  maxWidth: number = 640;
  screenHeight: number = window.innerHeight;
  screenWidth = window.innerWidth;

  constructor(private modalController: ModalController) {
    this.updateVideoDimensions();
  }

  private updateVideoDimensions() {
    this.screenWidth = Math.min(window.innerWidth, this.maxWidth);
    this.screenHeight = this.screenWidth * (9 / 16);
  }

  OnInit() {
    console.log('Video ID:', this.videoId);
  }

  closeModal() {
    this.modalController.dismiss();
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.updateVideoDimensions();
  }
}
