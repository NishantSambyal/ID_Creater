import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

const styles = StyleSheet.create({
  pickerContainer: {
    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    flexDirection: 'row',
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 16,
    alignItems: 'center',
    marginVertical: 10,
  },
  picker: {
    flex: 1,
    color: colors.textColor,
    fontSize: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignContent: 'flex-start',
  },
  picketText: {
    textAlign: 'left',
    color: colors.textColor,
    fontSize: 14,
    paddingHorizontal: 20,
  },
  downIcon: {
    alignContent: 'flex-end',
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    marginEnd: 26,
  },
  imageContainer: {
    width: 25,
    height: 25,
    marginEnd: 14,
  },
});

export default styles;
