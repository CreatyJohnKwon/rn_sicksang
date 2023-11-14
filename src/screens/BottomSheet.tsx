import React, { useEffect, useRef } from 'react';
import {
    StyleSheet,
    Modal,
    Animated,
    Dimensions,
    PanResponder
} from 'react-native';
import styles from '../styles/stylist/LoginStylist';
import Toast from 'react-native-toast-message';
import { kakaoLogin } from "../logins/KakaoLogin";
import { naverLogin } from '../logins/NaverLogin';

const BottomSheet = (props: any) => {
    const { modalVisible, setModalVisible } = props;
    const screenHeight = Dimensions.get("screen").height;
    const panY = useRef(new Animated.Value(screenHeight)).current;
    const translateY = panY.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 0, 1],
    });

    const resetBottomSheet = Animated.timing(panY, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
    });

    const closeBottomSheet = Animated.timing(panY, {
        toValue: screenHeight,
        duration: 300,
        useNativeDriver: true,
    });

    const panResponders = useRef(PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onMoveShouldSetPanResponder: () => false,
        onPanResponderMove: (event, gestureState) => {
            panY.setValue(gestureState.dy);
        },
        onPanResponderRelease: (event, gestureState) => {
            if (gestureState.dy > 0 && gestureState.vy > 1.5) {
                closeModal();
            }
            else {
                resetBottomSheet.start();
            }
        }
    })).current;

    useEffect(() => {
        if (props.modalVisible) {
            resetBottomSheet.start();
        }
    }, [props.modalVisible]);

    const closeModal = () => {
        closeBottomSheet.start(() => {
            setModalVisible(false);
        })
    }

    async function isKakaoLogin() {
        try {
            const loginResult: boolean = await kakaoLogin();

            if (loginResult) {
                console.log("Kakao login successful!");
                Toast.show({
                    text1: '카카오 로그인 성공!',
                    visibilityTime: 1500,
                    onHide: async () => {
                        props.navigation.navigate('Main');
                    },
                });
            } else {
                console.log("Kakao login failed!");
                Toast.show({
                    type: 'error',
                    text1: '카카오 로그인 실패: 404',
                    visibilityTime: 1500,
                    onHide: async () => {
                        props.navigation.navigate('Main');
                    },
                });
            }
        } catch (error) {
            console.error("An error occurred during Kakao login:", error);
            Toast.show({
                type: 'error',
                text1: '카카오 로그인 실패: 502',
                visibilityTime: 1500,
                onHide: async () => {
                    props.navigation.navigate('Main');
                },
            });
        }
    }

    async function isNaverLogin() {
        try {
            const loginResult: boolean = await naverLogin();

            if (loginResult) {
                console.log("Naver login successful!");
                Toast.show({
                    text1: '네이버 로그인 성공!',
                    visibilityTime: 1500,
                    onHide: async () => {
                        props.navigation.navigate('Main');
                    },
                });
            } else {
                console.log("Naver login failed!");
                Toast.show({
                    type: 'error',
                    text1: '네이버 로그인 실패: 404',
                    visibilityTime: 1500,
                });
            }
        } catch (error) {
            console.error("An error occurred during Naver login:", error);
            Toast.show({
                type: 'error',
                text1: '네이버 로그인 실패: 502',
                visibilityTime: 1500,
            });
        }
    }

    return (
        <Modal
            visible={modalVisible}
            animationType={"fade"}
            transparent
            statusBarTranslucent
        >
            <styles.bottomOverlay>
                <styles.bottomTouch
                    onPress={closeModal}
                >
                    <styles.bottomBackground />
                </styles.bottomTouch>
                <Animated.View
                    style={{ ...styled.bottomSheetContainer, transform: [{ translateY: translateY }] }}
                    {...panResponders.panHandlers}
                >
                    <styles.kakaoButton onPress={isKakaoLogin}>
                        <styles.buttonsText>카카오로 로그인</styles.buttonsText>
                    </styles.kakaoButton>
                    <styles.naverButton onPress={isNaverLogin}>
                        <styles.buttonsText>네이버로 로그인</styles.buttonsText>
                    </styles.naverButton>
                    <styles.newClientButton>
                        <styles.newClientButtonText>다른 아이디 사용하기</styles.newClientButtonText>
                    </styles.newClientButton>
                </Animated.View>
            </styles.bottomOverlay>
            <Toast />
        </Modal>
    )
}

const styled = StyleSheet.create({
    bottomSheetContainer: {
        height: '27%',
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    }
})

export default BottomSheet;