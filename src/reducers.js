import {combineReducers} from 'redux';
import { TEST, UPDATE_BIRDIES } from './actions';


export const INITIAL_STATE = {
  storeBirdies: [
    //{id: 1, name: 'xxx', desc: 'derda isses, der da, ich weiß es genau'}
  ]
};

const testReducer = function (state = {}, action) {
  switch (action.type) {
    case TEST:
      asyncFunc().then(result => {console.log(result)},
        error => {console.log(error)});
      return [...action.data, ...state];
    case UPDATE_BIRDIES:
      return [...state, ...action.birdies]
    default:
      return state;
  }
}

const reducer = combineReducers({
  storeBirdies: testReducer
});

export default reducer;
