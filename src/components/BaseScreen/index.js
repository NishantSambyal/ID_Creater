import {StatusBar} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../colors';

const BaseScreen = ({children}) => {
  return (
    <SafeAreaView>
      <StatusBar
        barStyle="light-content"
        backgroundColor={colors.primaryDark}
      />
      {children}
    </SafeAreaView>
  );
};

export default BaseScreen;
