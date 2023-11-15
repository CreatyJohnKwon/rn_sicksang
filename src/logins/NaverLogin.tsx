import storage from '../controller/Store';
import NaverLogin from "@react-native-seoul/naver-login";

const consumerKey = 'o3UsmTVEYGORAREFn9w_';
const consumerSecret = 'iEQtOrGEHZ';
const appName = '식상해';
const serviceUrlScheme = 'navertest'; // only for iOS

const NICKNAME = "NICKNAMENICKNAMENICKNAMENICKNAME";
const EMAIL = "1D5E84F66AA2EEG16EE53G33ASE00ES5E13";
const IMAGE = "IMAGEIMAGEIMAGEIMAGEIMAGEIMAGEIMAGE";
const TOKEN = "TOKENTOKENTOKENTOKENTOKENTOKENTOKEN";
const LOGINFO: string = "loginStyleloginStyleloginStyleloginStyle";

export const naverLogin = async (): Promise<boolean> => {
    try {
        const { failureResponse, successResponse } = await NaverLogin.login({
            appName,
            consumerKey,
            consumerSecret,
            serviceUrlScheme,
        });
        const token = successResponse?.accessToken;

        if (token != null) {
            await getNaverUserProfile(token);
            storage.setItem(TOKEN, successResponse?.accessToken ? successResponse?.accessToken.toString() : 'NULL');
            console.log(successResponse?.accessToken);
            return true;
        } else {
            storage.setItem(TOKEN, 'NULL');
            console.log(failureResponse?.message);
            return false;
        }
    } catch (e) {
        console.log(e);
        return false;
    }
};

export const naverLogout = async (): Promise<boolean> => {
    try {
        await NaverLogin.logout();
        console.log(NaverLogin.logout.name);
        storage.setItem(NICKNAME, 'NULL');
        storage.setItem(EMAIL, 'NULL');
        storage.setItem(IMAGE, 'NULL');
        storage.setItem(TOKEN, 'NULL');
        storage.setItem(LOGINFO, 'NULL');
        return true;
    } catch (e) {
        return false;
    }
};

export const getNaverUserProfile = async (token: string): Promise<void> => {
    try {
        const profileResult = await NaverLogin.getProfile(token);
        const nickname = profileResult.response.name;
        const email = profileResult.response.email;
        const image = profileResult.response.profile_image;
        storage.setItem(NICKNAME, nickname ? nickname : 'NULL');
        storage.setItem(EMAIL, email ? email : 'NULL');
        storage.setItem(IMAGE, image ? image : 'NULL');
        storage.setItem(LOGINFO, 'NAVER');
        console.log('nickname: ' + nickname + '\temail: ' + email + '\timage: ' + image);
    } catch (e) {
        console.log(e);
    }
};

export const naverDeleteToken = async (): Promise<void> => {
    try {
        const message = await NaverLogin.deleteToken();
        console.log(message);
    } catch (e) {
        console.error(e);
    }
};