import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { StylingModule } from './styling/styling.module';

import { InlineStyleComponent } from './styling/inline-style/inline-style.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
