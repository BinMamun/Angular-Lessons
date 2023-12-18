import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit {
  ngOnInit(): void {
    console.log("Child onInit called");
  }
  constructor() {
    console.log("Child component called")
  }
}
