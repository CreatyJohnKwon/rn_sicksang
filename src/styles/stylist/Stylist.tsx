// import { StyleSheet } from 'react-native';
import colors from '../colors'
import styled from '@emotion/native'

const Stylist = {
  profile: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.lightgray};
  `,
  profileText: styled.Text`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
    color: ${colors.black};
  `,
  tabBarIcon: styled.View`
    margin-top: 5px;
    background-color: ${colors.transparent};
  `,
  container: styled.SafeAreaView`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  indicator: styled.SafeAreaView`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px; 
    bottom: 0px; 
    align-items: center; 
    justify-content: center; 
    background-color: rgba(0, 0, 0, 0.5);
  `,
};

export default Stylist;