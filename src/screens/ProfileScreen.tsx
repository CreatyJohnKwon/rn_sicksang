import React, { useState } from "react";
import styles from '../styles/Stylist'
import { KakaoOAuthToken, login, logout, KakaoProfile, getProfile } from '@react-native-seoul/kakao-login'

const ProfileScreen = () => {
  const [result, setResult] = useState('');
  const [profileText, setProfileText] = useState('User Email');

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    if (token != null) {
      getKakaoProfile();
    }

    setResult(JSON.stringify(token.accessToken));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setResult(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    try {
      const profile: KakaoProfile = await getProfile();
      const nickname = profile.nickname;
      setProfileText(nickname); // 프로필 결과를 상태로 설정
    } catch (error) {
      console.error('KAKAO ERROR:', error);
    }
  };

  return (
    <styles.profile>
      <styles.text>{profileText}</styles.text>
      <styles.kakaoButton onPress={signInWithKakao}>
        <styles.kakaoButtonText>카카오 로그인</styles.kakaoButtonText>
      </ styles.kakaoButton>
      <styles.kakaoButton onPress={signOutWithKakao}>
        <styles.kakaoButtonText>카카오 로그아웃</styles.kakaoButtonText>
      </ styles.kakaoButton>
      <styles.kakaoResult>결과: {result}</styles.kakaoResult>
    </styles.profile>
  );
};

export default ProfileScreen;