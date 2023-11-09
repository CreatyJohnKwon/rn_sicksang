import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import colors from './styles/colors'
import UserContext from './contexts/userContent';

const App = () => {
    const [user, setUser] = useState<null | any>(null);
    
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(colors.transparent);
    StatusBar.setTranslucent(true);

    useEffect(() => {
        try {
            setTimeout(() => {
                SplashScreen.hide(); // splashscreen 닫고
            }, 1000);
        } catch (e) {
            console.log(e);
        }
    });

    return (
        <UserContext.Provider value={{ setUser }}>
            <NavigationContainer>
                {user ? <MainStack /> : <AuthStack />}
            </NavigationContainer>
        </UserContext.Provider>
    );
};

export default App;
