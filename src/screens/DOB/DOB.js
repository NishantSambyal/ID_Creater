import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {dobAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
  DatePicker,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {useRoute} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const Dob = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [date, setDate] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, dob: date};
    navigation.navigate('FatherName', {data});
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
        <Header title={'Date of birth'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={dobAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Date of birth</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your date of birth as mandatory field
          </TextView>
          <DatePicker setDate={setDate} placeHolder={'Date of birth'} />
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!date}
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

export default Dob;
