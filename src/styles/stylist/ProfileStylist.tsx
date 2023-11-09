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
  profileContainer: styled.SafeAreaView`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  `,
  profileText: styled.Text`
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 50px;
    color: ${colors.black};
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
  naverButtonText: styled.Text`
    font-size: 20px;
    font-weight: 600;
    margin: 5px;
    color: ${colors.white};
  `,
  naverButton: styled.TouchableOpacity`
    align-items: center;
    background-color: ${colors.naver};
    padding: 5px;
    margin: 3px;
  `,
};

export default Stylist;