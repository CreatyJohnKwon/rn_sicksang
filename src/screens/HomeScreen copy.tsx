import React from "react";
import { StyleSheet, View, Text } from 'react-native';
import colors from '../styles/colors'

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 600,
    color: colors.black,
  }
});

const HomeScreen = () => {  
  return (
    <View style={styles.home}>
      <Text>홈 화면</Text>  
    </View>
  );
};

export default HomeScreen;