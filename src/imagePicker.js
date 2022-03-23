import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

export const pickerOptions = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
  mediaType: 'photo',
  noData: true,
  selectionLimit: 10,
  maxWidth: 500,
  maxHeight: 500,
  quality: 0.5,
  rotation: 360,
};
export const captureImage = (single = false) => {
  if (single) {
    pickerOptions.selectionLimit = 1;
  }
  return new Promise(resolve => {
    setTimeout(() => {
      launchCamera(pickerOptions, response => {
        if (response.didCancel) {
          // console.log(response);
        } else if (response.error) {
          alert(response.error);
        }
        if (response?.assets) {
          resolve(response);
        }
      });
    }, 200);
  });
};

export const openLibrary = (single = false) => {
  if (single) {
    pickerOptions.selectionLimit = 1;
  }
  return new Promise(resolve =>
    launchImageLibrary(pickerOptions, response => {
      if (response.didCancel) {
        // console.log(response);
      } else if (response.error) {
        alert(response.error);
      }
      if (response?.assets) {
        resolve(response);
      }
    }),
  );
};
