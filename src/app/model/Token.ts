import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('UserDTO')
export class User {
  @JsonProperty('id', Number, true)
  public id: number | undefined
}

@JsonObject('TokenDTO')
export interface Token {
  @JsonProperty('admin', Boolean, true)
  isAdmin: boolean | undefined
  @JsonProperty('token', Boolean, true)
  token: string | undefined
}
