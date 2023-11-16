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
exports.unlinkKakao = exports.getKakaoUserProfile = exports.kakaoLogout = exports.kakaoLogin = void 0;
var kakao_login_1 = require("@react-native-seoul/kakao-login");
var Store_1 = require("../controller/Store");
var NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
var EMAIL = "1D5E84F66AA2EEG16EE53G33ASE00ES5E13";
var IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";
var TOKEN = "TOKENTOKENTOKENTOKENTOKENTOKENTOKEN";
var LOGINFO = "loginStyleloginStyleloginStyleloginStyle";
exports.kakaoLogin = function () { return __awaiter(void 0, void 0, Promise, function () {
    var token, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 5, , 6]);
                return [4 /*yield*/, kakao_login_1.login()];
            case 1:
                token = _a.sent();
                if (!(token != null)) return [3 /*break*/, 3];
                Store_1["default"].setItem(TOKEN, token.accessToken ? token.accessToken.toString() : 'NULL');
                return [4 /*yield*/, exports.getKakaoUserProfile()];
            case 2:
                _a.sent();
                console.log(token.accessToken);
                return [2 /*return*/, true];
            case 3:
                Store_1["default"].setItem(TOKEN, 'NULL');
                return [2 /*return*/, false];
            case 4: return [3 /*break*/, 6];
            case 5:
                e_1 = _a.sent();
                console.log(e_1);
                return [2 /*return*/, false];
            case 6: return [2 /*return*/];
        }
    });
}); };
exports.kakaoLogout = function () { return __awaiter(void 0, void 0, Promise, function () {
    var message, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, kakao_login_1.logout()];
            case 1:
                message = _a.sent();
                console.log(message);
                Store_1["default"].setItem(NICKNAME, 'NULL');
                Store_1["default"].setItem(IMAGE, 'NULL');
                Store_1["default"].setItem(TOKEN, 'NULL');
                Store_1["default"].setItem(LOGINFO, 'NULL');
                return [2 /*return*/, true];
            case 2:
                e_2 = _a.sent();
                console.log(e_2);
                return [2 /*return*/, false];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getKakaoUserProfile = function () { return __awaiter(void 0, void 0, Promise, function () {
    var profile, nickname, email, image, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, kakao_login_1.getProfile()];
            case 1:
                profile = _a.sent();
                nickname = profile.nickname;
                email = profile.email;
                image = profile.profileImageUrl;
                Store_1["default"].setItem(NICKNAME, nickname ? nickname.toString() : 'NULL');
                Store_1["default"].setItem(EMAIL, email ? email.toString() : 'NULL');
                Store_1["default"].setItem(IMAGE, image ? image.toString() : 'NULL');
                Store_1["default"].setItem(LOGINFO, 'KAKAO');
                console.log('nickname: ' + nickname + '\temail: ' + email + '\timage: ' + image);
                return [3 /*break*/, 3];
            case 2:
                error_1 = _a.sent();
                console.error('KAKAO ERROR:', error_1);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.unlinkKakao = function () { return __awaiter(void 0, void 0, Promise, function () {
    var message, e_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, kakao_login_1.unlink()];
            case 1:
                message = _a.sent();
                console.log(message);
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                console.log(e_3);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); };
