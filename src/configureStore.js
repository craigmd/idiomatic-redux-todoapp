import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import todos from './reducers'


const configureStore = () => {
  let middlewares = [thunk];

  if(process.env.NODE_ENV !== 'production') {
    middlewares.push(createLogger());
  }

  return createStore(
    todos,
    applyMiddleware(...middlewares)
  );
};


export default configureStore
