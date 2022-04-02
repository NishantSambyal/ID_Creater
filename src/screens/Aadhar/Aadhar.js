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
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const Aadhar = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [aadhar, setAadhar] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, adhaar: aadhar};
    navigation.navigate('Registration', {data});
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
        <Header title={'Aadhar'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={aadharAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Aadhar Number</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Aadhar number as mandatory field
          </TextView>
          <CustomTextInput
            value={aadhar}
            placeholder="eg: 1234 5678 9012"
            keyboardType="number-pad"
            onChangeText={txt => setAadhar(txt.trim())}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!aadhar}
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

export default Aadhar;
