// import { StyleSheet } from 'react-native';
import colors from '../colors'
import styled from '@emotion/native'

const Stylist = {
  profile: styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${colors.lightgray};
  `,
  profileContainerT: styled.SafeAreaView`
    flex: 1.3;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    flex-direction: column;
    elevation: 3;
  `,
  profileContainerUserInfo: styled.SafeAreaView`
    flex: 2.65;
    width: 100%;
    justify-content: top;
    align-items: center;
    background-color: ${colors.transparent};
  `,
  profileContainerElse: styled.SafeAreaView`
    flex: 6.05;
    width: 100%;
    justify-content: space-evenly;
    align-items: top;
    flex-direction: row;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    elevation: 3;
    background-color: ${colors.white};
  `,
  profileSection: styled.SafeAreaView`
    width: 92%;
    height: 160px;
    justify-content: center;
    align-items: center;
    top: 15px;
    bottom: 10px;
    border-radius: 10px;
    border-width: 0px;
    elevation: 5;
    background-color: ${colors.white};
  `,
  profileInnerSectionT: styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: ${colors.transparent};
  `,
  profileInnerSectionB: styled.View`
    flex: 1;
    width: 100%;
    content-align: center;
    align-items: center;
    background-color: ${colors.transparent};
  `,
  profileStroke: styled.View`
    width: 90%;
    height: 0.5px;
    align-self: flex-top;
    top: 10px;
    background-color: ${colors.gray};
  `,
  profileTitleText: styled.Text`
    font-size: 17.5px;
    font-weight: 900;
    text-align: center;
    top: 18.5px;
    color: ${colors.black};
  `,
  profileTitleMText: styled.Text`
    font-size: 9px;
    font-weight: 900;
    text-align: center;
    top: 25px;
    right: 34px;
    color: ${colors.black};
  `,
  profileText: styled.Text`
    top: 30px;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
    color: ${colors.black};
  `,
  friendSection: styled.SafeAreaView`
    flex: 1;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-color: ${colors.transparent};
  `,
  friendButton: styled.TouchableOpacity`
    width: 45%;
    height: 42px;
    top: 5px;
    margin: 3px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border-radius: 15px;
    background-color: ${colors.black};
  `,
  friendButtonTextL: styled.Text`
    color: ${colors.white};
    font-weight: bold;
    font-size: 11px;
    start: 15px;
  `,
  friendButtonTextR: styled.Text`
    color: ${colors.white};
    font-weight: bold;
    font-size: 11px;
    end: 15px;
  `,
  logoutButtonText: styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: ${colors.black};
    top: 15px;
    end: 15px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.black};
    background-color: ${colors.transparent};
  `,
  logoutButton: styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.transparent};
    padding: 7px;
    margin: 3.5px;
  `,
  userInfoSection: styled.SafeAreaView`
    flex: 0.9;
    flex-direction: row;
    top: 5px;
    height: 100%;
    justify-content: start;
    align-items: top;
    background-color: ${colors.transparent};
  `,  
  userInfoInnerSection: styled.SafeAreaView`
    start: 25px;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    background-color: ${colors.transparent};
  `,
  userImage: styled.ImageBackground`
    align-self: center;
    width: 50px;
    height: 50px;
    start: 15px;
    top: 15px;
  `,
  userTouchableImage: styled.TouchableOpacity``,
  userName: styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: ${colors.black};
  `,
  userLogInfoSection: styled.SafeAreaView`
    height: 20%;
    flex-direction: row;
    background-color: ${colors.transparent};
  `,
  userLogInfoText: styled.Text`
    start: 5px;
    font-size: 11.5px;
    font-weight: bold;
    color: ${colors.gray};
  `,
  profileBigButton: styled.TouchableOpacity`
    width: 45%;
    height: 80px;
    elevation: 5;
    top: 15px;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border-width: 0px;
    background-color: ${colors.white};
  `,
  profileBigButtonText: styled.Text`
    font-size: 17px;
    font-weight: bold;
    color: ${colors.black};
  `,
};

export default Stylist;