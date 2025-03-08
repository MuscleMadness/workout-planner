class Exercise {
  name?: string;
  force?: string;
  level?: string;
  mechanic?: string;
  equipment?: string;
  primaryMuscles?: string[];
  secondaryMuscles?: string[];
  instructions?: string[];
  category?: string;
  images?: string[];
  videos?: string[];
  id?: string;
  isFavourite: boolean = false;
  muscleGroups: string = ""

  get thumbnail(): string | null {
    return this.images && this.images.length > 0
      ? 'assets/thumbnails/' + this.images[0]
      : null;
  }
}
export default Exercise;
