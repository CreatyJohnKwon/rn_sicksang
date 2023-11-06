import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles/Stylist';
// import React, { lazy } from 'react';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import { StatusBar } from 'react-native';
import colors from './styles/colors';

const Tab = createBottomTabNavigator();

function MainScreen() {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor(colors.lightgray);

    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: colors.black,
                    tabBarInactiveTintColor: colors.lightgray,
                    tabBarLabelPosition: 'below-icon',
                    tabBarStyle: {
                        height: 56,
                    }
                }}>
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        title: '홈',
                        tabBarIcon: ({ color, focused }) => (
                            <styles.tabBarIcon>
                                <MaterialCommunityIcons
                                    name={focused ? 'home-circle' : 'home-circle-outline'}
                                    color={color}
                                    size={24} />
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
                                <MaterialCommunityIcons
                                    name={focused ? 'account-circle' : 'account-circle-outline'}
                                    color={color}
                                    size={24} />
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
        </NavigationContainer>
    );
}

export default MainScreen;
