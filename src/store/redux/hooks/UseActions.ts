import {useDispatch} from 'react-redux';

import historyActions from '../actions';

export function useActions() {
  const dispatch = useDispatch();
  return {
    setItemToHistory: (city: string) => {
      dispatch(historyActions.setItemToHistory(city));
    },
  };
}
