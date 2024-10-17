import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  courses = [
    { title: 'Course 1', image: 'assets/img/cyber 5.jpg' },
    { title: 'Course 2', image: 'assets/img/Ai 2 image.jpg' },
    { title: 'Course 3', image: 'assets/img/DATA sci 2.jpg' },
    { title: 'Course 4', image: 'assets/img/data sci 5.jpg' },
  ];
  books = [
    { title: 'Book 1', image: 'assets/img/1.jpg' },
    { title: 'Book 2', image: 'assets/img/3.png' },
    { title: 'Book 3', image: 'assets/img/4.png' },
    { title: 'Book 4', image: 'assets/img/cyber 5.jpg' },
  ];
  tests = ['Test 1', 'Test 2', 'Test 3', 'Test 4'];

  constructor(private authService: AuthService) {}

  logout() {
    this.authService.logout();
  }
}
