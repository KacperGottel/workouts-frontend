export class Workout {
  constructor(
    name: string,
    series: number,
    reps: number,
    description: string,
    video: string,
    images: string[],
  ) {
    this.name = name
    this.series = series
    this.reps = reps
    this.description = description
    this.video = video
    this.images = images
  }

  name: string;
  series: number;
  reps: number;
  description: string;
  video: string;
  images: string[];
}
