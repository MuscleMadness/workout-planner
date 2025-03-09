export interface MuscleGroup {
  key: string;
  values: string[];
  name: string;
  orderNumber: number;
}

export interface Muscle {
  key: string;
  name: string;
  imageName: string;
  selected?: boolean;
}

export interface MuscleGroupNew {
  key: string;
  values: string[];
  muscles: Muscle[];
  name: string;
  orderNumber: number;
  selected?: boolean;
}