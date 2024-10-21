import { Component } from '@angular/core';

@Component({
  selector: 'app-practice-test',
  templateUrl: './practice-test.page.html',
  styleUrls: ['./practice-test.page.scss'],
})
export class PracticeTestPage {

  tests = [
    { name: 'Web Development', price: 500 },
    { name: 'Cyber Security', price: 500 },
    { name: 'Data Science' , price: 500},
    { name: 'Machine Learning', price: 500 },
    { name: 'Mobile App Development', price: 500 },
    { name: 'Cloud Computing', price: 500 },
    { name: 'Blockchain', price: 500 },
    { name: 'Artificial Intelligence', price: 500 },
    { name: 'Networking', price: 500 },
    { name: 'Software Testing' , price: 500}
  ];

  constructor() { }

  selectTest(testName: string) {
    console.log('Selected Test:', testName);
   
  }
}
