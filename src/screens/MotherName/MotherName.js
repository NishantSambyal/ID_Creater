import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {parentsAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {validateAlphabets} from '../../regex';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const MotherName = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState();
  const [validationMessage, setValidationMessage] = useState(undefined);

  const validationCheck = emailTxt => {
    if (!validateAlphabets(emailTxt)) {
      return "Mother's Name must contain only alphabets";
    }
    return;
  };

  const onMotherNameChange = nameText => {
    const nameStr = nameText;
    const someValidationError = validationCheck(nameStr);
    if (someValidationError) {
      setValidationMessage(someValidationError);
    } else {
      setValidationMessage(undefined);
    }
    setName(nameStr);
  };
  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, mother_name: name};
    navigation.navigate('Address', {data});
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
        <Header title={"Mother's Name"} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={parentsAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Mother's Name</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Mother's Name as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            placeholder="eg: Sunita Kumari"
            onChangeText={onMotherNameChange}
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

export default MotherName;
