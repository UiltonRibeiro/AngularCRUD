import { Component } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  public courses: Course[] = [
    {_id: "1",name: "Angular", categoria: "Front-end"}
  ];
  displayedColumns = ['name','categoria'];

  constructor(){
    //this.courses = [];
  }

}
