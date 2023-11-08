import styles from '../styles/stylist/Stylist';
import { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { kakaoLogin, kakaoLogout } from "../logins/KakaoLogin";
import { naverLogin, naverLogout } from '../logins/NaverLogin';

const ProfileScreen = () => {

  useFocusEffect(
    useCallback(() => {
      // 화면이 포커스될 때 실행될 작업
      console.log('Profile is focused');

      return () => {
        // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
        console.log('Profile is unfocused');
      };
    }, [])
  );

  return (
    <styles.profile>
      <styles.container>
        <styles.kakaoButton onPress={kakaoLogin}>
          <styles.kakaoButtonText>카카오 로그인</styles.kakaoButtonText>
        </styles.kakaoButton>
        <styles.kakaoButton onPress={kakaoLogout}>
          <styles.kakaoButtonText>카카오 로그아웃</styles.kakaoButtonText>
        </styles.kakaoButton>
        <styles.naverButton onPress={naverLogin}>
          <styles.naverButtonText>네이버 로그인</styles.naverButtonText>
        </styles.naverButton>
        <styles.naverButton onPress={naverLogout}>
          <styles.naverButtonText>네이버 로그아웃</styles.naverButtonText>
        </styles.naverButton>
      </styles.container>
    </styles.profile>
  );
};

export default ProfileScreen;