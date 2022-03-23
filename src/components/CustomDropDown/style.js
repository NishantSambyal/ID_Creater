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
    paddingVertical: 4,
    alignItems: 'center',
    marginVertical: 8,
  },
  picker: {
    flex: 1,
    color: colors.textColor,
    fontSize: 5,
    backgroundColor: 'white',
    alignContent: 'flex-start',
  },
  picketText: {
    textAlign: 'left',
    color: colors.textColor,
    fontSize: 14,
    paddingHorizontal: 8,
  },
  dropDownStyle: {
    alignContent: 'flex-start',
    justifyContent: 'flex-start',
  },
  downIcon: {
    alignContent: 'flex-end',
  },
  arrowIcon: {
    alignSelf: 'flex-end',
    marginEnd: 26,
  },

  dropdown1RowStyle: {
    backgroundColor: 'white',
    borderBottomColor: '#C5C5C5',
    fontSize: 14,
    marginHorizontal: 6,
  },
  dropdown1RowTxtStyle: {color: colors.textColor, textAlign: 'left'},
  imageContainer: {
    width: 25,
    height: 25,
    marginEnd: 14,
  },
});

export default styles;
