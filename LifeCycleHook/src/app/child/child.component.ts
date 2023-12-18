import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges {
  constructor() {
    console.log("Child component called")
  }


  ngOnInit(): void {
    console.log("Child onInit called");
  }
  @Input() text!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.text);
  }

}
