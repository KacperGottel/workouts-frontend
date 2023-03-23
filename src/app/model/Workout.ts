export class Workout {
  constructor(mobility: Exercise, plyo: Exercise, push: Exercise, pull: Exercise, legsPush: Exercise, legsPull: Exercise, accessory: Exercise, abs: Exercise) {
    this.mobility = mobility;
    this.plyo = plyo;
    this.push = push;
    this.pull = pull;
    this.legsPush = legsPush;
    this.legsPull = legsPull;
    this.accessory = accessory;
    this.abs = abs;
  }

  mobility: Exercise;
  plyo: Exercise;
  push: Exercise;
  pull: Exercise;
  legsPush: Exercise;
  legsPull: Exercise;
  accessory: Exercise;
  abs: Exercise;
}

export class Exercise {

  constructor(id: number, category: ExerciseCategory, name: string, description: string, videoUrl: string, imgUrl: string) {
    this.id = id;
    this.category = category;
    this.name = name;
    this.description = description;
    this.videoUrl = videoUrl;
    this.imgUrl = imgUrl;
  }

  id: number;
  category: ExerciseCategory;
  name: string;
  description: string;
  videoUrl: string;
  imgUrl: string;
}

export enum ExerciseCategory {
  MOBILITY = "MOBILITY",
  PLYO = "PLYO",
  PUSH = "PUSH",
  PULL = "PULL",
  LEGS_PUSH = "LEGS_PUSH",
  LEGS_PULL = "LEGS_PULL",
  ACCESSORY = "ACCESSORY",
  ABS = "ABS"
}
