import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {parentsAnim} from '../../assets/animations';
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

const MotherName = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, mother_name: name};
    navigation.navigate('Address', {data});
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
        <Header title={"Mother's Name"} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={parentsAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Mother's Name</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Mother's Name as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            placeholder="eg: Sunita Kumari"
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

export default MotherName;
