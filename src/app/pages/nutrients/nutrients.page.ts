import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nutrients',
  templateUrl: './nutrients.page.html',
  styleUrls: ['./nutrients.page.scss'],
})
export class NutrientsPage implements OnInit {
  foodItems: any[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchFoodData();
  }

  fetchFoodData() {
    this.http.get<any[]>('assets/data/nutrients.json').subscribe(
      (data: any[]) => {
        this.foodItems = data;
      },
      (error) => {
        console.error('Error fetching food data:', error);
      }
    );
  }

  sortFoodItems(event: any) {
    const [sortBy, order] = event.detail.value.split('-');
    this.foodItems.sort((a, b) => {
      let comparison = 0;
      if (sortBy === 'name') {
        comparison = a.FoodName.localeCompare(b.FoodName);
      } else if (sortBy === 'protein') {
        comparison = a.Protein - b.Protein;
      } else if (sortBy === 'fat') {
        comparison = a.Fat - b.Fat;
      } else if (sortBy === 'carbs') {
        comparison = a.Carbs - b.Carbs;
      } else if (sortBy === 'calories') {
        comparison = a.Calories - b.Calories;
      } else if (sortBy === 'cost') {
        comparison = a.CostPerTenGram - b.CostPerTenGram;
      }
      return order === 'asc' ? comparison : -comparison;
    });
  }
}
