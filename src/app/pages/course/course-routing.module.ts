// src/app/pages/course/course-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesPage } from './course.page';

const routes: Routes = [
  {
    path: '',
    component: CoursesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoursesPageRoutingModule {}
