import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItalyComponent } from './italy.component';

const routes: Routes = [{ path: '', component: ItalyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItalyRoutingModule { }
