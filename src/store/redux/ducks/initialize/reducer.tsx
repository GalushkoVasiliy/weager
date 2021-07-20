import types from './types';

const INITIAL_STATE = {
  isInitialized: false,
};

function initialize(state = INITIAL_STATE, {type}) {
  switch (type) {
    case types.INIT_SUCCESS:
      return {
        ...state,
        isInitialized: true,
      };
    default:
      return state;
  }
}

export default initialize;
