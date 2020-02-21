import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddModelPage } from './add-model.page';

const routes: Routes = [
  {
    path: '',
    component: AddModelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddModelPageRoutingModule {}
