import {View, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import LottieView from 'lottie-react-native';
import {profileAnim, fingerAnim} from '../../assets/animations';
import {BaseScreen, Header, TextView, CustomButton} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './style';
import {captureImage} from '../../imagePicker';

const Profile = () => {
  const navigation = useNavigation();
  const [documentPic, setDocumentPic] = useState();

  const openCamera = () => {
    captureImage({single: true}).then(res => {
      if (res?.assets) {
        const assets = res?.assets;
        setDocumentPic(assets[0]);
      }
    });
  };

  const handleContinue = () => {
    alert('Thank You')
  };

  const anim = () => (
    <View style={{alignItems: 'center'}}>
      {documentPic ? (
        <ImageBackground
          source={{uri: documentPic.uri}}
          style={[styles.imageStyle]}
          imageStyle={{borderRadius: 8}}
        />
      ) : (
        <TouchableOpacity onPress={openCamera}>
          <View style={{alignItems: 'center'}}>
            <View style={{width: 300, height: 300, position: 'absolute'}}>
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
        <Header title={'Profile Pic'} />
        <View style={styles.container}>
          {anim()}
          <TextView style={styles.signInTitle}>Profile Image</TextView>
          <TextView style={styles.signInDescription}>
            This Application require your Profile image as mandatory field
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
