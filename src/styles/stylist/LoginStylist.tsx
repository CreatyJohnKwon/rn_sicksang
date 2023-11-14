// import { StyleSheet } from 'react-native';
import colors from '../colors';
import styled from '@emotion/native';
import { StyleSheet } from 'react-native';

const Stylist = {
  loginScreen: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray};
  `,
  loginContainer1st: styled.SafeAreaView`
    height: 80%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.white};
  `,
  loginContainer2nd: styled.SafeAreaView`
    height: 20%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
  `,
  buttonsText: styled.Text`
    font-size: 18px;
    font-weight: bold;
    margin: 5px;
    color: ${colors.white};
  `,
  loginButton: styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    background-color: ${colors.black};
    border-radius: 10px;
    padding: 7px;
    margin: 3.5px;
  `,
  kakaoButton: styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    background-color: ${colors.kakao};
    border-radius: 10px;
    padding: 7px;
    margin: 3.5px;
  `,
  naverButton: styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    background-color: ${colors.naver};
    border-radius: 10px;
    padding: 7px;
    margin: 3.5px;
  `,
  newClientButtonText: styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin: 5px;
    color: ${colors.gray};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.gray};
  `,
  newClientButton: styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.transparent};
    padding: 7px;
    margin: 3.5px;
  `,
  refrigeImage: styled.ImageBackground`
    height: 200px;
    width: 200px;
    background-color: ${colors.transparent};
  `,
  refrigeTitle: styled.Text`
    font-size: 15px;
    font-weight: bold;
    margin: 5px;
    color: ${colors.black};
  `,
  refrigeInfo: styled.Text`
    font-size: 35px;
    font-weight: bold;
    top: 3px;
    color: ${colors.black};
  `,
  bottomOverlay: styled.View`
    flex: 1;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.4);
  `,
  bottomBackground: styled.View`
    flex: 1;
  `,
  bottomTouch: styled.TouchableNativeFeedback``,
}
export default Stylist;