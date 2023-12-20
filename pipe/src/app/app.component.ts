import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CalculateAgePipe } from './calculate-age.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe'
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CalculateAgePipe, FormsModule, FilterPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  searchText!: string;

  users = [
    {
      name: "Afsan Reza",
      date_of_birth: "1998-12-25",
      created_date: "2013-07-25"
    },
    {
      name: "Siyan Ahmed",
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
    this.users = [...this.users, {
      name: "Konan Doyel",
      date_of_birth: "1978",
      created_date: "2020-07-15"
    }]

    // this.users.push({
    //   name: "Konan Doyel",
    //   date_of_birth: "1978",
    //   created_date: "2020-07-15"
    // });
  }
}
