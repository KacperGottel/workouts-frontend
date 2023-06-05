import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Page } from '../../../model/Page'
import { Exercise } from '../../../model/Workout'

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() page: Page<Exercise> | undefined
  @Output() pageChange: EventEmitter<number> = new EventEmitter<number>()

  hasPrevious(): boolean {
    return this.page ? !this.page.first : false
  }

  hasNext(): boolean {
    return this.page ? !this.page.last : false
  }

  previousPage(): void {
    if (this.hasPrevious()) {
      const pageNumber = this.page?.pageable.pageNumber
      const numberToEmit = pageNumber ? pageNumber : 1
      this.pageChange.emit(numberToEmit - 1)
    }
  }

  nextPage(): void {
    if (this.hasNext()) {
      const pageNumber = this.page?.pageable.pageNumber
      const numberToEmit = pageNumber ? pageNumber : 0
      this.pageChange.emit(numberToEmit + 1)
    }
  }
}
