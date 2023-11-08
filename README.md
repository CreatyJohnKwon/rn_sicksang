
<My Version>
JDK : 17
Android Max : 33
Android Min : 21
RN(React-native) : 0.72.6
Node.js/Npm : 18.18.0 / 9.8.1
openssl : 3.0.10+quic
Api Library : axios
Status Manage Library : Zustand

=========================================
공식 사이트

1. Icons
https://github.com/oblador/react-native-vector-icons

=========================================

0. react-native 에러 대응 꿀팁 -1
https://velog.io/@badbeoti/%EB%B2%84%EA%B7%B8%EB%8D%A9%EC%96%B4%EB%A6%AC-react-native-%EC%97%90%EB%9F%AC-%EB%8C%80%EC%9D%91-%EA%BF%80%ED%8C%81-1
0. 꿀팁 -2
https://velog.io/@badbeoti/%EB%B2%84%EA%B7%B8%EB%8D%A9%EC%96%B4%EB%A6%AC-react-native-%EC%97%90%EB%9F%AC-%EB%8C%80%EC%9D%91-%EA%BF%80%ED%8C%81-2

1. 설치 도우미
https://growing-nyang.tistory.com/106

2. 개발하는데 유용한 VSCode 확장팩
https://inpa.tistory.com/entry/VS-Code-%E2%8F%B1%EF%B8%8F-%EC%BD%94%EB%94%A9%EC%97%90-%EC%9C%A0%EC%9A%A9%ED%95%9C-%EB%8F%84%EA%B5%AC-%EC%B6%94%EC%B2%9C

3. tcpip로 바로 디바이스 연결해서 실행하는 명령어
https://m.blog.naver.com/minsekim1/222006272053
wifi 연결 (pc-디바이스 동일기기)
adb connect (디바이스 ip 번호 입력)
react-native run android

4. RN-앱 아이콘 변경하기 ( 나중에 ios 개발 용 기록임. )
https://kgu0724.tistory.com/241

5. nvm으로 노드 자유자재로 다루기
https://inpa.tistory.com/entry/NODE-%F0%9F%93%9A-NVM-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%EB%B2%95-%EB%85%B8%EB%93%9C-%EB%B2%84%EC%A0%84-%EA%B4%80%EB%A6%AC

6. zustand로 상태관리하기
https://ui.toast.com/posts/ko_20210812

7. import for developing Bottom Navigator bars
https://joonfluence.tistory.com/568

8. 뭔가 문제가 생겼는데 잘 모르겠다 싶으면?
무지성 돌려볼 것
react-native doctor

9. 문제 해결 : tcp ip 등 디바이스와 연결이 오류가 생길 경우
https://stackoverflow.com/questions/62937553/no-apps-connected-sending-reload-to-all-react-native-apps-failed-make-sure

10. 예비 이슈 해결
https://froggydisk.github.io/27th-post/

===========================
본격적 개발 시작
---------------------------
1. 상태 바에 스타일을 적용해보자 ( 2023 11 02 )
https://velog.io/@ttoottie/RN-Status-Bar%EC%97%90-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%84-%EC%A0%81%EC%9A%A9%ED%95%B4%EB%B3%B4%EC%9E%90-9xp185ny

2. 화면의 전체 크기 받아오기 ( 2023 11 02 ) IOS AOS 동일
https://jiny-dongle.tistory.com/41

3. RN - 반응형 레이아웃 짜기 (확장성을 위하여... 2023 11 03 )
https://velog.io/@beanlove97/%EB%A6%AC%EC%95%A1%ED%8A%B8-%EB%84%A4%EC%9D%B4%ED%8B%B0%EB%B8%8C-%EB%B0%98%EC%9D%91%ED%98%95-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83

4-1. RN 카카오 액세스 토큰 다루기 (2023 11 06)
https://github.com/crossplatformkorea/react-native-kakao-login

4-2. RN 네이버 액세스 토큰 다루기 (2023 11 08)
https://github.com/crossplatformkorea/react-native-naver-login
https://velog.io/@pcsnms/Naver-Login

5. 버튼에 대하여...
https://hangjastar.tistory.com/28

6. ReactNative Paper 사용하기
https://ccusean.tistory.com/entry/React-Native-UI-Components-Library-Top-3

7. axios를 사용하여 RestAPI 연동하기
https://initstory.tistory.com/61#google_vignette

8. 요소의 배치와 정렬 / 레이아웃 디자인
https://velog.io/@wook4506/React-Native-%EC%9A%94%EC%86%8C%EC%9D%98-%EB%B0%B0%EC%B9%98%EC%99%80-%EC%A0%95%EB%A0%AC
https://yuddomack.tistory.com/entry/5React-Native-%EB%A0%88%EC%9D%B4%EC%95%84%EC%9B%83-%EB%94%94%EC%9E%90%EC%9D%B8-1%EB%B6%80-flex%EC%99%80-width-height

9. RN-SectionList 사용하기 (1106)
https://velog.io/@jt_include_rw/React-Native-SectionList-to-FlashList

==================================( 공식 문서 )========================================

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
