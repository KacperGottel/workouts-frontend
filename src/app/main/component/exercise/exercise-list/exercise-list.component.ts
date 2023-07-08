import { Component, OnInit } from '@angular/core'
import { Exercise } from '../../../../model/Workout'
import { ExerciseDetailsModalComponent } from '../exercise-details-modal/exercise-details-modal.component'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'
import { UserService } from '../../user/service/user.service'
import { ExerciseAddComponentModal } from '../exercise-add-modal/exercise-add-component-modal.component'
import { AuthService } from '../../../../auth/auth.service'
import { AdminService } from '../../admin/admin.service'

@Component({
  selector: 'app-exercise-list',
  templateUrl: './exercise-list.component.html',
  styleUrls: ['./exercise-list.component.css'],
})
export class ExerciseListComponent implements OnInit {
  userExercises: any
  page: any
  showPagination: boolean = true
  filterValue: string = ''
  isAdmin: boolean = false

  constructor(
    private modalService: NgbModal,
    private userService: UserService,
    private authService: AuthService,
    private adminService: AdminService
  ) {}

  ngOnInit(): void {
    this.authService.isAdminSubject.subscribe((isAdmin) => {
      this.isAdmin = isAdmin
    })
    if (this.isAdmin) {
      this.adminService.getExercisesForAcceptance().subscribe((page) => {
        this.page = page
        this.userExercises = page.content
        this.showPagination = page.size > 6
      })
    } else {
      this.userService.getUserExercises().subscribe((page) => {
        this.page = page
        this.userExercises = page.content
        this.showPagination = page.size > 6
      })
    }
  }

  openExerciseDetails(exercise: Exercise): void {
    if (exercise) {
      const modalRef = this.modalService.open(ExerciseDetailsModalComponent, {
        windowClass: 'exercise-details-modal',
        size: 'lg',
      })
      modalRef.componentInstance.exercise = exercise
    }
  }
  openExerciseAddForm(): void {
    const modalRef = this.modalService.open(ExerciseAddComponentModal, {
      windowClass: 'exercise-add-modal',
      size: 'lg',
    })
  }

  pageChange(pageNumber: number) {
    if (this.isAdmin) {
      this.adminService
        .getExercisesForAcceptance(pageNumber)
        .subscribe((page) => {
          this.page = page
          this.userExercises = page.content
        })
    } else {
      this.userService.getUserExercises(pageNumber).subscribe((page) => {
        this.page = page
        this.userExercises = page.content
      })
    }
  }

  change(filterValue: string) {
    if (this.isAdmin) {
      this.adminService
        .getExercisesForAcceptance(0, 7, 'category, asc', filterValue)
        .subscribe((page) => {
          this.page = page
          this.userExercises = page.content
        })
    } else {
      this.userService
        .getUserExercises(0, 7, 'category, asc', filterValue)
        .subscribe((page) => {
          this.page = page
          this.userExercises = page.content
        })
    }
  }
}
