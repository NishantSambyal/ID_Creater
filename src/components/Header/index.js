import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {TextView} from '..';
import styles from './style';
import {colors} from '../../colors';
import {back} from '../../assets/icons';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, notEnable}) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.mainContainer}>
      {notEnable ? (
        <View style={styles.empty} />
      ) : (
        <TouchableOpacity onPress={handleBackPress}>
          <View style={styles.backArrowWrapper}>
            <Image source={back} style={styles.backArrow} />
          </View>
        </TouchableOpacity>
      )}

      <TextView style={styles.headerText}>{title}</TextView>
    </View>
  );
};

export default Header;
