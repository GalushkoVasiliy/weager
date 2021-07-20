import {StyleSheet, StatusBar} from 'react-native';
import {COLORS} from '../../config';

console.log(StatusBar);

export default StyleSheet.create({
  pageWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchWrapper: {
    marginHorizontal: 15,
    marginTop: 10,
    marginBottom: 25,
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
  listStyle: {
    marginBottom: 10,
    paddingTop: 25,
  },
  listHeader: {
    position: 'absolute',
    top: -20,
    color: COLORS.white,
    fontSize: 15,
    fontWeight: '600',
  },
});
