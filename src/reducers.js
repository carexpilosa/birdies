import {combineReducers} from 'redux';
import { TEST, UPDATE_BIRDIES, UPDATE_ISLOADING } from './actions';


export const INITIAL_STATE = {
  storeBirdies: {
    list: [],
    offset: 0,
    len: 2,
    isLoading: false
  }
};

const birdyReducer = function (state = {}, action) {
  switch (action.type) {
    case UPDATE_ISLOADING:
      let nState = {...state};
      nState.isLoading = action.isLoading;
      console.log(nState);
      return nState;
    case UPDATE_BIRDIES:
      let {list, offset, len, pageSize} = action.data;
      let newList = [...state.list, ...list];
      let newState = {
        list: newList,
        offset: offset,
        len: len,
        pageSize,
        isLoading: false
      };
      return newState;
    default:
      return state;
  }
}

const reducer = combineReducers({
  storeBirdies: birdyReducer
});

export default reducer;
