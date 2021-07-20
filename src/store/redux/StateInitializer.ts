import {
  applyMiddleware,
  compose,
  createStore as reduxCreateStore,
  Middleware,
  Reducer,
  Store,
} from 'redux';
import createSagaMiddleware, {Saga} from 'redux-saga';
import State from './entities';
import {persistReducer, persistStore} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

export const CitiesStore: {store: Store<State> | null} = {
  store: {},
};

const createStore = <T extends State>(reducer: Reducer<T>, saga: Saga) => {
  if (CitiesStore.store) {
    throw Error('Already initialized');
  }
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middlewares: Middleware[] = [];

  const sagaMiddleware = createSagaMiddleware();

  middlewares.push(sagaMiddleware);
  const persistConfig = {
    key: 'root',
    whitelist: ['cities'],
    storage: AsyncStorage,
  };

  const persistedReducer = persistReducer(persistConfig, reducer);

  const store = reduxCreateStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
  sagaMiddleware.run(saga);
  CitiesStore.store = store;

  const persistor = persistStore(store);

  return {store, persistor};
};

export default {
  createStore,
};
