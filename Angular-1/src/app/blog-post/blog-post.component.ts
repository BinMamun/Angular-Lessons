import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Blog, CtoCCommunicationComponent } from '../cto-ccommunication/cto-ccommunication.component';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [CommonModule, CtoCCommunicationComponent],
  templateUrl: './blog-post.component.html',
  styleUrl: './blog-post.component.css'
})
export class BlogPostComponent {
  @Input() blog!: Blog;
}
