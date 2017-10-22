import {combineReducers} from 'redux';
import { TEST } from './actions';


const INITIAL_STATE = {
  testValues: {},
};

const testReducer = function (state = INITIAL_STATE, action) {
  console.log(action.type === TEST);
  switch (action.type) {
    case TEST:
      console.log('in TEST');
      state[action.id] = {value: action.testValue};
      console.log(state);
      return {...state};

    default:
      return state;
  }
}

const reducer = combineReducers({
  testValues: testReducer
});

export default reducer;
