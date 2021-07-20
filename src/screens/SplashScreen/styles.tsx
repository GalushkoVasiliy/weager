import {StyleSheet, Dimensions} from 'react-native';
import {COLORS} from '../../config';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('screen');

export default StyleSheet.create({
  splashWrapper: {
    alignItems: 'center',
    bottom: 0,
    width: WIDTH,
    height: HEIGHT,
    flex: 1,
    justifyContent: 'center',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  title: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  titleText: {color: COLORS.white, fontSize: 30},
  logoWrapper: {width: 80, height: 80, paddingRight: 10},
});
