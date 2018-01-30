import { RECEIVE_BENCHES } from '../actions/bench_actions';
import merge from 'lodash/merge';

const benchesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_BENCHES:
      return merge({}, action.benches);
    default: 
      return oldState;
  }
};

export default benchesReducer;