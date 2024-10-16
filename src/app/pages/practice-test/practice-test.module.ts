import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';  // This is important

import { PracticeTestPageRoutingModule } from './practice-test-routing.module';
import { PracticeTestPage } from './practice-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,  // Ensure this is imported
    PracticeTestPageRoutingModule
  ],
  declarations: [PracticeTestPage]
})
export class PracticeTestPageModule {}
