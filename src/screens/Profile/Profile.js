import {
  View,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
  Platform,
  Modal,
  Image,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import LottieView from 'lottie-react-native';
import {close} from '../../assets/icons';
import {profileAnim, fingerAnim} from '../../assets/animations';
import {BaseScreen, Header, TextView, CustomButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import {useRoute} from '@react-navigation/native';
import {captureImage, openLibrary} from '../../imagePicker';

const Profile = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [documentPic, setDocumentPic] = useState();
  const [modalVisible, setModalVisible] = useState(false);

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

  console.log(documentPic);

  const openCamera = () => {
    setModalVisible(false);
    if (hasCameraPermission()) {
      captureImage({single: true}).then(res => {
        if (res?.assets) {
          const assets = res?.assets;
          setDocumentPic(assets[0]);
        }
      });
    }
  };

  const openGallery = () => {
    setModalVisible(false);
    openLibrary({single: true}).then(res => {
      if (res?.assets) {
        const assets = res?.assets;
        setDocumentPic(assets[0]);
      }
    });
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
          <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
            <TextView style={styles.retakePic}>RETAKE PICTURE</TextView>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
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

  const chooser = () => (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Image source={close} style={styles.closeIcon} />
        </TouchableOpacity>
        <View style={styles.modalView}>
          <TextView style={styles.modalTitle}>Choose Type</TextView>
          <TouchableOpacity onPress={openCamera}>
            <TextView style={styles.valueText}>Camera</TextView>
          </TouchableOpacity>

          <View style={styles.divider} />
          <TouchableOpacity onPress={openGallery}>
            <TextView style={styles.valueText}>Gallery</TextView>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
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
          <TextView style={styles.dontUseFront}>
            "DO NOT USE FRONT CAMERA"
          </TextView>
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
        {chooser()}
      </BaseScreen>
    </KeyboardAwareScrollView>
  );
};

export default Profile;
