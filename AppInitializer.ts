import StateInitializer from './src/store/redux/StateInitializer';
import {saga as rootSaga} from './src/store/redux/combine';
import {reducer as rootReducer} from './src/store/redux/combine';

const initAsync = async () => {
  await StateInitializer.createStore(rootReducer, rootSaga);
};

export default {
  initAsync,
};
