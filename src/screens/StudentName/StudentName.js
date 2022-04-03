import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {studentAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
} from '../../components';
import {validateAlphabets} from '../../regex';
import {useRoute} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const StudentName = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const [name, setName] = useState();
  const [validationMessage, setValidationMessage] = useState(undefined);

  const validationCheck = emailTxt => {
    if (!validateAlphabets(emailTxt)) {
      return 'The name field must contain only alphabets';
    }
    return;
  };

  const onNameChange = nameText => {
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
    data = {...data, name};
    navigation.navigate('Class', {data});
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
        <Header title={'Student Name'} notEnable={true} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={studentAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Student Name</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your full name as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            placeholder="eg: Rahul Kumar"
            onChangeText={onNameChange}
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

export default StudentName;
