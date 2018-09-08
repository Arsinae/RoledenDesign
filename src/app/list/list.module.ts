import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import {ExplanationModule} from '../explanation/explanation.module';
import {RoledenComponentModule} from '../../../projects/roleden-component/src/lib/roleden-component.module';

@NgModule({
  imports: [
    CommonModule,
    ExplanationModule,
    RoledenComponentModule
  ],
  declarations: [ListComponent],
  exports: [ListComponent]
})
export class ListModule { }
