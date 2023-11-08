import { KakaoOAuthToken, KakaoProfile, login, logout, getProfile, unlink } from '@react-native-seoul/kakao-login';
import storage from '../controller/Store';

const NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
const EMAIL = "1D5E84F66AA2EEG16EE53G33ASE00ES5E13";
const IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";
const KTOKEN = "KTOKENKTOKENKTOKENKTOKENKTOKENKTOKEN";

export const kakaoLogin = async (): Promise<void> => {

    try {
        // Kakao 로그인 처리
        const token: KakaoOAuthToken = await login();

        console.log(token.accessToken.toString());

        if (token != null) {
            getKakaoUserProfile();
            storage.setItem(KTOKEN, token.toString());
        } else {
            storage.setItem(KTOKEN, 'NULL');
        }
    } catch (e) {
        console.log(e);
    }
};

export const kakaoLogout = async (): Promise<void> => {
    try {
        // Kakao 로그아웃 처리
        const message = await logout();
        console.log(message);
        storage.setItem(NICKNAME, 'NULL');
        storage.setItem(IMAGE, 'NULL');
    } catch (e) {
        console.log(e);
    }
};

export const getKakaoUserProfile = async (): Promise<void> => {
    // Kakao 사용자 프로필 가져오기
    try {
        const profile: KakaoProfile = await getProfile();
        const nickname = profile.nickname;
        const email = profile.email;
        const image = profile.profileImageUrl;
        storage.setItem(NICKNAME, nickname ? nickname.toString() : 'NULL');
        storage.setItem(EMAIL, email ? email.toString() : 'NULL');
        storage.setItem(IMAGE, image ? image.toString() : 'NULL');
        console.log('nickname: ' + nickname + '\temail: ' + email + '\timage: ' + image);
    } catch (error) {
        console.error('KAKAO ERROR:', error);
    }
};

export const unlinkKakao = async (): Promise<void> => {
    try {
        // Kakao 회원 탈퇴
        const message = await unlink();

        console.log(message);
    } catch (e) {
        console.log(e);
    }
};