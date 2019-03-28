import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule, MatInputModule} from '@angular/material';
import { RoledenComponentModule } from 'projects/roleden-component/src/lib/roleden-component.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';

import { FormModule } from './form/form.module';
import { ComponentsModule } from './components/components.module';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormModule,
    ComponentsModule,
    MatDialogModule,
    MatInputModule,
    RoledenComponentModule.forRoot()
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
