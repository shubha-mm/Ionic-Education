import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  courses = ['Course 1', 'Course 2', 'Course 3'];
  books = ['Book 1', 'Book 2', 'Book 3'];
  tests = ['Test 1', 'Test 2', 'Test 3'];

  constructor() {}
}
