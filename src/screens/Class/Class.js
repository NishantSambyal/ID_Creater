import {View} from 'react-native';
import React, {useState, useEffect} from 'react';
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
import {getClasses} from '../../network';
import {useRoute} from '@react-navigation/native';

const Class = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [clas, setClas] = useState();
  const [classArr, setClassArr] = useState([]);

  useEffect(() => {
    async function fetchMyAPI() {
      const data = await getClasses();
      setClassArr(data);
    }
    fetchMyAPI();
  }, []);

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, class: clas};
    navigation.navigate('Section', {data});
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
            data={classArr && classArr}
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
