import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import Updates from "../screens/updates";
import Calls from "../screens/calls";
import Communities from "../screens/communities";
import Chats from "../screens/chats";
import Settings from "../screens/settings";

const Tab = createBottomTabNavigator();

const BottomTabComp = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Updates"
        component={Updates}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="chatbubble-ellipses-outline"
              size={24}
              color="black"
            />
          ),
          tabBarBadge: 1,
        }}
      />
      <Tab.Screen
        name="Calls"
        component={Calls}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="call-outline" size={24} color="black" />
          ),
          tabBarBadge: 2,
        }}
      />
      <Tab.Screen
        name="Communities"
        component={Communities}
        options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-group-outline" size={24} color="black" />
          ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarLabel: "Updates",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubbles-outline" size={24} color="black" />
          ),
          tabBarBadge: 99,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabComp;

const styles = StyleSheet.create({});
