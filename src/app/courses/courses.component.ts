import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  title = "Its the Courses Components.";
  
  courses = ["English", "marathi"," hindi", "Telugu", "Bengali"];
}
