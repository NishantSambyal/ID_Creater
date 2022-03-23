import {StyleSheet} from 'react-native';
import {colors} from '../../colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',

    shadowColor: 'gray',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 4,
    backgroundColor: 'white',
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
  },
  textInput: {
    color: colors.textColor,
    paddingVertical: 16,
    fontSize: 14,
    paddingStart: 22,
    paddingEnd: 12,
  },
  imageContainer: {
    width: 25,
    height: 25,
    marginEnd: 14,
  },
});

export default styles;
