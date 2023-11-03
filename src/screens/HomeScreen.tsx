import React from "react";
import { View, Text } from 'react-native';
import styles from '../styles/Stylist'

const HomeScreen = () => {  
  return (
    <View style={styles.home}>
      <Text style={styles.text}>홈</Text>
    </View>
  );
};

export default HomeScreen;