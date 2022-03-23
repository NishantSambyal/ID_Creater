import moment from 'moment';
import React, {useState} from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import styles from './styles';
import {calendar} from '../../assets/icons';
import {TextView} from '..';

const DatePicker = ({setDate, placeHolder}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(placeHolder);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    hideDatePicker();
    const formattedDate = moment(date).format('DD-MM-YYYY');
    setDate(formattedDate);
    setSelectedDate(formattedDate);
  };

  return (
    <TouchableOpacity onPress={showDatePicker}>
      <View style={styles.pickerContainer}>
        <View style={styles.picker}>
          <TextView style={styles.picketText}>{selectedDate}</TextView>
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
            maximumDate={new Date()}
          />
        </View>
        <Image source={calendar} style={styles.imageContainer} />
      </View>
    </TouchableOpacity>
  );
};

export default DatePicker;
