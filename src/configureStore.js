import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import rootReducer from './rootReducer';
const loggerMiddleware = createLogger();

const middlewares = [];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware);
}

export default () => {
  return createStore(rootReducer, applyMiddleware(...middlewares));
};
