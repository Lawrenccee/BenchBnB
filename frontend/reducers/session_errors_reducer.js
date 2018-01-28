import { 
  RECEIVE_SESSION_ERRORS, 
  RECEIVE_CURRENT_USER 
} from '../actions/session_actions';

export const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return [];
    case RECEIVE_SESSION_ERRORS:
      return oldState.concat(action.err);
    default:
      return oldState;
  }
};
