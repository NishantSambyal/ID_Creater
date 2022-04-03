import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {registrationAnim} from '../../assets/animations';
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

const Registration = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [registration, setRegistration] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, registration_number: registration};
    navigation.navigate('Profile', {data});
  };

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Registration'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={registrationAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>
            Registration Number (optional)
          </TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Registration number as optional.
          </TextView>
          <CustomTextInput
            value={registration}
            keyboardType="number-pad"
            placeholder="Type your registration number"
            onChangeText={setRegistration}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
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

export default Registration;
