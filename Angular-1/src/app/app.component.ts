import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    CommonModule,
    RouterOutlet,
    BlogPostComponent
  ]
})
export class AppComponent {
  title = 'Angular Blog Post';

  blogs = ["Blog 1", "Blog 2", "Blog 3"];

  getTitile() {
    return this.title;
  }
}
