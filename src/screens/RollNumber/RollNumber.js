import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {rollAnim} from '../../assets/animations';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomTextInput,
} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';

const RollNumber = () => {
  const navigation = useNavigation();
  const [name, setName] = useState();

  const handleContinue = () => {
    navigation.navigate('BloodGroup');
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
        <Header title={'Roll Number'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={rollAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Roll Number</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your roll number as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            keyboardType="number-pad"
            placeholder="Roll number"
            onChangeText={setName}
          />
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!name}
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

export default RollNumber;
