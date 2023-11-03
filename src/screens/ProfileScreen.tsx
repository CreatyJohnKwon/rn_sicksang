import React from "react";
import { View, Text } from 'react-native';
import styles from '../styles/Stylist'

const ProfileScreen = () => {  
  return (
    <View style={styles.profile}>
      <Text style={styles.text}>프로필</Text>
    </View>
  );
};

export default ProfileScreen;