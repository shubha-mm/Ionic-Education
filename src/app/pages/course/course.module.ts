// src/app/pages/course/course.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CoursesPage } from './course.page';
import { CoursesPageRoutingModule } from './course-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesPageRoutingModule
  ],
  declarations: [CoursesPage]
})
export class CoursePageModule {}
