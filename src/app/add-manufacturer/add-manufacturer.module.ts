import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddManufacturerPageRoutingModule } from './add-manufacturer-routing.module';

import { AddManufacturerPage } from './add-manufacturer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddManufacturerPageRoutingModule
  ],
  declarations: [AddManufacturerPage]
})
export class AddManufacturerPageModule {}
