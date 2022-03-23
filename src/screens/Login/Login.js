import {View, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {
  BaseScreen,
  CustomTextInput,
  Header,
  TextView,
  CustomButton,
} from '../../components';
import {logo} from '../../assets/icons';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {validateEmail} from '../../regex';
import {useNavigation} from '@react-navigation/native';
import styles from './style';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [validationMessage, setValidationMessage] = useState(undefined);

  const handleContinue = () => {
    navigation.replace('StudentName');
  };

  const validationCheck = () => {
    if (!validateEmail(email)) {
      return 'Please enter a valid email address';
    }
    return;
  };

  const onEmailChange = emailTxt => {
    const someValidationError = validationCheck();
    if (someValidationError) {
      setValidationMessage(someValidationError);
    } else {
      setValidationMessage(undefined);
    }
    setEmail(emailTxt);
  };
  const val = email && password && !validationMessage;
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'ID Creater'} notEnable={true} />
        <React.Fragment>
          <View style={styles.image}>
            <Image source={logo} style={styles.image} resizeMode="center" />
          </View>
          <View style={styles.container}>
            <TextView style={styles.signInTitle}>Sign In</TextView>
            <TextView style={styles.signInDescription}>
              Enter your email address and password to access your account
            </TextView>

            <View style={styles.inputWrapper}>
              <CustomTextInput
                value={email}
                placeholder="Email"
                onChangeText={txt => onEmailChange(txt)}
              />
              <TextView style={styles.errorText}>
                {validationMessage && validationMessage}
              </TextView>

              <CustomTextInput
                value={password}
                placeholder="Password"
                onChangeText={setPassword}
                secure
              />
              <View style={styles.buttonWrapper}>
                <CustomButton
                  disabled={!val}
                  containerStyle={styles.buttonContainer}
                  textStyle={styles.signUpText}
                  onPress={handleContinue}
                  title={'Sign In'}
                />
              </View>
            </View>
          </View>
        </React.Fragment>
      </BaseScreen>
    </KeyboardAwareScrollView>
  );
};

export default Login;