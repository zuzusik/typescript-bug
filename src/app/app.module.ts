import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BuggyComponent} from './components/buggy-component';
import {BuggyComponentWorkaround} from './components/buggy-component-workaround';


@NgModule({
  declarations: [
    AppComponent,
    BuggyComponent,
    BuggyComponentWorkaround
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
