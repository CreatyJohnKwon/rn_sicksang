"use strict";
exports.__esModule = true;
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var ProfileScreen_1 = require("./ProfileScreen");
var HomeScreen_1 = require("./HomeScreen");
var Stylist_1 = require("../styles/stylist/Stylist");
var colors_1 = require("../styles/colors");
var MaterialCommunityIcons_1 = require("react-native-vector-icons/MaterialCommunityIcons");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var MainScreen = function (_a) {
    var navigation = _a.navigation;
    return (React.createElement(Tab.Navigator, { initialRouteName: "Home", screenOptions: {
            headerShown: false,
            tabBarActiveTintColor: colors_1["default"].black,
            tabBarInactiveTintColor: colors_1["default"].lightgray,
            tabBarLabelPosition: 'below-icon',
            tabBarStyle: {
                height: 56
            }
        } },
        React.createElement(Tab.Screen, { name: "Home", component: HomeScreen_1["default"], options: {
                title: '홈',
                tabBarIcon: function (_a) {
                    var color = _a.color, focused = _a.focused;
                    return (React.createElement(Stylist_1["default"].tabBarIcon, null,
                        React.createElement(MaterialCommunityIcons_1["default"], { name: focused ? 'home-circle' : 'home-circle-outline', color: color, size: 24 })));
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    marginBottom: 6,
                    fontWeight: 'bold'
                }
            } }),
        React.createElement(Tab.Screen, { name: "Profile", component: ProfileScreen_1["default"], options: {
                title: '프로필',
                tabBarIcon: function (_a) {
                    var color = _a.color, focused = _a.focused;
                    return (React.createElement(Stylist_1["default"].tabBarIcon, null,
                        React.createElement(MaterialCommunityIcons_1["default"], { name: focused ? 'account-circle' : 'account-circle-outline', color: color, size: 24 })));
                },
                tabBarLabelStyle: {
                    fontSize: 15,
                    marginBottom: 6,
                    fontWeight: 'bold'
                }
            } })));
};
exports["default"] = MainScreen;
