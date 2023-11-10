import { useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CommonType } from './types';
import { StatusBar } from 'react-native';
import colors from '../styles/colors'
import storage from '../controller/Store';
import SplashScreen from 'react-native-splash-screen';
import LoginScreen from '../screens/LoginScreen';
import MainScreen from '../screens/MainScreen';

const TOKEN = "TOKENTOKENTOKENTOKENTOKENTOKENTOKEN";

const StackNavigation = () => {

    // const [user, setUser] = useState<any>(null);
    const Stack = createStackNavigator<CommonType.RootStackPageList>();
    const storageResult: any = storage.getItem(TOKEN);
    console.log(storageResult);

    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1000);
    });

    return (
        <NavigationContainer>
            <StatusBar barStyle={'dark-content'} backgroundColor={colors.transparent} translucent={true}/>
            <Stack.Navigator initialRouteName={storageResult == 'NULL' ? "Login" : "Main"} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Login">
                    {(props) => <LoginScreen {...props} />}
                </Stack.Screen>
                <Stack.Screen name="Main">
                    {(props) => <MainScreen {...props} />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer >
    )
}
export default StackNavigation;