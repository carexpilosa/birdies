import {combineReducers} from 'redux';
import { TEST, UPDATE_BIRDIES } from './actions';


export const INITIAL_STATE = {
  storeBirdies: {
    list: [],
    offset: 0,
    len: 2
  }
};

const testReducer = function (state = {}, action) {
  switch (action.type) {
    case TEST:
      asyncFunc().then(result => {console.log(result)},
        error => {console.log(error)});
      return [...action.data, ...state];
    case UPDATE_BIRDIES:
      let {list, offset, len, pageSize} = action.data;
      let newList = [...state.list, ...list];
      console.log('pageSize => '+pageSize);
      return {
        list: newList,
        offset: offset,
        len: len,
        pageSize
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  storeBirdies: testReducer
});

export default reducer;
