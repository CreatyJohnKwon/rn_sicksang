import styles from '../styles/stylist/ProfileStylist';
import { useCallback, useState } from "react";
import { useFocusEffect } from '@react-navigation/native';
import { kakaoLogout } from "../logins/KakaoLogin";
import { naverLogout } from '../logins/NaverLogin';
import Storage from '../controller/Store';
import Splash from '../controller/Indicators';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../styles/colors'

const NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
const LOGINFO = "loginStyleloginStyleloginStyleloginStyle";
const IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";

const ProfileScreen = ({ navigation }: any) => {
  const [splash, setSplash] = useState<any>(null);
  const [useLogInfo, setLogInfo] = useState<any>(null);
  const [userName, setUserName] = useState<any>(null);
  const [icColor, setIcColor] = useState<any>(null);
  const [imagePaths, setImagePaths] = useState<any>(require('../assets/ic_launcher.png')); // 초기 이미지 설정

  useFocusEffect(
    useCallback(() => {
      setSplash(true);
      // 화면이 포커스될 때 실행될 작업
      console.log('Profile is focused');

      const getLoginfo = Storage.getItem(LOGINFO)?.toString() || 'NULL';
      const getName = Storage.getItem(NICKNAME)?.toString() || 'NULL';
      const getImg = Storage.getItem(IMAGE)?.toString() || 'NULL';

      // 안하면 에러남.....
      if (getLoginfo && getImg != 'NULL') {
        setImagePaths({ uri: getImg });
        setLogInfo(getLoginfo);
        setUserName(getName);
        setSplash(false);

        if (getLoginfo == 'KAKAO') {
          setIcColor(colors.kakao);
        } else if (getLoginfo == 'NAVER') {
          setIcColor(colors.naver);
        } else {
          setIcColor(colors.gray);
        }
      } else {
        setImagePaths(require('../assets/ic_launcher.png'));
        setLogInfo('NULL');
        setUserName('NULL');
        setSplash(false);
      }

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

  const handleButtonPress = () => {
    navigation.navigate('Home');
  }

  return (
    <styles.profile>
      <styles.profileContainerT>
        <styles.profileTitleMText>Bro.</styles.profileTitleMText>
        <styles.profileTitleText>SICKSANG</styles.profileTitleText>
      </styles.profileContainerT>
      <styles.profileContainerUserInfo>
        <styles.profileSection>
          <styles.profileInnerSectionT>
            <styles.userInfoSection>
              <styles.userTouchableImage>
                <styles.userImage source={imagePaths} imageStyle={{ borderRadius: 50 }} />
              </styles.userTouchableImage>
              <styles.userInfoInnerSection>
                <styles.userName>{userName}</styles.userName>
                <styles.userLogInfoSection>
                  <Octicons
                    name={'dot-fill'}
                    color={icColor}
                    size={15} />
                  <styles.userLogInfoText>{useLogInfo}</styles.userLogInfoText>
                </styles.userLogInfoSection>
              </styles.userInfoInnerSection>
            </styles.userInfoSection>
            <styles.logoutButton onPress={useLogInfo == 'KAKAO' ? isKakaoLogout : isNaverLogout}>
              <styles.logoutButtonText>로그아웃</styles.logoutButtonText>
            </styles.logoutButton>
          </styles.profileInnerSectionT>
          <styles.profileInnerSectionB>
            <styles.profileStroke />
            <styles.friendSection>
              <styles.friendButton>
                <styles.friendButtonTextL>팔로워</styles.friendButtonTextL>
                <styles.friendButtonTextR>0</styles.friendButtonTextR>
              </styles.friendButton>
              <styles.friendButton>
                <styles.friendButtonTextL>팔로잉</styles.friendButtonTextL>
                <styles.friendButtonTextR>0</styles.friendButtonTextR>
              </styles.friendButton>
            </styles.friendSection>
          </styles.profileInnerSectionB>
        </styles.profileSection>
      </styles.profileContainerUserInfo>
      <styles.profileContainerElse>
        <styles.profileBigButton onPress={ () => handleButtonPress() }>
          <styles.profileBigButtonText>나만의 냉장고</styles.profileBigButtonText>
        </styles.profileBigButton>
        <styles.profileBigButton>
          <styles.profileBigButtonText>그룹 냉장고</styles.profileBigButtonText>
        </styles.profileBigButton>
      </styles.profileContainerElse>
      {splash && <Splash />}
    </styles.profile>
  )
};

export default ProfileScreen;