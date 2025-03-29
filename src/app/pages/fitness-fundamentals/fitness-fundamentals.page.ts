import { Component, OnInit } from '@angular/core';
import { FundamentalsService } from 'src/app/services/fundamentals.service';
import { FitnessFundamentalCategory } from 'src/app/models/FitnessFundamental';

@Component({
  selector: 'app-fitness-fundamentals',
  templateUrl: './fitness-fundamentals.page.html',
  styleUrls: ['./fitness-fundamentals.page.scss'],
})
export class FitnessFundamentalsPage implements OnInit {
  categories: FitnessFundamentalCategory[] = []; // Array of grouped categories

  constructor(private fundamentalsService: FundamentalsService) {}

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
}