import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const CustomTextView = ({style, children}) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomTextView;
