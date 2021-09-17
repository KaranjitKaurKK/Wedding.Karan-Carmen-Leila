import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndiaComponent } from './india.component';

const routes: Routes = [{ path: '', component: IndiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndiaRoutingModule { }
