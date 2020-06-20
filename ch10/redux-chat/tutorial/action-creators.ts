  import {
    Action,
    Reducer,
    Store
  } from './lib/miniRedux';
  
  interface AppState {
    messages: string[];
  }
  
  interface AddMessageAction extends Action {
    message: string;
  }
  
  interface DeleteMessageAction extends Action {
    index: number;
  }
  
  class MessageActions {
    static addMessage(message: string): AddMessageAction {
      return {
        type: 'ADD_MESSAGE',
        message: message
      };
    }
    static deleteMessage(index: number): DeleteMessageAction {
      return {
        type: 'DELETE_MESSAGE',
        index: index
      };
    }
  }
  
  let reducer: Reducer<AppState> =
    (state: AppState, action: Action) => {
    switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        messages: state.messages.concat((<AddMessageAction>action).message),
      };
    case 'DELETE_MESSAGE':
      let idx = (<DeleteMessageAction>action).index;
      return {
        messages: [
          ...state.messages.slice(0, idx),
          ...state.messages.slice(idx + 1, state.messages.length)
        ]
      };
    default:
      return state;
    }
  };
  
  let store = new Store<AppState>(reducer, { messages: [] });
  console.log(store.getState());
  
  store.dispatch(
    MessageActions.addMessage('Would you say the fringe was made of silk?'));
  
  store.dispatch(
    MessageActions.addMessage('Wouldnt have no other kind but silk'));
  
  store.dispatch(
    MessageActions.addMessage('Has it really got a team of snow white horses?'));
  
  console.log(store.getState());
  
  store.dispatch( MessageActions.deleteMessage(1) );
  
  console.log(store.getState());
  
  store.dispatch( MessageActions.deleteMessage(0) );
  
  console.log(store.getState()); 