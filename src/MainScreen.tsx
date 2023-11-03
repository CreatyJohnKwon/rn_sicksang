import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar } from 'react-native';
import styles from './styles/Stylist';
// import React, { lazy } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const Tab = createBottomTabNavigator();
// const HomeScreen = lazy(() => import('./screens/HomeScreen'));
// const ProfileScreen = lazy(() => import('./screens/ProfileScreen'));

function MainScreen() {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: 'lightgray',
                    tabBarLabelPosition: 'below-icon',
                    tabBarStyle: {
                        height: 57.5,
                    }
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '홈',
                        tabBarIcon: ({ color, focused }) => (
                            <styles.tabBarIcon>
                                <MaterialCommunityIcons name={focused ? 'home-circle' : 'home-circle-outline'} color={color} size={24} />
                            </styles.tabBarIcon>
                        ),
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 6,
                            fontWeight: 'bold',
                        },
                    }}
                />
                <Tab.Screen
                    name="Profile"
                    component={ProfileScreen}
                    options={{
                        title: '프로필',
                        tabBarIcon: ({ color, focused }) => (
                            <styles.tabBarIcon>
                                <MaterialCommunityIcons name={focused ? 'account-circle' : 'account-circle-outline'} color={color} size={24} />
                            </styles.tabBarIcon>
                        ),
                        tabBarLabelStyle: {
                            fontSize: 15,
                            marginBottom: 6,
                            fontWeight: 'bold',
                        },
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

export default MainScreen;
