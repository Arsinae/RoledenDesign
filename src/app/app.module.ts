import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ListModule} from './list/list.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatDialogModule, MatInputModule} from '@angular/material';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RollingDiceComponent } from './rolling-dice/rolling-dice.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    RollingDiceComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ListModule,
    MatDialogModule,
    MatInputModule
  ],
  entryComponents: [LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }