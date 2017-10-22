import {combineReducers} from 'redux';
import TEST from './actions';


const INITIAL_STATE = {
  testValues: {},
};

const testReducer = function (state = INITIAL_STATE, action) {
  console.log(action);
  switch (action) {
    case 'TEST':
      state.testValues[action.id] = {value: action.testValues};
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
