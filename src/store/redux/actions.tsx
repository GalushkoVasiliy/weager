import {createAction} from 'redux-actions';
import types from './types';

export default {
  setItemToHistory: createAction<{city: string}>(types.SET_NEW_ITEM_TO_HISTORY),
};
