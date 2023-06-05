import { JsonObject, JsonProperty } from 'json2typescript'

@JsonObject('Sort')
export class Sort {
  @JsonProperty('empty', Boolean)
  empty: boolean = false

  @JsonProperty('sorted', Boolean)
  sorted: boolean = false

  @JsonProperty('unsorted', Boolean)
  unsorted: boolean = false
}

@JsonObject('Pageable')
export class Pageable {
  @JsonProperty('sort', Sort)
  sort: Sort = new Sort()

  @JsonProperty('offset', Number)
  offset: number = 0

  @JsonProperty('pageNumber', Number)
  pageNumber: number = 0

  @JsonProperty('pageSize', Number)
  pageSize: number = 0

  @JsonProperty('paged', Boolean)
  paged: boolean = false

  @JsonProperty('unpaged', Boolean)
  unpaged: boolean = false
}

@JsonObject('Page')
export class Page<T> {
  @JsonProperty('content', [Object])
  content: T[] = []

  @JsonProperty('pageable', Pageable)
  pageable: Pageable = new Pageable()

  @JsonProperty('totalPages', Number)
  totalPages: number = 0

  @JsonProperty('totalElements', Number)
  totalElements: number = 0

  @JsonProperty('last', Boolean)
  last: boolean = false

  @JsonProperty('size', Number)
  size: number = 0

  @JsonProperty('number', Number)
  number: number = 0

  @JsonProperty('sort', Sort)
  sort: Sort = new Sort()

  @JsonProperty('first', Boolean)
  first: boolean = false

  @JsonProperty('numberOfElements', Number)
  numberOfElements: number = 0

  @JsonProperty('empty', Boolean)
  empty: boolean = false

  constructor(data: any) {
    this.content = data.content
    this.pageable = data.pageable
    this.totalPages = data.totalPages
    this.totalElements = data.totalElements
    this.last = data.last
    this.size = data.size
    this.number = data.number
    this.sort = data.sort
    this.first = data.first
    this.numberOfElements = data.numberOfElements
    this.empty = data.empty
  }
}
