import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  @Output() onLikeEvent = new EventEmitter();
  @Input({ required: true }) blog!: Blog;

  onLike(): void {
    this.onLikeEvent.emit(this.blog.Id);
  }
}
