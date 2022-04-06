import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './style';

const CustomButton = props => {
  const {disabled, containerStyle, onPress, textStyle, title, ...rprops} =
    props;
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.3}
        style={[
          disabled ? styles.disabledButton : styles.buttonContainer,
          containerStyle,
        ]}
        disabled={disabled}
        onPress={onPress}
        {...rprops}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomButton;
