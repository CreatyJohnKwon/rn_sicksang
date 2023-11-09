import styles from '../styles/stylist/LoginStylist';
import { kakaoLogin } from "../logins/KakaoLogin";
import { naverLogin } from '../logins/NaverLogin';
import { StatusBar } from "react-native";
import colors from '../styles/colors'
import UserContext from '../contexts/userContent';

function LoginScreen() {

  StatusBar.setBarStyle('dark-content');
  StatusBar.setBackgroundColor(colors.transparent);
  StatusBar.setTranslucent(true);

  return (
    <styles.loginScreen>
      <styles.loginContainer>
        <styles.kakaoButton onPress={kakaoLogin}>
          <styles.kakaoButtonText>카카오 로그인</styles.kakaoButtonText>
        </styles.kakaoButton>
        <styles.naverButton onPress={naverLogin}>
          <styles.naverButtonText>네이버 로그인</styles.naverButtonText>
        </styles.naverButton>
      </styles.loginContainer>
    </styles.loginScreen>
  );
};

export default LoginScreen;