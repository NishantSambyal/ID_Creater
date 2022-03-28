import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {classroomAnim} from '../../assets/animations';
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
import {useRoute} from '@react-navigation/native';

const Class = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [clas, setClas] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, class: clas};
    navigation.navigate('Section', {data});
  };
  const classArr = [
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th',
    '9th',
    '10th',
    '11th',
    '12th',
  ];

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Class'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={classroomAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Class Standard</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your class standard as mandatory field
          </TextView>
          <CustomDropDown
            data={classArr}
            style={styles.picker}
            selectedValue={clas}
            placeholder="Select Class"
            onValueChange={value => setClas(value)}
            defaultValue={clas || null}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!clas}
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

export default Class;
