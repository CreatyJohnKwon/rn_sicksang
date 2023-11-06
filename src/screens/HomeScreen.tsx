import styles from '../styles/Stylist';
// import axios from 'axios'
import React, { useState } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import storage from '../controller/Store'

const HomeScreen = () => {
  const [userName, setUserName] = useState('');
  const [imagePath, setImagePath] = useState(require('../assets/ic_launcher.png')); // 초기 이미지 설정

  const NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
  const IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";

  useFocusEffect(
    React.useCallback(() => {
      // 화면이 포커스될 때 실행될 작업
      console.log('Home is focused');

      const getName = storage.getItem(NICKNAME)?.toString();
      const getImg = storage.getItem(IMAGE)?.toString();

      if (getName && getImg != 'NULL') {
        setImagePath({ uri: getImg });
        setUserName(getName);
      } else {
        setImagePath(require('../assets/ic_launcher.png' ));
        setUserName('NULL');
      }

      // if (getImg == 'NULL') 
      // } else {
        
      // }

      return () => {
        // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
        console.log('Home is unfocused');
      };
    }, [])
  );

  // // axios로 데이터를 CRUD
  // const getData = async () => {
  //   let response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
  //   // let response = await axios.get("https://fgmate.shop/app/users/login"); // 식상해 default url + 로그인
  //   return response.data;
  // };

  // // GED한 데이터를 원하는 때에 뿌리기 위해 handling
  // const handleData = (num: number) => {
  //   getData().then((data) => {
  //     if (data.length > num) {
  //       const firstItemTitle = data[num].title;
  //       setUserName(firstItemTitle);
  //     } else {
  //       console.log('no data');
  //     }
  //   })
  // }

  // View 시작
  return (
    <styles.home>
      <styles.homeTitle>
        <styles.homeUserName>{userName + '님의 냉장고 목록' || '님의 냉장고 목록'}</styles.homeUserName>
        <styles.homeUserImage source={imagePath} imageStyle={{ borderRadius: 50 }}/>
      </styles.homeTitle>
      <styles.homeBody>
      </styles.homeBody>
    </styles.home>
  );
};

export default HomeScreen;
