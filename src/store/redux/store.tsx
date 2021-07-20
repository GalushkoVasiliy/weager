import {Store} from 'redux';
import {CitiesStore} from './StateInitializer';

export const getStore = () => {
  const storeInstance = CitiesStore.store;

  if (!storeInstance) {
    throw new Error(
      'You should call createStore from StateInitializer firstly',
    );
  }

  const store: Store = storeInstance;

  return store;
};

export const getDispatch = () => {
  const store = getStore();
  return store.dispatch;
};
