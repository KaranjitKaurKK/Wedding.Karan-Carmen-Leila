import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndiaRoutingModule } from './india-routing.module';
import { IndiaComponent } from './india.component';


@NgModule({
  declarations: [
    IndiaComponent
  ],
  imports: [
    CommonModule,
    IndiaRoutingModule
  ]
})
export class IndiaModule { }
