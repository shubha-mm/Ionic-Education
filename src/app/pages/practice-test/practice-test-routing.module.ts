import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PracticeTestPage } from './practice-test.page';

const routes: Routes = [
  {
    path: '',
    component: PracticeTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PracticeTestPageRoutingModule {}
