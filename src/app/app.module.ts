import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import {MatDialogModule, MatInputModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import {ListModule} from './list/list.module';
import { TextEditorComponent } from './text-editor/text-editor.component';
import {ExplanationModule} from './explanation/explanation.module';
import { DiceComponent } from './dice/dice.component';
import {RoledenComponentModule} from 'roleden-component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    TextEditorComponent,
    DiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ListModule,
    ExplanationModule,
    MatDialogModule,
    MatInputModule,
    RoledenComponentModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
