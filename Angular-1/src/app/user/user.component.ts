import { Component } from '@angular/core';
import { IUser } from './user.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  users: IUser[] = [
    {
      name: "Jhon Doe",
      email: "jhon@xyz.com",
      active: true,
      image: "https://cdn-icons-png.flaticon.com/128/3048/3048122.png",
      age: 28
    },
    {
      name: "Marry Cris",
      email: "marry@xyz.com",
      active: false,
      image: "https://cdn-icons-png.flaticon.com/128/2922/2922561.png",
      age: 25
    },
    {
      name: "Maximillion Hernadez",
      email: "max@xyz.com",
      active: true,
      image: "https://cdn-icons-png.flaticon.com/128/13353/13353353.png",
      age: 15
    },
  ]
}
