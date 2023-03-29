import {JsonObject, JsonProperty} from 'json2typescript';

@JsonObject('WorkoutDTO')
export class Workout {

  @JsonProperty(String, "mobility")
  mobility?: Exercise = undefined;
  @JsonProperty(String, "plyo")
  plyo?: Exercise = undefined;
  @JsonProperty(String, "push")
  push?: Exercise = undefined;
  @JsonProperty(String, "pull")
  pull?: Exercise = undefined;
  @JsonProperty(String, "legs_push")
  legsPush?: Exercise = undefined;
  @JsonProperty(String, "legs_pull")
  legsPull?: Exercise = undefined;
  @JsonProperty(String, "accessory")
  accessory?: Exercise = undefined;
  @JsonProperty(String, "abs")
  abs?: Exercise = undefined;
}
@JsonObject('ExerciseDTO')
export class Exercise {

  @JsonProperty(String, "id")
  id?: number | undefined;
  @JsonProperty(String, "category")
  category?: ExerciseCategory = undefined;
  @JsonProperty(String, "name")
  name?: string = undefined;
  @JsonProperty(String, "description")
  description?: string = undefined;
  @JsonProperty(String, "video_url")
  videoUrl?: string = undefined;
  @JsonProperty(String, "img_url")
  imgUrl?: string = undefined;
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
