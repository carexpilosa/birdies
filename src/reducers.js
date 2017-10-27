import {combineReducers} from 'redux';
import { TEST, UPDATE_BIRDIES } from './actions';


export const INITIAL_STATE = {
  storeBirdies: [
    {id: 1, name: 'xxx', desc: 'derda isses, der da, ich weiß es genau'}
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

function asyncFunc() {
  let promise = new Promise(
    function(resolve, reject) {
      function reqListener () {
        if (1) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject('####');
        }
      }
      var oReq = new XMLHttpRequest();
      oReq.addEventListener("load", reqListener);
      oReq.open("GET", 'http://localhost:8000/birdies/0/1');
      oReq.send();
    }
  );
  return promise;
}


const reducer = combineReducers({
  storeBirdies: testReducer
});

export default reducer;
