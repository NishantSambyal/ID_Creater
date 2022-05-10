import {View, Image} from 'react-native';
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
import {loginUser} from '../../network';
import Loader from '../../components/Loader';
import {
  setAsyncStorage,
  getAsyncStorage,
  LOGIN_USER_ID,
} from '../../asyncStorage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('arshimemorial@gmail.com');
  const [password, setPassword] = useState('Manzar@123');
  const [loading, setLoading] = useState(false);
  const [validationMessage, setValidationMessage] = useState(undefined);

  const handleContinue = async () => {
    setLoading(true);
    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    const response = await loginUser(formData);
    setAsyncStorage(LOGIN_USER_ID, JSON.stringify(response.user_info.id));

    if (response.status) {
      setLoading(false);
      const user_id = await getAsyncStorage(LOGIN_USER_ID);
      const data = {user_id};
      navigation.replace('StudentName', {data});
    } else {
      setLoading(false);
      alert('Invalid username or password');
    }
  };

  const validationCheck = emailTxt => {
    if (!validateEmail(emailTxt)) {
      return 'Please enter a valid email address';
    }
    return;
  };

  const onEmailChange = emailTxt => {
    const emailStr = emailTxt.trim();
    const someValidationError = validationCheck(emailStr);
    if (someValidationError) {
      setValidationMessage(someValidationError);
    } else {
      setValidationMessage(undefined);
    }
    setEmail(emailStr);
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
          {loading && <Loader />}
        </React.Fragment>
      </BaseScreen>
    </KeyboardAwareScrollView>
  );
};

export default Login;
