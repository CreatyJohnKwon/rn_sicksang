import styles from '../styles/stylist/Stylist';
import { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native';

const ProfileScreen = () => {

  useFocusEffect(
    useCallback(() => {
      // 화면이 포커스될 때 실행될 작업
      console.log('Profile is focused');

      return () => {
        // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
        console.log('Profile is unfocused');
      };
    }, [])
  );

  return (
    <styles.profile>
      <styles.profileText>Profile Screen</styles.profileText>
    </styles.profile>
  );
};

export default ProfileScreen;