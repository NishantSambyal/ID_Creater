import React, {useState} from 'react';
import {TextInput, View, Image, TouchableWithoutFeedback} from 'react-native';
import {colors} from '../../colors';
import {eyeOpen, eyeClosed} from '../../assets/icons';
import styles from './style';

const CustomTextInput = props => {
  const {value, onChangeText, placeholder, style, secure, ...rprops} = props;
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.placeHolderColor}
          style={[styles.textInput, style]}
          secureTextEntry={secure && passwordVisible}
          {...rprops}
        />
      </View>
      {secure && (
        <TouchableWithoutFeedback
          onPress={() => {
            setPasswordVisible(!passwordVisible);
          }}>
          <View style={styles.imageContainer}>
            <Image
              source={!passwordVisible ? eyeOpen : eyeClosed}
              style={styles.imageContainer}
            />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

export default CustomTextInput;
