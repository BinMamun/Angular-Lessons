import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structaral-directive',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './structaral-directive.component.html',
  styleUrl: './structaral-directive.component.css'
})
export class StructaralDirectiveComponent {
  blogs = ["Blog-1", "Blog-2"];
}
