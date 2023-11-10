import React from 'react';
import styles from '../styles/stylist/LoginStylist';
import { kakaoLogin } from "../logins/KakaoLogin";
import { naverLogin } from '../logins/NaverLogin';

const LoginScreen = ({ navigation }: any) => {

  async function isKakaoLogin() {
    try {
      const loginResult: boolean = await kakaoLogin();

      if (loginResult) {
        console.log("Kakao login successful!");
        navigation.navigate('Main');
      } else {
        console.log("Kakao login failed!");
      }
    } catch (error) {
      console.error("An error occurred during Kakao login:", error);
    }
  }

  async function isNaverLogin() {
    try {
      const loginResult: boolean = await naverLogin();

      if (loginResult) {
        console.log("Naver login successful!");
        navigation.navigate('Main');
      } else {
        console.log("Naver login failed!");
      }
    } catch (error) {
      console.error("An error occurred during Naver login:", error);
    }
  }

  return (
    <styles.loginScreen>
      <styles.loginContainer>
        <styles.kakaoButton onPress={isKakaoLogin}>
          <styles.kakaoButtonText>카카오 로그인</styles.kakaoButtonText>
        </styles.kakaoButton>
        <styles.naverButton onPress={isNaverLogin}>
          <styles.naverButtonText>네이버 로그인</styles.naverButtonText>
        </styles.naverButton>
      </styles.loginContainer>
    </styles.loginScreen>
  );
};

export default LoginScreen;
