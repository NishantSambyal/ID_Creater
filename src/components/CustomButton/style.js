import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  disabledButton: {
    alignItems: 'center',
    backgroundColor: colors.placeHolderColor,
    padding: 16,
    borderRadius: 10,
    marginVertical: 10,
  },
  buttonText: {
    fontStyle: 'normal',
    fontWeight: '700',
    color: 'white',
    fontSize: 16,
  },
});
