import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddManufacturerPage } from './add-manufacturer.page';

const routes: Routes = [
  {
    path: '',
    component: AddManufacturerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddManufacturerPageRoutingModule {}
