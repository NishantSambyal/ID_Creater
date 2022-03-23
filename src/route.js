import * as React from 'react';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from './screens';

function Route() {
  const Stack = createNativeStackNavigator();

  const isLoggedIn = true;

  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white',
    },
  };

  function AuthStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={screens.Login} />
      </Stack.Navigator>
    );
  }

  function HomeStack() {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={screens.Login} />
        <Stack.Screen name="StudentName" component={screens.StudentName} />
        <Stack.Screen name="Class" component={screens.Class} />
        <Stack.Screen name="Section" component={screens.Section} />
        <Stack.Screen name="Roll" component={screens.RollNumber} />
        <Stack.Screen name="BloodGroup" component={screens.BloodGroup} />
        <Stack.Screen name="Dob" component={screens.Dob} />
        <Stack.Screen name="FatherName" component={screens.FatherName} />
        <Stack.Screen name="MotherName" component={screens.MotherName} />
        <Stack.Screen name="Address" component={screens.Address} />
        <Stack.Screen name="Contact" component={screens.Contact} />
        <Stack.Screen name="Profile" component={screens.Profile} />
        <Stack.Screen name="Preview" component={screens.Preview} />
      </Stack.Navigator>
    );
  }
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!isLoggedIn ? (
          <Stack.Group>
            <Stack.Screen name="Auth" component={AuthStack} />
          </Stack.Group>
        ) : (
          <Stack.Group>
            <Stack.Screen name="Home" component={HomeStack} />
          </Stack.Group>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Route;
