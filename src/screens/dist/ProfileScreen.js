"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var ProfileStylist_1 = require("../styles/stylist/ProfileStylist");
var react_1 = require("react");
var native_1 = require("@react-navigation/native");
var KakaoLogin_1 = require("../logins/KakaoLogin");
var NaverLogin_1 = require("../logins/NaverLogin");
var Store_1 = require("../controller/Store");
var Indicators_1 = require("../controller/Indicators");
var Octicons_1 = require("react-native-vector-icons/Octicons");
var colors_1 = require("../styles/colors");
var NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
var LOGINFO = "loginStyleloginStyleloginStyleloginStyle";
var IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";
var ProfileScreen = function (_a) {
    var navigation = _a.navigation;
    var _b = react_1.useState(null), splash = _b[0], setSplash = _b[1];
    var _c = react_1.useState(null), useLogInfo = _c[0], setLogInfo = _c[1];
    var _d = react_1.useState(null), userName = _d[0], setUserName = _d[1];
    var _e = react_1.useState(null), icColor = _e[0], setIcColor = _e[1];
    var _f = react_1.useState(require('../assets/ic_launcher.png')), imagePaths = _f[0], setImagePaths = _f[1]; // 초기 이미지 설정
    native_1.useFocusEffect(react_1.useCallback(function () {
        var _a, _b, _c;
        setSplash(true);
        // 화면이 포커스될 때 실행될 작업
        console.log('Profile is focused');
        var getLoginfo = ((_a = Store_1["default"].getItem(LOGINFO)) === null || _a === void 0 ? void 0 : _a.toString()) || 'NULL';
        var getName = ((_b = Store_1["default"].getItem(NICKNAME)) === null || _b === void 0 ? void 0 : _b.toString()) || 'NULL';
        var getImg = ((_c = Store_1["default"].getItem(IMAGE)) === null || _c === void 0 ? void 0 : _c.toString()) || 'NULL';
        // 안하면 에러남.....
        if (getLoginfo && getImg != 'NULL') {
            setImagePaths({ uri: getImg });
            setLogInfo(getLoginfo);
            setUserName(getName);
            setSplash(false);
            if (getLoginfo == 'KAKAO') {
                setIcColor(colors_1["default"].kakao);
            }
            else if (getLoginfo == 'NAVER') {
                setIcColor(colors_1["default"].naver);
            }
            else {
                setIcColor(colors_1["default"].gray);
            }
        }
        else {
            setImagePaths(require('../assets/ic_launcher.png'));
            setLogInfo('NULL');
            setUserName('NULL');
            setSplash(false);
        }
        return function () {
            // 화면이 포커스를 잃을 때(clean-up) 실행될 작업
            console.log('Profile is unfocused');
        };
    }, []));
    function isKakaoLogout() {
        return __awaiter(this, void 0, void 0, function () {
            var loginResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, KakaoLogin_1.kakaoLogout()];
                    case 1:
                        loginResult = _a.sent();
                        if (loginResult) {
                            console.log("Kakao logout successful!");
                            // 로그아웃하면서 이전 화면 스택 모두 초기화
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }]
                            });
                        }
                        else {
                            console.log("Kakao logout failed!");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("An error occurred during Kakao login:", error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function isNaverLogout() {
        return __awaiter(this, void 0, void 0, function () {
            var loginResult, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, NaverLogin_1.naverLogout()];
                    case 1:
                        loginResult = _a.sent();
                        if (loginResult) {
                            console.log("Naver logout successful!");
                            // 로그아웃하면서 이전 화면 스택 모두 초기화
                            navigation.reset({
                                index: 0,
                                routes: [{ name: 'Login' }]
                            });
                        }
                        else {
                            console.log("Naver logout failed!");
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error("An error occurred during Naver login:", error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    var handleButtonPress = function () {
        navigation.navigate('Home');
    };
    return (React.createElement(ProfileStylist_1["default"].profile, null,
        React.createElement(ProfileStylist_1["default"].profileContainerT, null,
            React.createElement(ProfileStylist_1["default"].profileTitleMText, null, "Bro."),
            React.createElement(ProfileStylist_1["default"].profileTitleText, null, "SICKSANG")),
        React.createElement(ProfileStylist_1["default"].profileContainerUserInfo, null,
            React.createElement(ProfileStylist_1["default"].profileSection, null,
                React.createElement(ProfileStylist_1["default"].profileInnerSectionT, null,
                    React.createElement(ProfileStylist_1["default"].userInfoSection, null,
                        React.createElement(ProfileStylist_1["default"].userTouchableImage, null,
                            React.createElement(ProfileStylist_1["default"].userImage, { source: imagePaths, imageStyle: { borderRadius: 50 } })),
                        React.createElement(ProfileStylist_1["default"].userInfoInnerSection, null,
                            React.createElement(ProfileStylist_1["default"].userName, null, userName),
                            React.createElement(ProfileStylist_1["default"].userLogInfoSection, null,
                                React.createElement(Octicons_1["default"], { name: 'dot-fill', color: icColor, size: 15 }),
                                React.createElement(ProfileStylist_1["default"].userLogInfoText, null, useLogInfo)))),
                    React.createElement(ProfileStylist_1["default"].logoutButton, { onPress: useLogInfo == 'KAKAO' ? isKakaoLogout : isNaverLogout },
                        React.createElement(ProfileStylist_1["default"].logoutButtonText, null, "\uB85C\uADF8\uC544\uC6C3"))),
                React.createElement(ProfileStylist_1["default"].profileInnerSectionB, null,
                    React.createElement(ProfileStylist_1["default"].profileStroke, null),
                    React.createElement(ProfileStylist_1["default"].friendSection, null,
                        React.createElement(ProfileStylist_1["default"].friendButton, null,
                            React.createElement(ProfileStylist_1["default"].friendButtonTextL, null, "\uD314\uB85C\uC6CC"),
                            React.createElement(ProfileStylist_1["default"].friendButtonTextR, null, "0")),
                        React.createElement(ProfileStylist_1["default"].friendButton, null,
                            React.createElement(ProfileStylist_1["default"].friendButtonTextL, null, "\uD314\uB85C\uC789"),
                            React.createElement(ProfileStylist_1["default"].friendButtonTextR, null, "0")))))),
        React.createElement(ProfileStylist_1["default"].profileContainerElse, null,
            React.createElement(ProfileStylist_1["default"].profileBigButton, { onPress: function () { return handleButtonPress(); } },
                React.createElement(ProfileStylist_1["default"].profileBigButtonText, null, "\uB098\uB9CC\uC758 \uB0C9\uC7A5\uACE0")),
            React.createElement(ProfileStylist_1["default"].profileBigButton, null,
                React.createElement(ProfileStylist_1["default"].profileBigButtonText, null, "\uADF8\uB8F9 \uB0C9\uC7A5\uACE0"))),
        splash && React.createElement(Indicators_1["default"], null)));
};
exports["default"] = ProfileScreen;
