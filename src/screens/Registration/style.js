import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  KeyboardAvoidingViewContainerStyle: {
    justifyContent: 'space-between',
  },
  KeyboardAvoidingView: {
    paddingTop: Platform.OS === 'android' ? 0 : 30,
  },

  signInTitle: {
    fontSize: 32,
    fontWeight: '700',
  },
  signInDescription: {
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 40,
  },

  skipContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderColor: colors.primary,
    borderWidth: 1,
  },
  skipText: {
    fontWeight: '700',
    fontStyle: 'normal',
    color: colors.primary,
  },
});
