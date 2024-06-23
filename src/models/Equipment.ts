class Equipment {
  name!: string;
  selected: boolean = false;
  constructor(equipment: string) {
    this.name = equipment;
  }

  capitalize(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  get displayName(): string {
    return this.capitalize(this.name);
  }
}

export default Equipment;
