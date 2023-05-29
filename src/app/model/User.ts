import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('UserDTO')
export class User {
  @JsonProperty('id', Number, true)
  public id: number | undefined
  @JsonProperty('email', String, true)
  public email: string | undefined
  @JsonProperty('username', String, true)
  public username: string | undefined
  @JsonProperty('scope', String, true)
  public authority: string | undefined
  @JsonProperty('status', String, true)
  public status: string | undefined
  @JsonProperty('user_token', String, true)
  public userToken: string | undefined
  @JsonProperty('created', String, true)
  public created: string | undefined
  @JsonProperty('expired', String, true)
  public expired: string | undefined
}
