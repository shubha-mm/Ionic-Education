// src/app/pages/course/course.page.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursesPage {
  aiCourses = [
    { image: 'assets/images/ai-course1.jpg', title: 'AI Course 1', subtitle: 'Introduction to AI', description: 'Learn the basics of Artificial Intelligence.', videoUrl: 'https://youtu.be/NwGHeX3vHDI?si=N0Vpa5xbLOIyHIJi' },
    { image: 'assets/images/ai-course2.jpg', title: 'AI Course 2', subtitle: 'AI and Machine Learning', description: 'Explore AI and its applications in Machine Learning.', videoUrl: 'https://www.example.com/ai-course2' },
    { image: 'assets/images/ai-course3.jpg', title: 'AI Course 3', subtitle: 'Deep Learning', description: 'Dive into Deep Learning techniques and frameworks.', videoUrl: 'https://www.example.com/ai-course3' },
  ];

  webCourses = [
    { image: 'assets/images/web-course1.jpg', title: 'Web Development 101', subtitle: 'HTML, CSS, and JavaScript', description: 'Learn the fundamentals of web development.', videoUrl: 'https://www.example.com/web-course1' },
    { image: 'assets/images/web-course2.jpg', title: 'Advanced Web Development', subtitle: 'React and Angular', description: 'Master modern web frameworks like React and Angular.', videoUrl: 'https://www.example.com/web-course2' },
    { image: 'assets/images/web-course3.jpg', title: 'Full-Stack Development', subtitle: 'From Frontend to Backend', description: 'Build complete web applications from scratch.', videoUrl: 'https://www.example.com/web-course3' },
  ];

  dataScienceCourses = [
    { image: 'assets/images/data-science-course1.jpg', title: 'Data Science Basics', subtitle: 'Introduction to Data Science', description: 'Understand the basics of Data Science and its importance.', videoUrl: 'https://www.example.com/data-science-course1' },
    { image: 'assets/images/data-science-course2.jpg', title: 'Data Analysis with Python', subtitle: 'Hands-on Data Analysis', description: 'Learn to analyze data using Python libraries like Pandas and NumPy.', videoUrl: 'https://www.example.com/data-science-course2' },
    { image: 'assets/images/data-science-course3.jpg', title: 'Machine Learning for Beginners', subtitle: 'Introduction to ML', description: 'Get started with Machine Learning and its algorithms.', videoUrl: 'https://www.example.com/data-science-course3' },
  ];

  cyberCourses = [
    { image: 'assets/images/cyber-security-course1.jpg', title: 'Cyber Security Fundamentals', subtitle: 'Basics of Cyber Security', description: 'Learn the foundational principles of Cyber Security.', videoUrl: 'https://www.example.com/cyber-security-course1' },
    { image: 'assets/images/cyber-security-course2.jpg', title: 'Network Security', subtitle: 'Protecting Networks', description: 'Explore strategies for securing networks and data.', videoUrl: 'https://www.example.com/cyber-security-course2' },
    { image: 'assets/images/cyber-security-course3.jpg', title: 'Ethical Hacking', subtitle: 'Become a White Hat Hacker', description: 'Learn ethical hacking techniques to secure systems.', videoUrl: 'https://www.example.com/cyber-security-course3' },
  ];

  openSidebar() {
    // Implementation for opening the sidebar menu
  }

  searchCourses() {
    // Implementation for searching courses
  }

  openVideo(videoUrl: string) {
    window.open(videoUrl, '_blank'); // Opens the video link in a new tab
  }
}
