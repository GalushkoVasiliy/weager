import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

export const sagaMiddleware = createSagaMiddleware();

let middlewares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlewares = [...middlewares, logger];
}

export {middlewares};
