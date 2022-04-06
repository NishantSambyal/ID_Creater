import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {aadharAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
} from '../../components';
import {validateNumbers} from '../../regex';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const Aadhar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [aadhar, setAadhar] = useState();
  const [validationMessage, setValidationMessage] = useState(undefined);

  const onAadharNumberChange = nameText => {
    const nameStr = nameText.trim();
    const someValidationError =
      nameStr.length === 0 || (nameStr.length > 11 && validateNumbers(aadhar))
        ? undefined
        : 'Aadhar number should be of 12 digits';
    if (someValidationError) {
      setValidationMessage(someValidationError);
    } else {
      setValidationMessage(undefined);
    }
    setAadhar(nameStr);
  };
  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, adhaar: aadhar};
    navigation.navigate('Profile', {data});
  };
  const handleSkip = () => {
    let data = route.params?.data;
    navigation.navigate('Profile', {data});
  };
  const val = (!aadhar || aadhar.length > 11) && !validationMessage;

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Aadhar'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={aadharAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>
            Aadhar Number (Optional)
          </TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Aadhar number as optional.
          </TextView>
          <CustomTextInput
            value={aadhar}
            placeholder="Enter Aadhar number"
            keyboardType="number-pad"
            onChangeText={onAadharNumberChange}
            maxLength={12}
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
            <CustomButton
              containerStyle={styles.skipContainer}
              textStyle={styles.skipText}
              onPress={handleSkip}
              title={'Skip >>'}
            />
          </View>
        </View>
      </BaseScreen>
    </KeyboardAwareScrollView>
  );
};

export default Aadhar;
