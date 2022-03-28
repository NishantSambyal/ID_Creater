import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  image: {
    width: 300,
    height: 220,
    alignSelf: 'center',
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    marginStart: 10,
  },
  signInTitle: {
    fontSize: 32,
    fontWeight: '700',
  },
  signInDescription: {
    fontSize: 14,
  },
  inputWrapper: {
    marginTop: 30,
  },
  KeyboardAvoidingViewContainerStyle: {
    // flexGrow: 1,
    justifyContent: 'space-between',
  },
  KeyboardAvoidingView: {
    // flex: 1,
    // paddingTop: Platform.OS === 'android' ? 0 : 30,
  },
  buttonContainer: {marginHorizontal: 20},
  buttonWrapper: {
    marginTop: 40,
  },
});
