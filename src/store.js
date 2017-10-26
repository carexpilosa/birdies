import { createStore } from 'redux';
import reducer, {INITIAL_STATE} from './reducers';

export const store = createStore(
  reducer,
  INITIAL_STATE,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
