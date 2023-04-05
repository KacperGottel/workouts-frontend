import { JsonObject, JsonProperty } from 'json2typescript'

export enum ExerciseCategory {
  MOBILITY = 'MOBILITY',
  PLYO = 'PLYO',
  PUSH = 'PUSH',
  PULL = 'PULL',
  LEGS_PUSH = 'LEGS_PUSH',
  LEGS_PULL = 'LEGS_PULL',
  ACCESSORY = 'ACCESSORY',
  ABS = 'ABS',
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
  public videoUrl: string | undefined
  @JsonProperty('img_url', String, true)
  public imgUrl: string | undefined
}

@JsonObject('WorkoutDTO')
export class Workout {
  @JsonProperty('mobility', [Exercise], true)
  public mobility: Exercise | undefined
  @JsonProperty('plyo', [Exercise], true)
  public plyo: Exercise | undefined
  @JsonProperty('push', [Exercise], true)
  public push: Exercise | undefined
  @JsonProperty('pull', [Exercise], true)
  public pull: Exercise | undefined
  @JsonProperty('legs_push', [Exercise], true)
  public legsPush: Exercise | undefined
  @JsonProperty('legs_pull', [Exercise], true)
  public legsPull: Exercise | undefined
  @JsonProperty('accessory', [Exercise], true)
  public accessory: Exercise | undefined
  @JsonProperty('abs', [Exercise], true)
  public abs: Exercise | undefined
}
