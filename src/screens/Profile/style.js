import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  container: {
    margin: 20,
  },
  KeyboardAvoidingViewContainerStyle: {
    justifyContent: 'space-between',
  },
  KeyboardAvoidingView: {
    paddingTop: Platform.OS === 'android' ? 0 : 30,
  },
  imageStyle: {
    width: 300,
    height: 300,
  },
  imageTitle: {
    fontSize: 20,
    marginTop: 300,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
  },
  signInTitle: {
    marginTop: 80,
    fontSize: 32,
    fontWeight: '700',
  },
  signInDescription: {
    fontSize: 14,
  },
  buttonWrapper: {
    marginTop: 40,
  },
  fingerPic: {
    width: 180,
    height: 180,
    position: 'absolute',
    marginTop: 120,
  },
});
