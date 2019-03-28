import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import { FormComponent } from './form/form.component';
import { ComponentsComponent } from './components/components.component';
import { InfoComponent } from './info/info.component';

const routes: Routes = [
  {path: '', redirectTo: '/components', pathMatch: 'full'},
  {path: 'components', component: ComponentsComponent, data: {animation: 'components'}},
  {path: 'form', component: FormComponent, data: {animation: 'form'}},
  {path: 'info', component: InfoComponent, data: {animation: 'info'}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
