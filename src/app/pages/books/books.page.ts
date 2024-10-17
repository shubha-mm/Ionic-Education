import { Component } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  styleUrls: ['./books.page.scss'],
})
export class BooksPage {
  aiBooks = [
    {
      title: 'AI Fundamentals',
      subtitle: 'Learn the Basics',
      description: 'A comprehensive guide to AI.',
      image: 'assets/course/1.jpg',
      url: 'https://link-to-ai-book.com'
    },
    {
      title: 'Advanced AI Concepts',
      subtitle: 'Deep Learning and Beyond',
      description: 'Explore advanced topics in AI.',
      image: 'assets/course/3.png',
      url: 'https://link-to-advanced-ai-book.com'
    },
    {
      title: 'Practical AI Applications',
      subtitle: 'Using AI in Real World',
      description: 'How to apply AI in practical scenarios.',
      image: 'assets/course/4.png',
      url: 'https://link-to-practical-ai-book.com'
    },
    {
      title: 'AI Ethics and Society',
      subtitle: 'Understanding the Implications',
      description: 'Explore ethical considerations in AI.',
      image: 'assets/course/Ai 2 image.jpg',
      url: 'https://link-to-ai-ethics-book.com'
    }
  ];

  webBooks = [
    {
      title: 'Web Development Essentials',
      subtitle: 'Master the Fundamentals',
      description: 'A complete overview of web technologies.',
      image: 'assets/web/web 1.webp',
      url: 'https://link-to-web-book.com'
    },
    {
      title: 'Modern Web Development',
      subtitle: 'The Complete Guide',
      description: 'Stay updated with modern web practices.',
      image: 'assets/web/web 2.jpg',
      url: 'https://link-to-modern-web-book.com'
    },
    {
      title: 'Responsive Web Design',
      subtitle: 'Building Websites for All Devices',
      description: 'Learn the principles of responsive design.',
      image: 'assets/web/web 3.jpg',
      url: 'https://link-to-responsive-web-book.com'
    },
    {
      title: 'JavaScript: The Good Parts',
      subtitle: 'Mastering the Language',
      description: 'An in-depth look at JavaScript.',
      image: 'assets/web/web 4.jpg',
      url: 'https://link-to-javascript-book.com'
    }
  ];

  dataScienceBooks = [
    {
      title: 'Data Science for Everyone',
      subtitle: 'Unlocking the Power of Data',
      description: 'An introduction to Data Science.',
      image: 'path/to/image7.jpg',
      url: 'https://link-to-data-science-book.com'
    },
    {
      title: 'Machine Learning with Python',
      subtitle: 'A Comprehensive Guide',
      description: 'Learn machine learning using Python.',
      image: 'path/to/image8.jpg',
      url: 'https://link-to-machine-learning-book.com'
    },
    {
      title: 'Statistics for Data Science',
      subtitle: 'The Essential Guide',
      description: 'Master statistics for data science.',
      image: 'path/to/image9.jpg',
      url: 'https://link-to-statistics-book.com'
    },
    {
      title: 'Deep Learning with TensorFlow',
      subtitle: 'A Hands-On Approach',
      description: 'Explore deep learning techniques.',
      image: 'path/to/image10.jpg',
      url: 'https://link-to-deep-learning-book.com'
    }
  ];

  cyberBooks = [
    {
      title: 'Cyber Security Basics',
      subtitle: 'Protecting Your Data',
      description: 'A guide to Cyber Security practices.',
      image: 'path/to/image10.jpg',
      url: 'https://link-to-cyber-book.com'
    },
    {
      title: 'Network Security',
      subtitle: 'Safeguarding Your Network',
      description: 'Learn how to secure your network.',
      image: 'path/to/image11.jpg',
      url: 'https://link-to-network-security-book.com'
    },
    {
      title: 'Ethical Hacking',
      subtitle: 'The Complete Handbook',
      description: 'A guide to ethical hacking principles.',
      image: 'path/to/image12.jpg',
      url: 'https://link-to-ethical-hacking-book.com'
    },
    {
      title: 'Incident Response',
      subtitle: 'A Practical Guide',
      description: 'Learn how to respond to cyber incidents.',
      image: 'path/to/image13.jpg',
      url: 'https://link-to-incident-response-book.com'
    }
  ];

  openBook(url: string) {
    window.open(url, '_blank');
  }


  searchBooks() {

  }

  openSidebar() {

  }
}
