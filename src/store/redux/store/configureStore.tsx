import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {middlewares, sagaMiddleware} from './middlewares';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['history'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
