// import { StyleSheet } from 'react-native';
import colors from '../colors';
import styled from '@emotion/native';

const Stylist = {
  loginScreen: styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.gray};
  `,
  loginContainer1st: styled.View`
    height: 82%;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: ${colors.white};
  `,
  loginContainer2nd: styled.View`
    height: 18%;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
  `,
  buttonsText: styled.Text`
    font-size: 16px;
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
    padding: 8px;
    top: 3px;
    bottom: 5px;
  `,
  naverButton: styled.TouchableOpacity`
    width: 90%;
    align-items: center;
    background-color: ${colors.naver};
    border-radius: 10px;
    padding: 8px;
    margin: 3.5px;
    top: 5px;
  `,
  newClientButtonText: styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${colors.black};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.black};
    margin: 5px;
    top: 6px;
  `,
  newClientButton: styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.transparent};
    padding: 8px;
    margin: 3.5px;
  `,
  refrigeImage: styled.ImageBackground`
    top: 16px;
    height: 200px;
    width: 200px;
    background-color: ${colors.transparent};
  `,
  refrigeInfo: styled.Text`
    font-size: 15px;
    margin: 5px;
    top: 21px;
    color: ${colors.black};
  `,
  refrigeTitle: styled.Text`
    font-size: 35px;
    font-weight: bold;
    top: 19px;
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