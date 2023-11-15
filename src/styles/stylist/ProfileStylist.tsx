// import { StyleSheet } from 'react-native';
import colors from '../colors'
import styled from '@emotion/native'

const Stylist = {
  profile: styled.SafeAreaView`
    flex: 1;
    align-items: center;
    background-color: ${colors.lightgray};
  `,
  profileContainer1st: styled.View`
    flex: 1.3;
    width: 100%;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
    flex-direction: column;
    elevation: 3;
  `,
  profileContainer2nd: styled.View`
    flex: 8.7;
    width: 100%;
    justify-content: top;
    align-items: center;1
    background-color: ${colors.transparent};
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
  profileInnerSection1st: styled.View`
    flex: 1;
    width: 100%;
    background-color: ${colors.transparent};
  `,
  profileInnerSection2nd: styled.View`
    flex: 1;
    width: 100%;
    content-align: center;
    align-items: center;
    background-color: ${colors.transparent};
  `,
  profileStroke: styled.View`
    width: 90%;
    height: 1px;
    align-self: flex-top;
    top: 10px;
    background-color: ${colors.black};
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
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
    color: ${colors.black};
  `,
  logoutButtonText: styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin: 5px;
    align-self: flex-end;
    color: ${colors.black};
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
};

export default Stylist;