import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer, {INITIAL_STATE} from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducer,
  INITIAL_STATE,
  composeEnhancers(applyMiddleware(thunk))
);
