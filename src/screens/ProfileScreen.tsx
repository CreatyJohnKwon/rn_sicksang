import styles from '../styles/stylist/ProfileStylist';
import { useCallback, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { kakaoLogout } from "../logins/KakaoLogin";
import { naverLogout } from '../logins/NaverLogin';
import Storage from '../controller/Store';

const LOGINFO: string = "loginStyleloginStyleloginStyleloginStyle";

const ProfileScreen = ({ navigation }: any) => {
  const [useLogInfo, setLogInfo] = useState<any>(null);

  useFocusEffect(
    useCallback(() => {
      // 화면이 포커스될 때 실행될 작업
      console.log('Profile is focused');

      setLogInfo(Storage.getItem(LOGINFO)?.toString());

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
      <styles.profileContainer1st>
        <styles.profileTitleMText>Bro.</styles.profileTitleMText>
        <styles.profileTitleText>SICKSANG</styles.profileTitleText>
      </styles.profileContainer1st>
      <styles.profileContainer2nd>
        <styles.profileSection>
          <styles.profileInnerSection1st>
            <styles.logoutButton onPress={useLogInfo == 'KAKAO' ? isKakaoLogout : isNaverLogout}>
              <styles.logoutButtonText>로그아웃</styles.logoutButtonText>
            </styles.logoutButton>
          </styles.profileInnerSection1st>
          <styles.profileInnerSection2nd>
            <styles.profileStroke />
          </styles.profileInnerSection2nd>
        </styles.profileSection>
      </styles.profileContainer2nd>
    </styles.profile>
  )
};

export default ProfileScreen;