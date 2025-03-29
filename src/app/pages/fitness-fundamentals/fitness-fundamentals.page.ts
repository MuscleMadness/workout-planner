import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FundamentalsService } from 'src/app/services/fundamentals.service';
import { FitnessFundamentalCategory } from 'src/app/models/FitnessFundamental';
import { YoutubeModalComponent } from 'src/app/components/youtube-modal/youtube-modal.component';

@Component({
  selector: 'app-fitness-fundamentals',
  templateUrl: './fitness-fundamentals.page.html',
  styleUrls: ['./fitness-fundamentals.page.scss'],
})
export class FitnessFundamentalsPage implements OnInit {
  categories: FitnessFundamentalCategory[] = []; // Array of grouped categories

  constructor(private fundamentalsService: FundamentalsService, private modalController: ModalController) {}

  ngOnInit() {
    this.loadFundamentals();
  }

  // Load and group fundamentals
  loadFundamentals() {
    this.fundamentalsService.getAllFundamentals().subscribe({
      next: (data) => {
        this.categories = this.fundamentalsService.groupFundamentalsByCategory(data);
        console.log('Loaded Fundamentals:', this.categories);
      },
      error: (error) => {
        console.error('Error loading fundamentals:', error);
      },
    });
  }

  async openVideo(videoId: string) {
    console.log('Opening video:', videoId);
    const modal = await this.modalController.create({
      component: YoutubeModalComponent,
      componentProps: { videoId },
    });
    await modal.present();
  }

}