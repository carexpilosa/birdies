import {combineReducers} from 'redux';
import { TEST } from './actions';


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

    default:
      return state;
  }
}

function asyncFunc() {
  let promise = new Promise(
    function(resolve, reject) {
      function reqListener () {
        console.log("responseText => " + this.responseText);
        //return [...action.data, ...state];
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
