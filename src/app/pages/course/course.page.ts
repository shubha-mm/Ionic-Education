import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursesPage {
  aiCourses = [
    { image: 'assets/course/1.jpg', title: 'AI Course 1', subtitle: 'Introduction to AI', description: 'Learn the basics of Artificial Intelligence.', videoUrl: 'https://youtu.be/NwGHeX3vHDI?si=N0Vpa5xbLOIyHIJi' },
    { image: 'assets/course/3.png', title: 'AI Course 2', subtitle: 'AI and Machine Learning', description: 'Learn the basics of Artificial Intelligence.', videoUrl: 'https://www.example.com/ai-course2' },
    { image: 'assets/course/4.png', title: 'AI Course 3', subtitle: 'Deep Learning', description: 'Learn the basics of Artificial Intelligence.', videoUrl: 'https://www.example.com/ai-course3' },
    { image: 'assets/course/Ai 2 image.jpg', title: 'AI Course 4', subtitle: 'AI in Robotics', description: 'Learn the basics of Artificial Intelligence.', videoUrl: 'https://www.example.com/ai-course4' },
  ];

  webCourses = [
    { image: 'assets/web/web 1.webp', title: 'Web Development 101', subtitle: 'HTML, CSS, and JavaScript', description: 'Learn how to secure web applications from common threats.', videoUrl: 'https://www.example.com/web-course1' },
    { image: 'assets/web/web 2.jpg', title: 'Advanced Web Development', subtitle: 'React and Angular', description: 'Learn how to secure web applications from common threats.', videoUrl: 'https://www.example.com/web-course2' },
    { image: 'assets/web/web 3.jpg', title: 'Full-Stack Development', subtitle: 'From Frontend to Backend', description: 'Learn how to secure web applications from common threats.', videoUrl: 'https://www.example.com/web-course3' },
    { image: 'assets/web/web 4.jpg', title: 'Web Security', subtitle: 'Secure Web Applications', description: 'Learn how to secure web applications from common threats.', videoUrl: 'https://www.example.com/web-course4' },
  ];

  dataScienceCourses = [
    { image: 'assets/images/data-science-course1.jpg', title: 'Data Science Basics', subtitle: 'Introduction to Data Science', description: 'Understand the basics of Data Science and its importance.', videoUrl: 'https://www.example.com/data-science-course1' },
    { image: 'assets/images/data-science-course2.jpg', title: 'Data Analysis with Python', subtitle: 'Hands-on Data Analysis', description: 'Learn about data using Python libraries like Pandas and NumPy.', videoUrl: 'https://www.example.com/data-science-course2' },
    { image: 'assets/images/data-science-course3.jpg', title: 'Machine Learning for Beginners', subtitle: 'Introduction to ML', description: 'Get started with Machine Learning and its algorithms.', videoUrl: 'https://www.example.com/data-science-course3' },
    { image: 'assets/images/data-science-course4.jpg', title: 'Data Visualization', subtitle: 'Create Visualizations', description: 'Learn to create data visualizations using tools like Matplotlib.', videoUrl: 'https://www.example.com/data-science-course4' },
  ];

  cyberCourses = [
    { image: 'assets/images/cyber-security-course1.jpg', title: 'Cyber Security Fundamentals', subtitle: 'Basics of Cyber Security', description: 'Learn the foundational principles of Cyber Security.', videoUrl: 'https://www.example.com/cyber-security-course1' },
    { image: 'assets/images/cyber-security-course2.jpg', title: 'Network Security', subtitle: 'Protecting Networks', description: 'Explore strategies for securing networks and data.', videoUrl: 'https://www.example.com/cyber-security-course2' },
    { image: 'assets/images/cyber-security-course3.jpg', title: 'Ethical Hacking', subtitle: 'Become a White Hat Hacker', description: 'Learn ethical hacking techniques to secure systems.', videoUrl: 'https://www.example.com/cyber-security-course3' },
    { image: 'assets/images/cyber-security-course4.jpg', title: 'Cyber Law', subtitle: 'Cyber Security Laws', description: 'Understand the legal aspects of cyber security.', videoUrl: 'https://www.example.com/cyber-security-course4' },
  ];

  openSidebar() {

  }

  searchCourses() {

  }

  openVideo(videoUrl: string) {
    window.open(videoUrl, '_blank');
  }
}
