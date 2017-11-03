import {combineReducers} from 'redux';
import { TEST, UPDATE_BIRDIES } from './actions';
import { items, itemsHasErrored, itemsIsLoading } from './reducers/items';


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
  storeBirdies: birdyReducer,
  items,
  itemsHasErrored,
  itemsIsLoading
});

export default reducer;
