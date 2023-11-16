"use strict";
exports.__esModule = true;
var HomeStylist_1 = require("../styles/stylist/HomeStylist");
var axios_1 = require("axios");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var Store_1 = require("../controller/Store");
var react_native_1 = require("react-native");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var Indicators_1 = require("../controller/Indicators");
/** FlatList로 담길 아이템 */
var Item = function (_a) {
    var title = _a.title;
    return (react_1["default"].createElement(HomeStylist_1["default"].homeListItem, null,
        react_1["default"].createElement(HomeStylist_1["default"].homeListImage, { source: require('../assets/ic_launcher.png'), imageStyle: { borderRadius: 50 } }),
        react_1["default"].createElement(HomeStylist_1["default"].homeListTitle, null,
            title,
            " \uB0C9\uC7A5\uACE0")));
};
var NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
var IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";
var HomeScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(null), splash = _b[0], setSplash = _b[1];
    var _c = react_1.useState('NULL'), userName = _c[0], setUserName = _c[1];
    var _d = react_1.useState(require('../assets/ic_launcher.png')), imagePath = _d[0], setImagePath = _d[1]; // 초기 이미지 설정
    var _e = react_1.useState(), datas = _e[0], setDatas = _e[1];
    var renderItem = function (_a) {
        var item = _a.item;
        return react_1["default"].createElement(Item, { title: item.title });
    };
    var handleImagePress = function () {
        navigation.navigate('Profile');
    };
    // useEffect를 사용하여 데이터 가져오기
    react_1.useEffect(function () {
        axios_1["default"].get('https://my-json-server.typicode.com/typicode/demo/posts')
            // axios.get('http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2')
            .then(function (response) {
            setDatas(response.data); // 데이터를 상태로 설정
            console.log(response.data);
        })["catch"](function (error) {
            console.log(error);
        });
    }, []); // 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행
    native_1.useFocusEffect(react_1["default"].useCallback(function () {
        var _a, _b;
        // 화면이 포커스될 때 실행될 작업
        setSplash(true);
        console.log('Home is focused');
        var getName = ((_a = Store_1["default"].getItem(NICKNAME)) === null || _a === void 0 ? void 0 : _a.toString()) || 'NULL';
        var getImg = ((_b = Store_1["default"].getItem(IMAGE)) === null || _b === void 0 ? void 0 : _b.toString()) || 'NULL';
        if (getName && getImg != 'NULL') {
            setImagePath({ uri: getImg });
            setUserName(getName);
            setSplash(false);
        }
        else {
            setImagePath(require('../assets/ic_launcher.png'));
            setUserName('NULL');
            setSplash(false);
        }
        return function () {
            // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
            console.log('Home is unfocused');
        };
    }, []));
    // View 시작
    return (react_1["default"].createElement(HomeStylist_1["default"].home, null,
        react_1["default"].createElement(HomeStylist_1["default"].homeTitle, null,
            react_1["default"].createElement(HomeStylist_1["default"].homeUserName, null, userName + '님의 냉장고 목록' || '님의 냉장고 목록'),
            react_1["default"].createElement(HomeStylist_1["default"].homeTouchableImage, { onPress: handleImagePress },
                react_1["default"].createElement(HomeStylist_1["default"].homeUserImage, { source: imagePath, imageStyle: { borderRadius: 50 } }))),
        react_1["default"].createElement(HomeStylist_1["default"].homeBody, null,
            react_1["default"].createElement(HomeStylist_1["default"].homeListContainer, null,
                react_1["default"].createElement(react_native_1.FlatList, { data: datas, renderItem: renderItem, keyExtractor: function (item) { return item.id; } })),
            react_1["default"].createElement(HomeStylist_1["default"].homeButton, null,
                react_1["default"].createElement(MaterialCommunityIcons_1["default"], { name: 'plus', color: '#FFFFFF', size: 28 }))),
        splash && react_1["default"].createElement(Indicators_1["default"], null)));
};
exports["default"] = HomeScreen;
