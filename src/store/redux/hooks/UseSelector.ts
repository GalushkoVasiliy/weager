import {useSelector as reduxUseSelector} from 'react-redux';
import {UseSelectorFunction} from './Common';
import State from '../entities';

export const useSelector: UseSelectorFunction<State> = reduxUseSelector;
