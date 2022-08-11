import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import Login from '../screens/Login/Login';
import {Routes} from './routes';

const Stack = createStackNavigator();

const theme = {
    ...DefaultTheme,
    color: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

const Navigation = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                screenOptions={{headerShown: false}}
                initialRouteName={Routes.login.path}>
                <Stack.Screen name={Routes.login.path} component={Login} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
