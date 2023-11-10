import styles from '../styles/stylist/HomeStylist';
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native'
import storage from '../controller/Store'
import { FlatList } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Splash from '../controller/Indicators'; 

/** FlatList로 담길 아이템 */
const Item = ({ title }: any) => (
  <styles.homeListItem>
    <styles.homeListImage source={require('../assets/ic_launcher.png')} imageStyle={{ borderRadius: 50 }} />
    <styles.homeListTitle>{title} 냉장고</styles.homeListTitle>
  </styles.homeListItem>
);

const NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
const IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";

const HomeScreen = () => {
  const [splash, setSplash] = useState<any>(null);
  const [userName, setUserName] = useState('NULL');
  const [imagePath, setImagePath] = useState(require('../assets/ic_launcher.png')); // 초기 이미지 설정
  const [datas, setDatas] = useState();

  const renderItem = ({ item }: any) => <Item title={item.title} />;

  // useEffect를 사용하여 데이터 가져오기
  useEffect(() => {
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
    // axios.get('http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2')
      .then(function (response) {
        setDatas(response.data); // 데이터를 상태로 설정
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행
  

  useFocusEffect(
    React.useCallback(() => {
      // 화면이 포커스될 때 실행될 작업
      setSplash(true);
      console.log('Home is focused');

      const getName = storage.getItem(NICKNAME)?.toString() || 'NULL';
      const getImg = storage.getItem(IMAGE)?.toString() || 'NULL';

      if (getName && getImg != 'NULL') {
        setImagePath({ uri: getImg });
        setUserName(getName);
      } else {
        setImagePath(require('../assets/ic_launcher.png'));
        setUserName('NULL');
      }
      setSplash(false);
      return () => {
        // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
        console.log('Home is unfocused');
      };
    }, [])
  );

  // View 시작
  return (
    <styles.home>
      <styles.homeTitle>
        <styles.homeUserName>{userName + '님의 냉장고 목록' || '님의 냉장고 목록'}</styles.homeUserName>
        <styles.homeUserImage source={imagePath} imageStyle={{ borderRadius: 50 }} />
      </styles.homeTitle>
      <styles.homeBody>
        <styles.homeListContainer>
          <FlatList
            data={datas}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </styles.homeListContainer>
        <styles.homeButton>
          <MaterialCommunityIcons name='plus' color='#FFFFFF' size={28} />
        </styles.homeButton>
      </styles.homeBody>
      {splash && <Splash />}
    </styles.home>
  );
};

export default HomeScreen;
