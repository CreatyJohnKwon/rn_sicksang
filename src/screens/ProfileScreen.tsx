import styles from '../styles/stylist/ProfileStylist';
import { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { kakaoLogout } from "../logins/KakaoLogin";
import { naverLogout } from '../logins/NaverLogin';

const ProfileScreen = ({ navigation }: any) => {

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

  async function isKakaoLogout() {
    try {
      const loginResult: boolean = await kakaoLogout();

      if (loginResult) {
        console.log("Kakao logout successful!");
        // 로그아웃하면서 이전 화면 스택 모두 초기화
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        console.log("Kakao logout failed!");
      }
    } catch (error) {
      console.error("An error occurred during Kakao login:", error);
    }
  }

  async function isNaverLogout() {
    try {
      const loginResult: boolean = await naverLogout();

      if (loginResult) {
        console.log("Naver logout successful!");
        // 로그아웃하면서 이전 화면 스택 모두 초기화
        navigation.reset({
          index: 0,
          routes: [{ name: 'Login' }],
        });
      } else {
        console.log("Naver logout failed!");
      }
    } catch (error) {
      console.error("An error occurred during Naver login:", error);
    }
  }

  return (
    <styles.profile>
      <styles.profileContainer>
        <styles.kakaoButton onPress={isKakaoLogout}>
          <styles.kakaoButtonText>카카오 로그아웃</styles.kakaoButtonText>
        </styles.kakaoButton>
        <styles.naverButton onPress={isNaverLogout}>
          <styles.naverButtonText>네이버 로그아웃</styles.naverButtonText>
        </styles.naverButton>
      </styles.profileContainer>
    </styles.profile>
  )
};

export default ProfileScreen;