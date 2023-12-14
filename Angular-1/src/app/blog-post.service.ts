import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {

  getBlogPosts() {
    return [
      {
        title: "Blog Post 1",
        description: "Blog Post description 1",
        author: "Jhon Doe"
      },
      {
        title: "Blog Post 2",
        description: "Blog Post description 2",
        author: "Marry Doe"
      },
      {
        title: "Blog Post 3",
        description: "Blog Post description 3",
        author: "Ridwich Doe"
      }
    ]
  }
}
