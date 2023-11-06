import React, { useState } from "react";
import styles from '../styles/Stylist'
import { KakaoOAuthToken, login, logout, KakaoProfile, getProfile } from '@react-native-seoul/kakao-login'
import { useFocusEffect } from '@react-navigation/native'
import storage from '../controller/Store'

const ProfileScreen = () => {
  const [result, setResult] = useState('');
  const [profileText, setProfileText] = useState('UserName');
  const NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
  const IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";

  useFocusEffect(
    React.useCallback(() => {
      // 화면이 포커스될 때 실행될 작업
      console.log('Profile is focused');

      return () => {
        // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
        console.log('Profile is unfocused');
      };
    }, [])
  );

  const signInWithKakao = async (): Promise<void> => {
    const token: KakaoOAuthToken = await login();

    if (token != null) {
      getKakaoProfile();
    }

    setResult(JSON.stringify(token.accessToken));
  };

  const signOutWithKakao = async (): Promise<void> => {
    const message = await logout();

    setProfileText('NULL'); // 프로필 결과를 상태로 설정
    storage.setItem(NICKNAME, 'NULL');
    storage.setItem(IMAGE, 'NULL');

    setResult(message);
  };

  const getKakaoProfile = async (): Promise<void> => {
    try {
      const profile: KakaoProfile = await getProfile();
      const nickname = profile.nickname;
      const image = profile.profileImageUrl;
      setProfileText(nickname); // 프로필 결과를 상태로 설정
      storage.setItem(NICKNAME, nickname.toString());
      storage.setItem(IMAGE, image.toString());
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
      <styles.kakaoResult>{result}</styles.kakaoResult>
    </styles.profile>
  );
};

export default ProfileScreen;