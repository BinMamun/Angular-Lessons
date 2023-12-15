import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {

  changeDate(): void {
    this.inputField.nativeElement.value = this.calender.nativeElement.value;
  }

  @ViewChild("calender", { read: ElementRef, static: true })
  calender!: ElementRef;
  @ViewChild("inputField", { read: ElementRef, static: true })
  inputField!: ElementRef;

  count: number = 0;
  increament(): number {
    return this.count++;
  }
}
