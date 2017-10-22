import {combineReducers} from 'redux';
import { TEST } from './actions';


const INITIAL_STATE = {
  testValues: {},
};

const testReducer = function (state = {}, action) {
  switch (action.type) {
    case TEST:
      console.log(action.id + ' => ' + action.value);
      let newState = {...state};
      newState[action.id] = action.value;
      console.log('newState: ');
      console.log(newState);
      return newState;

    default:
      return state;
  }
}

const reducer = combineReducers({
  testValues: testReducer
});

export default reducer;
