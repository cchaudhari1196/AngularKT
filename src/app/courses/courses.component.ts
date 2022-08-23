import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  // Traditional Way
  onKeyPress(e: Event){
    let element: HTMLInputElement = ( e.target as HTMLInputElement);
    console.log(element.value)
  }
  // Angular's way
  captureMail(email: String){
    console.log(email)
  }
}
