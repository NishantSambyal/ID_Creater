import {StyleSheet, Platform} from 'react-native';
import {colors} from '../../colors';

export default StyleSheet.create({
  container: {
    margin: 20,
    marginTop: 30,
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
    marginTop: 270,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
  },
  retakePic: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
  },
  signInTitle: {
    marginTop: 40,
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
    marginTop: 80,
  },
  dontUseFront: {
    fontWeight: 'bold',
    textAlign: 'center',
    textDecorationLine: 'underline',
  },

  /* Modal Styles */
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // marginTop: 22,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 2,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 16,
  },
  divider: {
    backgroundColor: '#000',
    height: 1,
    width: 200,
    marginVertical: 10,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
});
