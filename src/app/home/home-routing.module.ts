import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login',
    loadChildren: () => import('../pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('../pages/logout/logout.module').then( m => m.LogoutPageModule)
  },

  {
    path: 'signup',
    loadChildren: () => import('../signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'course',
    loadChildren: () => import('../pages/course/course.module').then( m => m.CoursePageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('../pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'books',
    loadChildren: () => import('../pages/books/books.module').then( m => m.BooksPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('../pages/practice-test/practice-test.module').then( m => m.PracticeTestPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('../sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
