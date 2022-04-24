const BASE_URL = 'https://impressads.in/api';
export const callApi = (url, method, formData) => {
  const api = BASE_URL + url;
  return fetch(api, {
    method: method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
    body: formData,
  });
};

export const getClasses = async () => {
  try {
    const response = await callApi('/classes', 'GET');
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export const loginUser = async body => {
  try {
    const response = await callApi('/school/login', 'POST', body);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('errorInCatch', error);
  }
};

export const registerUser = async body => {
  try {
    const response = await callApi('/student', 'POST', body);
    const json = await response.json();
    console.log('RegisterUserResponse', json);
    return json;
  } catch (error) {
    console.error('errorInCatch', error);
  }
};

// user_id:1
// school_class_id:1
// name:Manzar Hussain
// section:A
// roll_number:1
// blood_group:
// date_of_birth:02/01/1991
// father_name:Mumtaz Ahmad
// mother_name:Zule
// address:Azad nagar
// contact_information:9560327756
// adhaar:
// registration_number:
