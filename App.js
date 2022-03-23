import {View, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Route from './src/route';
import SplashScreen from 'react-native-splash-screen';
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Route />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
