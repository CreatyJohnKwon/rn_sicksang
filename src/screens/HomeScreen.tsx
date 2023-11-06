import styles from '../styles/Stylist';
import axios from 'axios'
import React, { useState } from 'react';

const HomeScreen = () => {

  const [userName, setUserName] = useState('');

  const getData = async () => {
    let response = await axios.get('https://my-json-server.typicode.com/typicode/demo/posts');
    // let response = await axios.get("https://fgmate.shop/app/users/login"); // 로그인
    return response.data;
  };

  const handleData = (num: number) => {
    getData().then((data) => {
      if (data.length > num) {
        const firstItemTitle = data[num].title;
        setUserName(firstItemTitle);
      } else {
        console.log('no data');
      }
    })
  }

  return (
    <styles.home>
      <styles.homeTitle>
        <styles.homeUserName>{userName + '님의 냉장고 목록' || '님의 냉장고 목록'}</styles.homeUserName>
      </styles.homeTitle>
      <styles.homeButton onPress={() => handleData(0)}>
        <styles.homeButtonText>User id 0</styles.homeButtonText>
      </styles.homeButton>
    </styles.home>
  );
};

export default HomeScreen;
