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
  imageStyle: {
    width: 300,
    height: 300,
  },

  retakePic: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: colors.primary,
  },
  cardContainer: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 4,
    marginVertical: 4,
    backgroundColor: 'white',
    borderRadius: 6,
    padding: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: '700',
  },
  inputText: {
    borderWidth: 0.5,
    borderColor: '#9E9D9D80',
    borderRadius: 6,
    marginVertical: 10,
    padding: 10,
    paddingHorizontal: 20,
  },
  errorText: {
    fontSize: 13,
    color: 'red',
    marginStart: 10,
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
  },
});
