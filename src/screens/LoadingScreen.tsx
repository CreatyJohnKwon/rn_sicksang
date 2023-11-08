import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

const LoadingScreen = ({ isVisible }: { isVisible: boolean }) => {
  if (!isVisible) {
    return null; // 컴포넌트를 렌더링하지 않음
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/spinner.gif')} style={styles.loadingImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  loadingImage: {
    width: 50, // 조절하세요
    height: 50, // 조절하세요
  },
});

export default LoadingScreen;
