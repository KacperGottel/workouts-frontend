import { JsonObject, JsonProperty } from 'json2typescript'

export enum ExerciseCategory {
  PUSH = 'PUSH',
  PULL = 'PULL',
  LEGS = 'LEGS',
  ACCESSORY = 'ACCESSORY',
}

@JsonObject('ExerciseDTO')
export class Exercise {
  @JsonProperty('id', Number, true)
  public id: number | undefined
  @JsonProperty('category', [ExerciseCategory], true)
  public category: ExerciseCategory | undefined
  @JsonProperty('name', String, true)
  public name: string | undefined
  @JsonProperty('description', String, true)
  public description: string | undefined
  @JsonProperty('video_url', String, true)
  public video_url: string | undefined
  @JsonProperty('img_url', String, true)
  public img_url: string | undefined
  @JsonProperty('series', String, true)
  public series: string | undefined
  @JsonProperty('reps', String, true)
  public reps: string | undefined
}

@JsonObject('WorkoutDTO')
export class Workout {
  @JsonProperty('push', [Exercise], true)
  public push: Exercise | undefined
  @JsonProperty('pull', [Exercise], true)
  public pull: Exercise | undefined
  @JsonProperty('legs', [Exercise], true)
  public legs: Exercise | undefined
  @JsonProperty('accessory', [Exercise], true)
  public accessory: Exercise | undefined
}
