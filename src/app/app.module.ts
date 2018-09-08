import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ListModule} from './list/list.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatDialogModule, MatInputModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RoledenComponentModule} from 'roleden-component';
import {HighlightModule} from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListModule,
    MatDialogModule,
    MatInputModule,
    RoledenComponentModule,
    HighlightModule.forRoot({ theme: 'default' })
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
