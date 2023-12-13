import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { SideBarComponent } from './side-bar/side-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, BlogPostComponent, SideBarComponent]
})
export class AppComponent {
  title = 'Angular';
}
