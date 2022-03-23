import {View, Text} from 'react-native';
import React from 'react';

const index = () => {
  // const apiPostWithTokenAndImage = async (inputParam, apiName) => {
  //   //get your token here
  //   let token = await PreferenceManager.getPreference(TOKEN);
  //   let URL = WebAPI.BaseURL + apiName;
  //   console.log('URL:' + URL);
  //   let param = inputParam;
  //   let headers = {
  //     'Content-Type': 'multipart/form-data', // this is a imp line
  //     Authorization: 'Bearer ' + JSON.parse(token),
  //     Accept: 'application/json',
  //   };
  //   let obj = {
  //     method: 'POST',
  //     headers: headers,
  //     body: param,
  //   };
  //   return fetch(URL, obj) // put your API URL here
  //     .then(resp => {
  //       let json = null;
  //       json = resp.json();
  //       console.log(apiName + ' Response', json);
  //       if (resp.ok) {
  //         return json;
  //       }
  //       return json.then(err => {
  //         console.log('error :', err);
  //         throw err;
  //       });
  //     })
  //     .then(json => json);
  // };
  // const updateProfile = () => {
  //   Keyboard.dismiss();
  //   const {userName, lastName, phone_number, email, address, userSourceImg} =
  //     this.state;
  //   NetInfo.fetch().then(async state => {
  //     if (state.isConnected == true) {
  //       const formData = new FormData();
  //       formData.append('first_name', userName);
  //       formData.append('last_name', lastName);
  //       formData.append('phone_number', phone_number);
  //       formData.append('email', email);
  //       formData.append('address', address);
  //       formData.append('image', {
  //         uri: imageURI,
  //         type: 'image/jpeg',
  //         name: 'photo.jpg',
  //       });
  //       let res = await apiPostWithTokenAndImage(formData, WebAPIURL);
  //       this.setState(async function () {
  //         if (res.status == OK) {
  //           Alert.alert('Success');
  //         } else {
  //           Alert.alert('Fail');
  //         }
  //       });
  //     } else {
  //       Alert.alert('Network Issue');
  //     }
  //   });
  // };
  return (
    <View>
      <Text>index</Text>
    </View>
  );
};

export default index;
