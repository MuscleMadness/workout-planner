import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class UserData {
  favorites: string[] = [];
  HAS_LOGGED_IN = 'hasLoggedIn';
  HAS_SEEN_TUTORIAL = 'hasSeenTutorial';

  constructor(public storage: Storage) {
    this.initializeStorage().then(() => {
      this.initializeFavorites();
    });
  }

  async initializeStorage() {
    await this.storage.create();
  }

  async initializeFavorites() {
    this.favorites = (await this.storage.get('favourites')) || [];
  }

  hasFavorite(workoutId: string): boolean {
    return this.favorites.indexOf(workoutId) > -1;
  }

  addFavorite(workoutId: string): void {
    if (!this.hasFavorite(workoutId)) {
      this.favorites.push(workoutId);
      this.storage.set('favourites', this.favorites);
    } else {
      console.log('Workout already favorited');
    }
  }

  removeFavorite(workoutId: string): void {
    const index = this.favorites.indexOf(workoutId);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    this.storage.set('favourites', this.favorites);
  }

  login(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:login'));
    });
  }

  signup(username: string): Promise<any> {
    return this.storage.set(this.HAS_LOGGED_IN, true).then(() => {
      this.setUsername(username);
      return window.dispatchEvent(new CustomEvent('user:signup'));
    });
  }

  logout(): Promise<any> {
    return this.storage
      .remove(this.HAS_LOGGED_IN)
      .then(() => {
        return this.storage.remove('username');
      })
      .then(() => {
        window.dispatchEvent(new CustomEvent('user:logout'));
      });
  }

  setUsername(username: string): Promise<any> {
    return this.storage.set('username', username);
  }

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  }

  isLoggedIn(): Promise<boolean> {
    return this.storage.get(this.HAS_LOGGED_IN).then((value) => {
      return value === true;
    });
  }

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get(this.HAS_SEEN_TUTORIAL).then((value) => {
      return value;
    });
  }
}
