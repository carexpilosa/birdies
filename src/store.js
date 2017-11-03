import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
console.log(thunk);
import reducer, {INITIAL_STATE} from './reducers';

export const store = createStore(
  reducer,
  INITIAL_STATE,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
