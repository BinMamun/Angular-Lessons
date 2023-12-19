import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  users = [
    {
      name: "Afsan Reza",
      date_of_birth: "1998-12-25",
      created_date: "2013-07-25"
    },
    {
      name: "Akash Ahmed",
      date_of_birth: "2000-12-25",
      created_date: "2015-03-25"
    },
    {
      name: "Tanim Mahbir",
      date_of_birth: "2002-12-25",
      created_date: "2023-05-25"
    }
  ]

  adduser() {
    this.users.push({
      name: "Konan Doyel",
      date_of_birth: "1978",
      created_date: "2020-07-15"
    });
  }

  calculateAge(date: string): number {
    console.log(date);
    return new Date().getFullYear() - new Date(date).getFullYear();
  }
}
