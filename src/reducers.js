import {combineReducers} from 'redux';
import { TEST, UPDATE_BIRDIES, UPDATE_ISLOADING } from './actions';


export const INITIAL_STATE = {
  storeBirdies: {
    list: [],
    offset: 0,
    len: 2
  }
};

const birdyReducer = function (state = {}, action) {
  switch (action.type) {
    case UPDATE_BIRDIES:
      let {list, offset, len, pageSize} = action.data;
      let newList = [...state.list, ...list];
      let newState = {
        list: newList,
        offset: offset,
        len: len,
        pageSize,
      };
      console.log(newState);
      return newState;
    default:
      return state;
  }
}

const isLoadingReducer = function(state, action) {
  switch (action.type) {
    case UPDATE_ISLOADING:
      return action.isLoading;
    default:
      return state;
  }
}

const reducer = combineReducers({
  storeBirdies: birdyReducer
});

export default reducer;
