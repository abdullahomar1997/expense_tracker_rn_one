import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/account/screens/LoginScreen';
import SignupScreen from '../features/account/screens/SignupScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
            <Stack.Screen name="Sign-up" component={SignupScreen} options={{ headerShown: false }}/>
        </Stack.Navigator>
    );
};

export default AuthStack;
