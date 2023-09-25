import { Component } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';

import { Course } from '../model/course';
import { CoursesService } from './../services/courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  courses$: Observable<Course[]>;
  displayedColumns = ['name','categoria'];

constructor(private coursesService: CoursesService) {
    this.courses$ = this.coursesService.list().pipe(
      catchError(error => {
        return of([])
      })
    );
  }

}
