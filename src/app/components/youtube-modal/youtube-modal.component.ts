import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-youtube-modal',
  templateUrl: './youtube-modal.component.html',
  styleUrls: ['./youtube-modal.component.scss'],
})
export class YoutubeModalComponent {
  @Input() videoId!: string;

  constructor(private modalController: ModalController) {
    console.log('Video ID:', this.videoId);
  }

  OnInit() {
    console.log('Video ID:', this.videoId);
  }

  closeModal() {
    this.modalController.dismiss();
  }
}