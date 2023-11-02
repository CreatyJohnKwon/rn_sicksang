import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View, Text, StatusBar } from 'react-native';

import { default as HomeScreen } from './screens/ProfileScreen'
import { default as ProfileScreen } from './screens/ProfileScreen'
//npm install --save-dev @types/react-native-vector-icons

const Tab = createBottomTabNavigator();

function MainScreen() {

    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="white"/>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'lightgray',
                    tabBarLabelPosition: 'below-icon',
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '홈',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name={'home'} color={color} size={size} />
                        ),
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 5,
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: '프로필',
                        tabBarIcon: ({ color, size }) => (
                            <Icon name={'account'} color={color} size={size} />
                        ),
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 5,
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default MainScreen;