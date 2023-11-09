// AuthStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../styles/colors';
import LoginScreen from '../screens/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthStack = (props: any) => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: colors.white },
      }}
    >
      <Stack.Screen
        name="Login"
        options={{
          headerShown: false,
        }}
      >
        {(screenProps) => <LoginScreen {...screenProps} {...props} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthStack;
