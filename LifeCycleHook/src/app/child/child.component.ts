import { CommonModule } from '@angular/common';
import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { interval } from 'rxjs';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  constructor() {
    console.log("Child component called")
  }

  intervalId!: any;
  count: number = 1;
  ngOnInit(): void {
    console.log("Child onInit called");
    this.intervalId = setInterval(() => {
      this.count++;
    }, 1000);
  }

  @Input() text!: string;
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.text);
  }

  ngOnDestroy(): void {
    console.log("Child Destroyed.")
    clearInterval(this.intervalId);
  }
}
