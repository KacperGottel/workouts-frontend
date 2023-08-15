import { JsonObject, JsonProperty } from 'json2typescript'

export enum UserStatus {
  ENABLED = 'ENABLED',
  DISABLED = 'DISABLED',
  BLOCKED = 'BLOCKED',
  DELETED = 'DELETED',
}

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
  @JsonProperty('status', [UserStatus], true)
  public status: UserStatus | undefined
  @JsonProperty('user_token', String, true)
  public userToken: string | undefined
  @JsonProperty('created', String, true)
  public created: string | undefined
  @JsonProperty('expired', String, true)
  public expired: string | undefined
}
