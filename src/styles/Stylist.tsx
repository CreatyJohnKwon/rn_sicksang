// import { StyleSheet } from 'react-native';
import colors from './colors'
import styled from '@emotion/native'

const Stylist = {
  image: styled.Image``,
  home: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
  `,
  profile: styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${colors.white};
  `,
  text: styled.Text`
    font-size: 40px;
    font-weight: 600;
    color: ${colors.black};
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