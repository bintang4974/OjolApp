import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Register, Splash, WelcomeAuth } from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen
                name="WelcomeAuth"
                component={WelcomeAuth}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}

export default Router;