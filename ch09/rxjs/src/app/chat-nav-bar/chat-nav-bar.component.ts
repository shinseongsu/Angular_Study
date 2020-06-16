import { 
  Component, 
  OnInit,
  Inject } from '@angular/core';
import * as _ from 'loadsh';

import { combineLatest } from 'rxjs/operators';

import { ThreadsService } from './../thread/threads.service';
import { MessagesService } from './../message/messages.service';

import { Thread } from './../thread/thread.model';
import { Message } from './../message/message.model';

@Component({
  selector: 'chat-nav-bar',
  templateUrl: './chat-nav-bar.component.html',
  styleUrls: ['./chat-nav-bar.component.css']
})
export class ChatNavBarComponent implements OnInit {

  unreadMessagesCount: number;

  constructor(public messagesService: MessagesService,
              public threadsService: ThreadsService) {
  }


  ngOnInit(): void {
    this.messagesService.messages
      .pipe(combineLatest(
        this.threadsService.currentThread,
        (messages: Message[], currentThread: Thread) =>
          [currentThread, messages] ))
      .subscribe(([currentThread, messages]: [Thread, Message[]]) => {
        this.unreadMessagesCount =
          _.reduce(
            messages,
            (sum: number, m: Message) => {
              const messageIsInCurrentThread: boolean = m.thread &&
                currentThread &&
                (currentThread.id === m.thread.id);
              if (m && !m.isRead && !messageIsInCurrentThread) {
                sum = sum + 1;
              }
              return sum;
            },
            0);
      });
  }

}
