import React, { useState } from 'react';
import styles from '../styles/stylist/LoginStylist';
import BottomSheet from './BottomSheet';

const LoginScreen = (props: any) => {
  const [modalVisible, setModalVisible] = useState(false);
  const pressButton = () => {
    setModalVisible(true);
  }

  return (
    <styles.loginScreen>
      <styles.loginContainer1st>
        <styles.refrigeImage source={require('../assets/ic_launcher.png')} />
        <styles.refrigeInfo>우리들의 안전한 냉장고</styles.refrigeInfo>
        <styles.refrigeTitle>식상해</styles.refrigeTitle>
      </styles.loginContainer1st>
      <styles.loginContainer2nd>
        <styles.loginButton onPress={pressButton}>
          <styles.buttonsText>로그인</styles.buttonsText>
        </styles.loginButton>
      </styles.loginContainer2nd>
      <BottomSheet navigation={props.navigation} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </styles.loginScreen>
  );
};

export default LoginScreen;