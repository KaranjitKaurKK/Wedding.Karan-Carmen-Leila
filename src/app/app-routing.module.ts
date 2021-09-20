import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) }, 
  { path: 'nationality', loadChildren: () => import('./features/nationality/nationality.module').then(m => m.NationalityModule)},
  { path: 'italy', loadChildren: () => import('./features/nationality/italy/italy.module').then(m => m.ItalyModule) },
  { path: 'india', loadChildren: () => import('./features/nationality/india/india.module').then(m => m.IndiaModule) },
  { path: 'contact-us', loadChildren: () => import('./features/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'thank-you-page', loadChildren: () => import('./features/contact-us/thank-you-page/thank-you-page.module').then(m => m.ThankYouPageModule) },
  { path: '**', redirectTo: 'home'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
