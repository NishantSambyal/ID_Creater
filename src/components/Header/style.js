import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  mainContainer: {
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    color: colors.textWhite,
    fontSize: 22,
    fontWeight: '600',
    padding: 16,
  },
  backArrow: {
    width: 22,
    height: 20,
  },
  backArrowWrapper: {
    marginStart: 10,
    paddingHorizontal: 4,
  },
  empty: {
    width: 40,
  },
});
