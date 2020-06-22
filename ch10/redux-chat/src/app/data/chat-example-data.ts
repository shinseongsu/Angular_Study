import * as Redux from 'redux';
import {
  AppState,
  getAllMessages
} from '../app.reducer';
import { uuid } from '../util/uuid';
import * as moment from 'moment';
import { Thread } from '../thread/thread.model';
import * as ThreadActions from '../thread/thread.actions';
import { User } from '../user/user.model';
import * as UserActions from '../user/user.actions';

const me: User = {
  id: uuid(),
  isClient: true,
  name: 'Juliet',
  avatarSrc: 'assets/images/avatars/female-avatar-1.png'
};

const ladycap: User = {
  id: uuid(),
  name: 'Lady Capulet',
  avatarSrc: 'assets/images/avatars/female-avatar-2.png'
};

const echo: User = {
  id: uuid(),
  name: 'Echo Bot',
  avatarSrc: 'assets/images/avatars/male-avatar-1.png'
};

const rev: User = {
  id: uuid(),
  name: 'Reverse Bot',
  avatarSrc: 'assets/images/avatars/female-avatar-4.png'
};

const wait: User = {
  id: uuid(),
  name: 'Waiting Bot',
  avatarSrc: 'assets/images/avatars/male-avatar-2.png'
};

const tLadycap: Thread = {
  id: 'tLadycap',
  name: ladycap.name,
  avatarSrc: ladycap.avatarSrc,
  messages: []
};

const tEcho: Thread = {
  id: 'tEcho',
  name: echo.name,
  avatarSrc: echo.avatarSrc,
  messages: []
};

const tRev: Thread = {
  id: 'tRev',
  name: rev.name,
  avatarSrc: rev.avatarSrc,
  messages: []
};

const tWait: Thread = {
  id: 'tWait',
  name: wait.name,
  avatarSrc: wait.avatarSrc,
  messages: []
};

export function ChatExampleData(store: Redux.Store<AppState>) {

  store.dispatch(UserActions.setCurrentUser(me));

  store.dispatch(ThreadActions.addThread(tLadycap));
  store.dispatch(ThreadActions.addMessage(tLadycap, {
    author: me,
    sentAt: moment().subtract(45, 'minutes').toDate(),
    text: 'Yet let me weep for such a feeling loss.'
  }));
  store.dispatch(ThreadActions.addMessage(tLadycap, {
    author: ladycap,
    sentAt: moment().subtract(20, 'minutes').toDate(),
    text: 'So shall you feel the loss, but not the friend which you weep for.'
  }));

  store.dispatch(ThreadActions.addThread(tEcho));
  store.dispatch(ThreadActions.addMessage(tEcho, {
    author: echo,
    sentAt: moment().subtract(1, 'minutes').toDate(),
    text: 'I\'ll echo whatever you send me'
  }));

  store.dispatch(ThreadActions.addThread(tRev));
  store.dispatch(ThreadActions.addMessage(tRev, {
    author: rev,
    sentAt: moment().subtract(3, 'minutes').toDate(),
    text: 'I\'ll reverse whatever you send me'
  }));

  store.dispatch(ThreadActions.addThread(tWait));
  store.dispatch(ThreadActions.addMessage(tWait, {
    author: wait,
    sentAt: moment().subtract(4, 'minutes').toDate(),
    text: `I\'ll wait however many seconds you send to me before responding.` +
      ` Try sending '3'`
  }));

  store.dispatch(ThreadActions.selectThread(tLadycap));

  const handledMessages = {};

  store.subscribe( () => {
    getAllMessages(store.getState())
      .filter(message => message.author.id === me.id)
      .map(message => {

        if (handledMessages.hasOwnProperty(message.id)) {
          return;
        }
        handledMessages[message.id] = true;

        switch (message.thread.id) {
          case tEcho.id:
            store.dispatch(ThreadActions.addMessage(tEcho, {
              author: echo,
              text: message.text
            }));

            break;
          case tRev.id:
            store.dispatch(ThreadActions.addMessage(tRev, {
              author: rev,
              text: message.text.split('').reverse().join('')
            }));

            break;
          case tWait.id:
            let waitTime: number = parseInt(message.text, 10);
            let reply: string;

            if (isNaN(waitTime)) {
              waitTime = 0;
              reply = `I didn\'t understand ${message}. Try sending me a number`;
            } else {
              reply = `I waited ${waitTime} seconds to send you this.`;
            }

            setTimeout(
              () => {
                store.dispatch(ThreadActions.addMessage(tWait, {
                  author: wait,
                  text: reply
                }));
              },
              waitTime * 1000);

            break;
          default:
            break;
        }
      });
  });
}