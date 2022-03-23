import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {bloodGroupAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomDropDown,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const BloodGroup = () => {
  const navigation = useNavigation();
  const [bloodType, setBloodType] = useState();

  const handleContinue = () => {
    navigation.navigate('Dob');
  };

  const bloodArr = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Roll Number'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={bloodGroupAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Select Blood Group</TextView>
          <TextView style={styles.signInDescription}>
            Please select your your blood group.
          </TextView>
          <CustomDropDown
            data={bloodArr}
            style={styles.picker}
            selectedValue={bloodType}
            placeholder="Select Blood Group"
            onValueChange={value => setBloodType(value)}
            defaultValue={bloodType || null}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!bloodType}
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

export default BloodGroup;
