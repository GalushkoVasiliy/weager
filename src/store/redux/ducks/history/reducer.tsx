import types from './types';

const INITIAL_STATE = {
  loading: false,
  history: [],
};

function history(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case types.SET_NEW_ITEM:
      return {
        ...state,
        loading: false,
        history: [...state.history, ...payload],
      };
    default:
      return state;
  }
}

export default history;
