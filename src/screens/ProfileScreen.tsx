import styles from '../styles/stylist/ProfileStylist';
import { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { kakaoLogout } from "../logins/KakaoLogin";
import { naverLogout } from '../logins/NaverLogin';

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
      <styles.profileContainer>
        <styles.kakaoButton onPress={kakaoLogout}>
          <styles.kakaoButtonText>카카오 로그아웃</styles.kakaoButtonText>
        </styles.kakaoButton>
        <styles.naverButton onPress={naverLogout}>
          <styles.naverButtonText>네이버 로그아웃</styles.naverButtonText>
        </styles.naverButton>
      </styles.profileContainer>
    </styles.profile>
  );
};

export default ProfileScreen;