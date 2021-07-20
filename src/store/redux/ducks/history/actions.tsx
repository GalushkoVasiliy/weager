import types from './types';

export default {
  setHistory(payload) {
    return {
      type: types.SET_NEW_ITEM,
      payload,
    };
  },
};
