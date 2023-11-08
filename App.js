import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/authenitification/login";
import Registration from "./src/screens/authenitification/registration";
import Home from './src/screens/home'
import Splash from './src/screens/splash'

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="splash"
        // initialRouteName="login"
      >
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ title: "My home" }}
        />
        <Stack.Screen name="registration" component={Registration} />
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
