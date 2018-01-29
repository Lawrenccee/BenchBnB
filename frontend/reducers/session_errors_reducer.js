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
      let newState = oldState.slice();

      action.err.forEach(error => {
        if (error.responseJSON) {        
          error.responseJSON.forEach((response) => {
            if (newState.indexOf(response) < 0) {
              newState.push(response);
            } 
          });
        } else {
          if (newState.indexOf(error.responseText) < 0) {
            newState.push(error.responseText);
          }
        } 
      });

      return newState;
    default:
      return oldState;
  }
};
