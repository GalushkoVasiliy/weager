import {Action, handleActions} from 'redux-actions';
import types from './types';

export default handleActions<any, any>({
    [types.SET_NEW_ITEM_TO_HISTORY]: (
      state = null,
      {payload}: Action<{city: string}>,
    ) => {
      const data = state.cities;
      if (data && data.length > 0 && payload.city) {
        const indexItem = data.findIndex(
          (item: string) => item === payload.city,
        );
        if (indexItem > -1) {
          console.log('find');
        } else {
          data.push(payload.city);
        }
        return {
          ...state,
          cities: [...data],
        };
      } else if (payload.city) {
        return {
          ...state,
          cities: [payload.city],
        };
      } else {
        return {
          ...state,
          cities: [],
        };
      }
    },
  },
  {cities: []},
);
