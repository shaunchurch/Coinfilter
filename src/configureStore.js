import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();
const loggerMiddleware = createLogger();

const middlewares = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middlewares.push(loggerMiddleware);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);

export default () => {
  return store;
};
