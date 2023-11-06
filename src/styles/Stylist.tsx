// import { StyleSheet } from 'react-native';
import colors from './colors'
import styled from '@emotion/native'

const Stylist = {
  home: styled.View`
    height: 100%;
    width: 100%;
    align-items: stretch;
    background-color: ${colors.lightgray};
  `,
  homeTitle: styled.View`
    height: 10%;
    align-items: center;
    flex-direction: row;
    margin-top: 15px;
    margin-start: 20px;
    margin-end: 20px;
    background-color: ${colors.transparent};
  `,
  homeBody: styled.View`
    height: 80%;
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
    align-self: center;
    flex: 1;
    color: ${colors.black};
  `,
  homeUserImage: styled.ImageBackground`
    align-self: center;
    width: 48px;
    height: 48px;
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
  homeList: styled.SectionList`
    background-color: ${colors.red};
    padding: 16px;
  `,
  listItem: styled.SectionList`
    padding: 8px;
    border-bottom-width: 1px;
    border-bottom-color: #ccc;
  `,
  listItemText: styled.SectionList`
    font-size: 18px;
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