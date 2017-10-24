import {combineReducers} from 'redux';
import { TEST } from './actions';


export const INITIAL_STATE = {
  storeBirdies: [
    {id: 1, name: 'xxx', desc: 'derda'}
  ]
};

const testReducer = function (state = {}, action) {
  switch (action.type) {
    case TEST:
      return [...action.data, ...state];

    default:
      return state;
  }
}

const reducer = combineReducers({
  storeBirdies: testReducer
});

export default reducer;
