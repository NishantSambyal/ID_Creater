import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {addressAnim} from '../../assets/animations';
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

const Address = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, address: name};
    navigation.navigate('Contact', {data});
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
        <Header title={'Address'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={addressAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Address</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Address as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            placeholder="eg: House number 123"
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

export default Address;
