import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NationalityRoutingModule } from './nationality-routing.module';
import { NationalityComponent } from './nationality.component';


@NgModule({
  declarations: [
    NationalityComponent
  ],
  imports: [
    CommonModule,
    NationalityRoutingModule
  ]
})
export class NationalityModule {

 }
