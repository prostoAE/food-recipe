import React, {useState} from 'react';
import AppLoading from "expo-app-loading";
import {bootstrap} from './boostrap'
import {Login, Recipe} from "./screens";
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer} from '@react-navigation/native';

import Tabs from "./navigation/tabs";

const Stack = createStackNavigator();

const App = () => {
    const [isReady, setIsReady] = useState(false);

    if (!isReady) {
        return (
            <AppLoading
                startAsync={bootstrap}
                onFinish={() => setIsReady(true)}
                onError={err => console.log(err)}
            />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Login'}
            >
                <Stack.Screen
                    name="Login"
                    component={Login}
                />
                <Stack.Screen
                    name="Home"
                    component={Tabs}
                />
                <Stack.Screen
                    name="Recipe"
                    component={Recipe}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;
