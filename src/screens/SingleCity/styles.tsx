import {StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../../config';

console.log(StatusBar);

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    height: 80,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  headerTitle: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    alignSelf: 'center',
  },
  imageWrapper: {
    width: 180,
    height: 180,
  },
  temp: {
    fontSize: 22,
    color: COLORS.white,
    marginTop: 20,
  },
});
