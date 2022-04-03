import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {contact} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import {validateNumbers} from '../../regex';

const Contact = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [validationMessage, setValidationMessage] = useState(undefined);

  const onNumberChange = nameText => {
    const nameStr = nameText;
    const someValidationError =
      nameStr.length > 9 && validateNumbers
        ? undefined
        : 'Contact number should be of 10 digits';
    if (someValidationError) {
      setValidationMessage(someValidationError);
    } else {
      setValidationMessage(undefined);
    }
    setName(nameStr);
  };

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, contact_information: name};
    navigation.navigate('Aadhar', {data});
  };
  const val = name && !validationMessage;

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Contact number'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={contact} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Contact Information</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your 10 digits Contact number as mandatory
            field
          </TextView>
          <CustomTextInput
            keyboardType="number-pad"
            value={name}
            maxLength={10}
            placeholder="eg: 9123456789"
            onChangeText={onNumberChange}
          />
          <TextView style={styles.errorText}>
            {validationMessage && validationMessage}
          </TextView>
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!val}
              containerStyle={styles.buttonContainer}
              textStyle={styles.signUpText}
              onPress={handleContinue}
              title={'Continue'}
            />
          </View>
        </View>
      </BaseScreen>
    </KeyboardAwareScrollView>
  );
};

export default Contact;
