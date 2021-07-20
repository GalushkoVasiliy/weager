import types from './types';

export default {
  initializeSuccess(payload) {
    return {
      type: types.INIT_SUCCESS,
      payload,
    };
  },
};
