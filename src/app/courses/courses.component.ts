import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = "Its the Courses Components.";
  courses :string[]= [];

  constructor(public coursesService:CoursesService){
    this.courses = coursesService.getCourses();
  }
  
}
