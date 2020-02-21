import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AddModelPageRoutingModule } from './add-model-routing.module';
import { AddModelPage } from './add-model.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    AddModelPageRoutingModule
  ],
  declarations: [AddModelPage]
})
export class AddModelPageModule { }
