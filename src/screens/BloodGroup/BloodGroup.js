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
import {useRoute} from '@react-navigation/native';
import styles from './style';

const BloodGroup = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [bloodType, setBloodType] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, blood_group: bloodType};
    navigation.navigate('Dob', {data});
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
        <Header title={'Blood Group'} />
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
