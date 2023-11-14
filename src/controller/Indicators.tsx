import styled from '../styles/stylist/Stylist';
import FastImage from 'react-native-fast-image';
import Toasts from 'react-native-toast-message';

export default function Splash() {
    return (
        <styled.indicator>
            <FastImage
                style={{ width: 65, height: 65 }}
                source={require('../assets/spinner.gif')}
            />
        </styled.indicator>
    )
}

export function showToast(types: any, message: any) {
    return new Promise((resolve) => {
        Toasts.show({
            type: types,
            text1: message,
            position: 'top',
            visibilityTime: 1500,
            onHide() { 
                resolve;
            },
        });
    })
};