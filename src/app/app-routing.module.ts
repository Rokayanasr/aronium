import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesComponent } from './components/packages/packages.component';
import { WhyComponent } from './components/why/why.component';

const routes: Routes = [
  {path: '' , pathMatch: 'full'},
  {path: 'package' , component : WhyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
