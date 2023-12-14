import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { BlogPostService } from './blog-post.service';


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
  title = 'Blog Post';
  blogs = ["Blog 1", "Blog 2", "Blog 3"];
  number = 1;

  getTitile() {
    return this.title;
  }

  clicked(event: any) {
    event.stopPropagation();
    console.log("Event bubble or propagation is stopped.");
    this.number++;
  }

  div1clicked() {
    console.log("Div 1 Clicked");
  }
  div2clicked() {
    console.log("Div 2 Clicked");
  }

  blogPosts;

  constructor(blogService: BlogPostService) {
    this.blogPosts = blogService.getBlogPosts();
  }
}