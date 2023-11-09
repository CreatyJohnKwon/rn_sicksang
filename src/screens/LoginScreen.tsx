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
    <UserContext.Consumer>
      {({ setUser }) => { //TODO: 일단 이거 보고 계속 진행!! https://velog.io/@fejigu/React-Native-props-drilling-%EB%A7%89%EB%8A%94-%EB%B0%A9%EB%B2%95-Context
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
        )
      }}
    </UserContext.Consumer>
  );
};

export default LoginScreen;