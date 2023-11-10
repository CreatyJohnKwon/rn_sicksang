import styled from '../styles/stylist/Stylist';
import FastImage from 'react-native-fast-image';

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