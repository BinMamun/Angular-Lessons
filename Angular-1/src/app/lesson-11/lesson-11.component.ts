import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lesson-11',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './lesson-11.component.html',
  styleUrl: './lesson-11.component.css'
})
export class Lesson11Component {
  blog: any;
  constructor() {
    // this.blog = {
    //   Id: 1,
    //   Title: "Random blog post",
    //   Author: null
    // }
  }
}
