"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var react_1 = require("react");
var react_native_1 = require("react-native");
var LoginStylist_1 = require("../styles/stylist/LoginStylist");
var react_native_toast_message_1 = require("react-native-toast-message");
var KakaoLogin_1 = require("../logins/KakaoLogin");
var NaverLogin_1 = require("../logins/NaverLogin");
var BottomSheet = function (props) {
    var modalVisible = props.modalVisible, setModalVisible = props.setModalVisible;
    var screenHeight = react_native_1.Dimensions.get("screen").height;
    var panY = react_1.useRef(new react_native_1.Animated.Value(screenHeight)).current;
    var translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1]
    });
    var resetBottomSheet = react_native_1.Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
    });
    var closeBottomSheet = react_native_1.Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true
    });
    var panResponders = react_1.useRef(react_native_1.PanResponder.create({
        onStartShouldSetPanResponder: function () { return true; },
        onMoveShouldSetPanResponder: function () { return false; },
        onPanResponderMove: function (event, gestureState) {
            panY.setValue(gestureState.dy);
        },
        onPanResponderRelease: function (event, gestureState) {
            if (gestureState.dy > 0 && gestureState.vy > 1.5) {
                closeModal();
            }
            else {
                resetBottomSheet.start();
            }
        }
    })).current;
    react_1.useEffect(function () {
        if (props.modalVisible) {
            resetBottomSheet.start();
        }
        else {
            closeBottomSheet.start();
        }
    }, [props.modalVisible]);
    var closeModal = function () {
        closeBottomSheet.start(function () {
            setModalVisible(false);
        });
    };
    function isKakaoLogin() {
        return __awaiter(this, void 0, void 0, function () {
            var loginResult, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, KakaoLogin_1.kakaoLogin()];
                    case 1:
                        loginResult = _a.sent();
                        if (loginResult) {
                            console.log("Kakao login successful!");
                            react_native_toast_message_1["default"].show({
                                text1: '카카오 로그인 성공!',
                                visibilityTime: 1500,
                                onHide: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        closeBottomSheet.start();
                                        props.navigation.navigate('Main');
                                        return [2 /*return*/];
                                    });
                                }); }
                            });
                        }
                        else {
                            console.log("Kakao login failed!");
                            react_native_toast_message_1["default"].show({
                                type: 'error',
                                text1: '카카오 로그인 실패: 404',
                                visibilityTime: 1500
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error("An error occurred during Kakao login:", error_1);
                        react_native_toast_message_1["default"].show({
                            type: 'error',
                            text1: '카카오 로그인 실패: 502',
                            visibilityTime: 1500
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    function isNaverLogin() {
        return __awaiter(this, void 0, void 0, function () {
            var loginResult, error_2;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, NaverLogin_1.naverLogin()];
                    case 1:
                        loginResult = _a.sent();
                        if (loginResult) {
                            console.log("Naver login successful!");
                            react_native_toast_message_1["default"].show({
                                text1: '네이버 로그인 성공!',
                                visibilityTime: 1500,
                                onHide: function () { return __awaiter(_this, void 0, void 0, function () {
                                    return __generator(this, function (_a) {
                                        closeBottomSheet.start();
                                        props.navigation.navigate('Main');
                                        return [2 /*return*/];
                                    });
                                }); }
                            });
                        }
                        else {
                            console.log("Naver login failed!");
                            react_native_toast_message_1["default"].show({
                                type: 'error',
                                text1: '네이버 로그인 실패: 404',
                                visibilityTime: 1500
                            });
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.error("An error occurred during Naver login:", error_2);
                        react_native_toast_message_1["default"].show({
                            type: 'error',
                            text1: '네이버 로그인 실패: 502',
                            visibilityTime: 1500
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1["default"].createElement(react_native_1.Modal, { visible: modalVisible, animationType: "fade", transparent: true, statusBarTranslucent: true },
        react_1["default"].createElement(LoginStylist_1["default"].bottomOverlay, null,
            react_1["default"].createElement(LoginStylist_1["default"].bottomTouch, { onPress: closeModal },
                react_1["default"].createElement(LoginStylist_1["default"].bottomBackground, null)),
            react_1["default"].createElement(react_native_1.Animated.View, __assign({ style: __assign(__assign({}, styled.bottomSheetContainer), { transform: [{ translateY: translateY }] }) }, panResponders.panHandlers),
                react_1["default"].createElement(LoginStylist_1["default"].kakaoButton, { onPress: isKakaoLogin },
                    react_1["default"].createElement(LoginStylist_1["default"].buttonsText, null, "\uCE74\uCE74\uC624\uB85C \uB85C\uADF8\uC778")),
                react_1["default"].createElement(LoginStylist_1["default"].naverButton, { onPress: isNaverLogin },
                    react_1["default"].createElement(LoginStylist_1["default"].buttonsText, null, "\uB124\uC774\uBC84\uB85C \uB85C\uADF8\uC778")),
                react_1["default"].createElement(LoginStylist_1["default"].newClientButton, null,
                    react_1["default"].createElement(LoginStylist_1["default"].newClientButtonText, null, "\uB2E4\uB978 \uC544\uC774\uB514 \uC0AC\uC6A9\uD558\uAE30")))),
        react_1["default"].createElement(react_native_toast_message_1["default"], null)));
};
var styled = react_native_1.StyleSheet.create({
    bottomSheetContainer: {
        height: '27%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    }
});
exports["default"] = BottomSheet;
