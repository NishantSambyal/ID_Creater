import {
  View,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
  Platform,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import LottieView from 'lottie-react-native';
import {profileAnim, fingerAnim} from '../../assets/animations';
import {BaseScreen, Header, TextView, CustomButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import {useRoute} from '@react-navigation/native';
import {captureImage} from '../../imagePicker';

const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [documentPic, setDocumentPic] = useState();

  const hasCameraPermission = useCallback(async () => {
    if (Platform.OS === 'android' && Platform.Version < 23) {
      return true;
    }

    const hasPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (hasPermission) {
      return true;
    }

    const status = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
    );

    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      return true;
    }

    if (status === PermissionsAndroid.RESULTS.DENIED) {
      ToastAndroid.show(
        'Location permission denied by user.',
        ToastAndroid.LONG,
      );
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      ToastAndroid.show(
        'Location permission revoked by user.',
        ToastAndroid.LONG,
      );
    }

    return false;
  }, []);

  const openCamera = () => {
    if (hasCameraPermission()) {
      captureImage({single: true}).then(res => {
        if (res?.assets) {
          const assets = res?.assets;
          setDocumentPic(assets[0]);
        }
      });
    }
  };

  const handleContinue = () => {
    let data = route.params?.data;
    data = {...data, photo: documentPic};
    navigation.navigate('Preview', {data});
  };

  const anim = () => (
    <View style={{alignItems: 'center'}}>
      {documentPic ? (
        <View>
          <ImageBackground
            source={{uri: documentPic.uri}}
            style={[styles.imageStyle]}
            imageStyle={{borderRadius: 8}}
          />
          <TouchableOpacity onPress={openCamera}>
            <TextView style={styles.retakePic}>RETAKE PICTURE</TextView>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={openCamera}>
          <View style={{alignItems: 'center'}}>
            <View style={{width: 300, height: 200, position: 'absolute'}}>
              <LottieView source={profileAnim} autoPlay loop />
            </View>
            <View style={styles.fingerPic}>
              <LottieView source={fingerAnim} autoPlay loop />
            </View>
            <TextView style={styles.imageTitle}>CLICK HERE</TextView>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Student Photo'} />
        <View style={styles.container}>
          {anim()}
          <TextView style={styles.signInTitle}>Student Photo</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your image as mandatory field
          </TextView>
          <View style={styles.buttonWrapper}>
            <CustomButton
              disabled={!documentPic}
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

export default Profile;
