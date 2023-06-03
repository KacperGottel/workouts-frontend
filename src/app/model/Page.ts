import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('Page')
export class Page<T> {
  @JsonProperty('content', Object, true)
  content: T[] | undefined

  @JsonProperty('totalPages', Number, true)
  totalPages: number | undefined

  @JsonProperty('totalElements', Number, true)
  totalElements: number | undefined

  @JsonProperty('size', Number, true)
  size: number | undefined

  @JsonProperty('number', Number, true)
  number: number | undefined

  @JsonProperty('numberOfElements', Number, true)
  numberOfElements: number | undefined

  @JsonProperty('first', Boolean, true)
  first: boolean | undefined

  @JsonProperty('last', Boolean, true)
  last: boolean | undefined

  @JsonProperty('empty', Boolean, true)
  empty: boolean | undefined
}
