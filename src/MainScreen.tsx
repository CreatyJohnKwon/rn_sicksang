import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { StatusBar, View } from 'react-native';
import styles from './styles/Stylist'

import { default as HomeScreen } from './screens/HomeScreen'
import { default as ProfileScreen } from './screens/ProfileScreen'
//npm install --save-dev @types/react-native-vector-icons

const Tab = createBottomTabNavigator();

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
                    component={ HomeScreen }
                    options={{
                        title: '홈',
                        tabBarIcon: ({ color, focused }) => (
                            <View style={ styles.tabBarIcon }>
                                <MaterialCommunityIcons name={ focused ? 'home-circle' : 'home-circle-outline'} color={color} size={24} />
                            </View>
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
                    component={ ProfileScreen }
                    options={{
                        title: '프로필',
                        tabBarIcon: ({ color, focused }) => (
                            <View style={ styles.tabBarIcon }>
                                <MaterialCommunityIcons name={ focused ? 'account-circle' : 'account-circle-outline' } color={color} size={24} /> 
                            </View>
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