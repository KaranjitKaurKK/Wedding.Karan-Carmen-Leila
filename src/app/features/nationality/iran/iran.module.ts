import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IranRoutingModule } from './iran-routing.module';
import { IranComponent } from './iran.component';


@NgModule({
  declarations: [
    IranComponent
  ],
  imports: [
    CommonModule,
    IranRoutingModule
  ]
})
export class IranModule { }
