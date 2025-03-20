class Equipment {
  id!: string;
  name!: string;
  selected: boolean = false;
  exercises: string[] = [];
  videos: string[] = [];
  thumbnail?: string; // Optional field for the thumbnail image URL

  constructor(equipment: { id: string; name?: string; exercises?: string[]; videos?: string[]; thumbnail?: string }) {
    this.id = equipment.id;
    this.name = equipment.name ?? equipment.id;
    this.exercises = equipment.exercises || [];
    this.videos = equipment.videos || [];
    this.thumbnail = equipment.thumbnail;
  }

  capitalize(string: string): string {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get displayName(): string {
    return this.capitalize(this.name);
  }
}

export default Equipment;