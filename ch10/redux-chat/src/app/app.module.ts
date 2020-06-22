import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {
  AppState,
  default as reducer
} from './app.reducer';

import { AppComponent } from './app.component';
import { ChatPageComponent } from './chat-page/chat-page.component';
import { ChatNavBarComponent } from './chat-nav-bar/chat-nav-bar.component';
import { ChatThreadsComponent } from './chat-threads/chat-threads.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { ChatMessageComponent } from './chat-message/chat-message.component';
import { FromNowPipe } from './pipes/from-now.pipe';

import {
  AppStore,
  appStoreProviders
} from './app.store';
import { ChatThreadComponent } from './chat-thread/chat-thread.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatPageComponent,
    ChatNavBarComponent,
    ChatThreadsComponent,
    ChatWindowComponent,
    ChatMessageComponent,
    FromNowPipe,
    ChatThreadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appStoreProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
