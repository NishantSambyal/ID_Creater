import {
  View,
  ImageBackground,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
  Platform,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {
  BaseScreen,
  Header,
  TextView,
  CustomButton,
  CustomDropDown,
  DatePicker,
} from '../../components';
import {validateAlphabets, validateNumbers} from '../../regex';
import {useNavigation} from '@react-navigation/native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useRoute} from '@react-navigation/native';
import {captureImage} from '../../imagePicker';
import {getClasses, registerUser} from '../../network';
import styles from './style';

const Preview = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const [data, setData] = useState(route.params?.data);
  const [classArr, setClassArr] = useState();
  const [showRegistration, setShowRegistration] = useState(false);
  const [showAadhar, setShowAadhar] = useState(false);

  const [nameValidationMessage, setNameValidationMessage] = useState(undefined);
  const [sectionValidationMessage, setSectionValidationMessage] =
    useState(undefined);
  const [fatherValidationMessage, setFatherValidationMessage] =
    useState(undefined);
  const [motherValidationMessage, setMotherValidationMessage] =
    useState(undefined);
  const [contactValidationMessage, setContactValidationMessage] =
    useState(undefined);
  const [aadharValidationMessage, setAadharValidationMessage] =
    useState(undefined);

  const validationCheck = (emailTxt, errorMsg) => {
    if (!validateAlphabets(emailTxt)) {
      return errorMsg;
    }
    return;
  };

  useEffect(() => {
    if (data.registration_number) {
      setShowRegistration(true);
    }
    if (data.adhaar) {
      setShowAadhar(true);
    }
    async function fetchMyAPI() {
      const classData = await getClasses();
      setClassArr(classData);
    }
    fetchMyAPI();
  }, []);

  const handleContinue = () => {
    console.log(data);
    // let formData = new FormData();
    // formData.append('user_id', data.user_id);
    // formData.append('name', data.name);
    // formData.append('school_class_id', data.class.id);
    // formData.append('section', data.section);
    // formData.append('roll_number', data.roll_number);
    // formData.append('blood_group', data.blood_group);

    // formData.append('date_of_birth', data.date_of_birth);
    // formData.append('father_name', data.father_name);
    // formData.append('mother_name', data.mother_name);
    // formData.append('address', data.address);
    // formData.append('contact_information', data.contact_information);
    // formData.append('adhaar', data.adhaar);
    // if (showRegistration) {
    //   formData.append('registration_number', data.registration_number);
    // }

    // formData.append('image', {
    //   uri: data.photo.uri,
    //   type: 'image/jpeg',
    //   name: 'photo.jpg',
    // });
    // const response = registerUser(formData);
    // console.log(response);
    // if (response.error) {
    //   alert('Error ' + response.message);
    // } else {
    //   Alert.alert(
    //     'Thank You',
    //     'Your details has been submitted successfully!',
    //     [
    //       {
    //         text: 'Okay',
    //         onPress: () => navigation.replace('Login'),
    //         style: 'cancel',
    //       },
    //     ],
    //   );
    // }
  };
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
          let updatedData = {
            ...data,
            photo: assets[0],
          };
          setData(updatedData);
        }
      });
    }
  };

  const onStudentNameChange = nameStr => {
    const name = nameStr;
    const someValidationError = validationCheck(
      name,
      'The name field must contain only alphabets',
    );
    if (someValidationError) {
      setNameValidationMessage(someValidationError);
    } else {
      setNameValidationMessage(undefined);
    }
    let updatedData = {
      ...data,
      name,
    };
    setData(updatedData);
  };

  const onClassChange = classTxt => {
    let updatedData = {
      ...data,
      class: classTxt,
    };
    setData(updatedData);
  };

  const onSectionChange = sectionTxt => {
    const section = sectionTxt.trim();
    const someValidationError = validationCheck(
      section,
      'The section field must contain only alphabets',
    );
    if (someValidationError) {
      setSectionValidationMessage(someValidationError);
    } else {
      setSectionValidationMessage(undefined);
    }
    let updatedData = {
      ...data,
      section,
    };
    setData(updatedData);
  };

  const onRollNumberChange = rollNumStr => {
    const roll_number = rollNumStr.trim();
    let updatedData = {
      ...data,
      roll_number,
    };
    setData(updatedData);
  };

  const onBloodChange = blood_group => {
    let updatedData = {
      ...data,
      blood_group,
    };
    setData(updatedData);
  };

  const onFatherNameChange = fatherName => {
    const father_name = fatherName;
    const someValidationError = validationCheck(
      father_name,
      "Father's Name must contain only alphabets",
    );
    if (someValidationError) {
      setFatherValidationMessage(someValidationError);
    } else {
      setFatherValidationMessage(undefined);
    }
    let updatedData = {
      ...data,
      father_name,
    };
    setData(updatedData);
  };

  const onMotherNameChange = motherName => {
    const mother_name = motherName;
    const someValidationError = validationCheck(
      mother_name,
      "Mother's Name must contain only alphabets",
    );
    if (someValidationError) {
      setMotherValidationMessage(someValidationError);
    } else {
      setMotherValidationMessage(undefined);
    }
    let updatedData = {
      ...data,
      mother_name,
    };
    setData(updatedData);
  };

  const onAddressChange = address => {
    let updatedData = {
      ...data,
      address,
    };
    setData(updatedData);
  };

  const onContactChange = contactInfo => {
    const contact_information = contactInfo.trim();
    const someValidationError =
      contact_information.length > 9 && validateNumbers(contact_information)
        ? undefined
        : 'Contact number should be of 10 digits';
    if (someValidationError) {
      setContactValidationMessage(someValidationError);
    } else {
      setContactValidationMessage(undefined);
    }
    let updatedData = {
      ...data,
      contact_information,
    };
    setData(updatedData);
  };

  const onAadharChange = aadhar => {
    const adhaar = aadhar.trim();
    const someValidationError =
      adhaar.length === 0 || (adhaar.length > 11 && validateNumbers(aadhar))
        ? undefined
        : 'Aadhar number should be of 12 digits';
    if (someValidationError) {
      setAadharValidationMessage(someValidationError);
    } else {
      setAadharValidationMessage(undefined);
    }
    let updatedData = {
      ...data,
      adhaar,
    };
    setData(updatedData);
  };

  const onRegistrationChange = registration_number => {
    let updatedData = {
      ...data,
      registration_number,
    };
    setData(updatedData);
  };
  const bloodArr = ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'];
  const val =
    data.name &&
    !nameValidationMessage &&
    data.section &&
    !sectionValidationMessage &&
    data.roll_number &&
    data.father_name &&
    !fatherValidationMessage &&
    data.mother_name &&
    !motherValidationMessage &&
    data.address &&
    data.contact_information &&
    !contactValidationMessage &&
    (!data.aadhar || data.aadhar.length > 11) &&
    !aadharValidationMessage;

  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.KeyboardAvoidingViewContainerStyle}
      style={styles.KeyboardAvoidingView}
      bounces={false}>
      <BaseScreen>
        <Header title={'Preview'} notEnable={true} />
        <View style={styles.container}>
          {data.photo && (
            <View style={{alignItems: 'center', marginTop: 30}}>
              <ImageBackground
                source={{uri: data.photo.uri}}
                style={[styles.imageStyle]}
                imageStyle={{borderRadius: 8}}
              />
              <TouchableOpacity onPress={openCamera}>
                <TextView style={styles.retakePic}>RETAKE PICTURE</TextView>
                <TextView style={styles.dontUseFront}>
                  "DO NOT USE FRONT CAMERA"
                </TextView>
              </TouchableOpacity>
            </View>
          )}
          {/*
          <TextView style={styles.signInTitle}>Final Preview</TextView>
          <TextView style={styles.signInDescription}>
            This is the preview of the information. You can edit final changes
            here and click on submit button to submit your details.
          </TextView> */}

          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Student Name</TextView>
            <TextInput
              style={styles.inputText}
              value={data.name}
              onChangeText={studentName => onStudentNameChange(studentName)}
            />

            <TextView style={styles.errorText}>
              {nameValidationMessage && nameValidationMessage}
            </TextView>
          </View>
          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Class</TextView>
            {classArr && (
              <CustomDropDown
                data={classArr}
                style={styles.inputText}
                selectedValue={data.class}
                placeholder="Select Class"
                onValueChange={value => onClassChange(value)}
                defaultValue={data.class || null}
              />
            )}
          </View>
          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Section</TextView>
            <TextInput
              style={styles.inputText}
              value={data.section}
              onChangeText={section => onSectionChange(section)}
            />
            <TextView style={styles.errorText}>
              {sectionValidationMessage && sectionValidationMessage}
            </TextView>
          </View>
          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Roll Number</TextView>
            <TextInput
              style={styles.inputText}
              value={data.roll_number}
              keyboardType="number-pad"
              placeholder="Roll number"
              onChangeText={value => onRollNumberChange(value)}
            />
          </View>
          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Blood Group</TextView>
            <CustomDropDown
              data={bloodArr}
              style={styles.inputText}
              selectedValue={data.blood_group}
              placeholder="Select Blood Group"
              onValueChange={value => onBloodChange(value)}
              defaultValue={data.blood_group || null}
            />
          </View>

          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Date of Birth</TextView>
            <DatePicker
              setDate={setData}
              placeHolder={
                data?.date_of_birth ? data.date_of_birth : 'Date of birth'
              }
              data={data}
            />
          </View>
          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Father's Name</TextView>
            <TextInput
              style={styles.inputText}
              value={data.father_name}
              onChangeText={value => onFatherNameChange(value)}
            />
            <TextView style={styles.errorText}>
              {fatherValidationMessage && fatherValidationMessage}
            </TextView>
          </View>
          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Mother's Name</TextView>
            <TextInput
              style={styles.inputText}
              value={data.mother_name}
              onChangeText={value => onMotherNameChange(value)}
            />
            <TextView style={styles.errorText}>
              {motherValidationMessage && motherValidationMessage}
            </TextView>
          </View>

          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Address</TextView>
            <TextInput
              style={styles.inputText}
              value={data.address}
              multiline
              onChangeText={value => onAddressChange(value)}
            />
          </View>

          <View style={styles.cardContainer}>
            <TextView style={styles.label}>Contact Information</TextView>
            <TextInput
              style={styles.inputText}
              keyboardType="number-pad"
              value={data.contact_information}
              maxLength={10}
              onChangeText={value => onContactChange(value)}
            />
            <TextView style={styles.errorText}>
              {contactValidationMessage && contactValidationMessage}
            </TextView>
          </View>

          {showAadhar && (
            <View style={styles.cardContainer}>
              <TextView style={styles.label}>Aadhar Number (optional)</TextView>
              <TextInput
                style={styles.inputText}
                keyboardType="number-pad"
                placeholder="Enter Aadhar number"
                maxLength={12}
                value={data.adhaar}
                onChangeText={value => onAadharChange(value)}
              />
              <TextView style={styles.errorText}>
                {aadharValidationMessage && aadharValidationMessage}
              </TextView>
            </View>
          )}

          {showRegistration && (
            <View style={styles.cardContainer}>
              <TextView style={styles.label}>
                Registration Number (optional)
              </TextView>
              <TextInput
                style={styles.inputText}
                keyboardType="number-pad"
                value={data.registration_number}
                onChangeText={value => onRegistrationChange(value)}
              />
            </View>
          )}

          <View style={styles.buttonWrapper}>
            <CustomButton
              // disabled={!val}
              containerStyle={styles.buttonContainer}
              textStyle={styles.signUpText}
              onPress={handleContinue}
              title={'Submit Details'}
            />
          </View>
        </View>
      </BaseScreen>
    </KeyboardAwareScrollView>
  );
};

export default Preview;
