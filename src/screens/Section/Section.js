import {View} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {sectionAnim} from '../../assets/animations';
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
import {useRoute} from '@react-navigation/native';

const StudentName = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [name, setName] = useState();

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, section: name};
    navigation.navigate('Roll', {data});
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
        <Header title={'Section'} />
        <View style={styles.container}>
          <View style={{width: 300, height: 300, alignSelf: 'center'}}>
            <LottieView source={sectionAnim} autoPlay loop />
          </View>
          <TextView style={styles.signInTitle}>Select Section</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your section of class as mandatory field
          </TextView>
          <CustomTextInput
            value={name}
            placeholder="eg: Rahul Kumar"
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

export default StudentName;
