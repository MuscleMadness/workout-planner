class Equipment {
  name!: string;
  selected: boolean = false;
  constructor(equipment: string) {
    this.name = equipment;
  }
}

export default Equipment;
