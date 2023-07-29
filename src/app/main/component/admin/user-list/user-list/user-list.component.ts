import { Component, OnInit } from '@angular/core'
import { AdminService } from '../../admin.service'
import { User, UserStatus } from '../../../../../model/User'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  showPagination: boolean = true
  page: any
  filterValue: string = ''
  users: User[] | any
  protected readonly UserStatus = UserStatus

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getUsers(0, 7, 'username, asc', '').subscribe((page) => {
      this.page = page
      this.users = page.content
    })
  }

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
