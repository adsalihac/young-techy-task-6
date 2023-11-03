import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./src/screens/authenitification/login";
import Registration from "./src/screens/authenitification/registration";

const StackN = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StackN.Navigator
        screenOptions={{
          headerShown: false,
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <StackN.Screen
          name="login"
          component={Login}
          options={{ title: "My home" }}
        />
        <StackN.Screen name="registration" component={Registration} />
      </StackN.Navigator>
    </NavigationContainer>
  );
};

export default App;
