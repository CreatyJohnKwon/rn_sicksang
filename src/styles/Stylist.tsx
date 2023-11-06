// import { StyleSheet } from 'react-native';
import colors from './colors'
import styled from '@emotion/native'

const Stylist = {
  image: styled.Image``,
  home: styled.View`
    height: 100%;
    width: 100%;
    align-items: stretch;
    background-color: ${colors.lightgray};
  `,
  homeTitle: styled.View`
    height: 80px;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    margin-start: 20px;
    margin-end: 20px;
    background-color: ${colors.transparent};
  `,
  homeUserName: styled.Text`
    font-size: 17.5px;
    font-weight: bold;
    flex: 1;
    color: ${colors.black};
  `,
  homeButton: styled.TouchableOpacity`
    margin-start: 20px;
    margin-end: 20px;
    background-color: ${colors.black};
  `,
  homeButtonText: styled.Text`
    font-size: 16px;
    font-weight: bold;
    margin: 2px;
    color: ${colors.white};
  `,
  profile: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightgray};
  `,
  text: styled.Text`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
    color: ${colors.black};
  `,
  kakaoResult: styled.Text`
    font-size: 15px;
    font-weight: 600;
    margin: 15px;
    color: ${colors.gray};
  `,
  kakaoButtonText: styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin: 5px;
    color: ${colors.white};
  `,
  kakaoButton: styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.kakao};
    padding: 5px;
    margin: 3px;
  `,
  tabBarIcon: styled.View`
    margin-top: 5px;
    background-color: ${colors.transparent};
  `,
  container: styled.SafeAreaView`
    flex: 1;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
};

export default Stylist;