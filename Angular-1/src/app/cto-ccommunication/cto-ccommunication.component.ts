import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BlogPostComponent } from '../blog-post/blog-post.component';

@Component({
  selector: 'app-cto-ccommunication',
  standalone: true,
  imports: [CommonModule, BlogPostComponent],
  templateUrl: './cto-ccommunication.component.html',
  styleUrl: './cto-ccommunication.component.css'
})
export class CtoCCommunicationComponent {
  blogs: Blog[] = [
    {
      Id: 1,
      Title: 'Blog Post 1',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680249116456-e1dc127b9d46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    {
      Id: 2,
      Title: 'Blog Post 2',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680188591202-22a2f6d7d6af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=670&q=80'
    },
    {
      Id: 3,
      Title: 'Blog Post 3',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680013993151-696d40f1e0d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    },
    {
      Id: 4,
      Title: 'Blog Post 4',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680188591320-89711f6e6d7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
    }
  ]

  featureBlogs: Blog[] = [
    {
      Id: 1,
      Title: 'Blog Post 1',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680417265121-9b4bba3553b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      Id: 2,
      Title: 'Blog Post 2',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680281288257-f67a5c3aef16?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80'
    },
    {
      Id: 3,
      Title: 'Blog Post 3',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.unsplash.com/photo-1680363470818-109de6810729?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
    },
    {
      Id: 4,
      Title: 'Blog Post 4',
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      ImageUrl: 'https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  onlikeEvent(Id: number): void {
    console.log(`Id: ${Id} Blog Liked`);
  }
}

export interface Blog {
  Title: string;
  Description: string;
  ImageUrl: string;
  Id: number | string;
}
