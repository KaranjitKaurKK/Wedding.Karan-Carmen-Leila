import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItalyRoutingModule } from './italy-routing.module';
import { ItalyComponent } from './italy.component';


@NgModule({
  declarations: [
    ItalyComponent
  ],
  imports: [
    CommonModule,
    ItalyRoutingModule
  ]
})
export class ItalyModule { }
