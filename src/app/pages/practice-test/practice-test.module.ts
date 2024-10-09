import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PracticeTestPageRoutingModule } from './practice-test-routing.module';

import { PracticeTestPage } from './practice-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PracticeTestPageRoutingModule
  ],
  declarations: [PracticeTestPage]
})
export class PracticeTestPageModule {}
