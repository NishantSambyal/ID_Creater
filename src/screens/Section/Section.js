import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {sectionAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
} from '../../components';
import {validateAlphabets} from '../../regex';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import {useRoute} from '@react-navigation/native';

const StudentName = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState();

  const [validationMessage, setValidationMessage] = useState(undefined);

  const validationCheck = emailTxt => {
    if (!validateAlphabets(emailTxt)) {
      return 'The section field must contain only alphabets';
    }
    return;
  };

  const onSectionChange = nameText => {
    const nameStr = nameText.trim();
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
    data = {...data, section: name};
    navigation.navigate('Roll', {data});
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
        <Header title={'Section'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={sectionAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Select Section</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your section of class as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            placeholder="Enter Section name"
            onChangeText={onSectionChange}
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
