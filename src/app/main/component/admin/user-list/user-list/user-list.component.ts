import { Component } from '@angular/core'
import { AdminService } from '../../admin.service'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  showPagination: boolean = true
  page: any
  filterValue: string = ''
  users: any

  constructor(private adminService: AdminService) {}

  pageChange(pageNumber: number) {
    this.adminService.getUsers(pageNumber).subscribe((page) => {
      this.page = page
      this.users = page.content
    })
  }
  change(filterValue: string) {
    this.adminService
      .getUsers(0, 7, 'username, asc', filterValue)
      .subscribe((page) => {
        this.page = page
        this.users = page.content
      })
  }
}
