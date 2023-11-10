// import { StyleSheet } from 'react-native';
import colors from '../colors'
import styled from '@emotion/native'

const HomeStylist = {
  home: styled.SafeAreaView`
    height: 100%;
    width: 100%;
    align-items: stretch;
    background-color: ${colors.lightgray};
  `,
  homeTitle: styled.View`
    height: 10%;
    align-items: center;
    flex-direction: row;
    margin-top: 42px;
    margin-start: 25px;
    margin-end: 20px;
    background-color: ${colors.transparent};
  `,
  homeBody: styled.View`
    height: 80%;
    align-items: stretch;
    flex-direction: column;
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
    height: 70px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-start: 3px;
    margin-end: 3px;
    border-radius: 10px;
    background-color: ${colors.black};
  `,
  homeListContainer: styled.SafeAreaView`
    margin-top: 10px;
  `,
  homeListItem: styled.TouchableOpacity`
    height: 100px;
    background-color: ${colors.white};
    flex-direction: row;
    padding: 20px;
    margin-start: 3px;
    margin-end: 3px;
    margin-bottom: 12px;
    border-radius: 10px;
    border-width: 0.7px;
    border-color: ${colors.black};
  `,
  homeListTitle: styled.Text`
    font-size: 16px;
    color: ${colors.black};
    font-weight: bold;
    margin-start: 13px;
    margin-top: 8.1px;
  `,
  homeListImage: styled.ImageBackground`
    height: 30px;
    width: 30px;
    margin-top: 5px;
  `,
};

export default HomeStylist;