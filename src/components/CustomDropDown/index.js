import React from 'react';
import {View, Image} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {downArrow} from '../../assets/icons';

import styles from './style';

const CustomDropDown = props => {
  const {data, onValueChange, placeholder, ...rprops} = props;
  const isArrOfObj = data.some(item => typeof item.name === 'string');
  return (
    <View style={styles.pickerContainer}>
      <SelectDropdown
        data={data}
        buttonStyle={styles.picker}
        dropdownIconPosition="left"
        buttonTextStyle={styles.picketText}
        defaultButtonText={placeholder}
        buttonTextAfterSelection={(selectedItem, index) => {
          if (isArrOfObj) {
            return selectedItem.name;
          }
          return selectedItem;
        }}
        rowTextForSelection={(item, index) => {
          if (isArrOfObj) {
            return item.name;
          }
          return item;
        }}
        onSelect={selectedItem => {
          onValueChange(selectedItem);
        }}
        // buttonTextAfterSelection={(selectedItem, index) => {
        //   // text represented after item is selected
        //   // if data array is an array of objects then return selectedItem.property to render after item is selected
        //   return selectedItem;
        // }}
        // rowTextForSelection={(item, index) => {
        //   // text represented for each item in dropdown
        //   // if data array is an array of objects then return item.property to represent item in dropdown
        //   return item;
        // }}
        rowStyle={styles.dropdown1RowStyle}
        rowTextStyle={styles.dropdown1RowTxtStyle}
        {...rprops}
      />
      <View style={styles.downIcon}>
        <Image source={downArrow} style={styles.imageContainer} />
      </View>
    </View>
  );
};

export default CustomDropDown;
