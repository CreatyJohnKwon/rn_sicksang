import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import SplashScreen from "react-native-splash-screen";
import AuthStack from './navigations/AuthStack';
import MainStack from './navigations/MainStack';
import colors from './styles/colors'
import UserContext from './contexts/userContent';
import storage from './controller/Store';

const TOKEN = "TOKENTOKENTOKENTOKENTOKENTOKENTOKEN";

const App = () => {
    const [user, setUser] = useState<null | any>(null);
    
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(colors.transparent);
    StatusBar.setTranslucent(true);

    const storageResult = storage.getItem(TOKEN);
    
    useEffect(() => {
        try {
            setTimeout(() => {
                setUser(storageResult);
                console.log(storageResult);
                SplashScreen.hide(); // splashscreen 닫고
            }, 1000);
        } catch (e) {
            console.log(e);
        }
    });

    return (
        <UserContext.Provider value={{ setUser }}>
            <NavigationContainer>
                {user != 'NULL' ? <MainStack /> : <AuthStack />}
            </NavigationContainer>
        </UserContext.Provider>
    );
};

export default App;
