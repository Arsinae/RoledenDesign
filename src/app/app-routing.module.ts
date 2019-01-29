import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { FormComponent } from './form/form.component';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {path: '', redirectTo: '/components', pathMatch: 'full'},
  {path: 'components', component: ComponentsComponent, data: {animation: 'components'}},
  {path: 'form', component: FormComponent, data: {animation: 'form'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
