import {StyleSheet} from 'react-native';
import {COLORS} from '../../config';

export default StyleSheet.create({
  card: {
    backgroundColor: COLORS.cerulean,
    marginRight: 20,
    width: 150,
    height: 110,
    borderRadius: 15,
    padding: 10,
    paddingTop: 5,
  },
  row: {
    marginBottom: 5,
    marginTop: 5,
    justifyContent: 'space-between',
  },
  temp: {
    color: COLORS.white,
    fontSize: 18,
  },
  city: {
    color: COLORS.white,
    fontSize: 14,
  },
  country: {
    color: COLORS.silver,
    fontSize: 14,
  },
  wind: {
    color: COLORS.white,
    fontSize: 14,
  },
  iconWrapper: {width: 30, height: 30},
});
