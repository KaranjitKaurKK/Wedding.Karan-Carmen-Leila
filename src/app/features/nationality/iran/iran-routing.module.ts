import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IranComponent } from './iran.component';

const routes: Routes = [{ path: '', component: IranComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IranRoutingModule { }
