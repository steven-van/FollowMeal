import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import User from "../screens/User.js";
import Setting from "../screens/Setting.js";
import MealForm from "../screens/MealForm.js";

import { GREEN, RED } from "../components/config.js";

const Tab = createBottomTabNavigator();

const AppStack = () => {

  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name == "User"){
            iconName = "ios-person";
        } else if (route.name === "Setting") {
            iconName = "ios-settings";
        } else if (route.name === "MealForm") {
            iconName = "ios-nutrition";
        }

        // Icon returned
        return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarStyle: {
        height: 40,
        marginHorizontal: 20,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: GREEN,
        },
        tabBarActiveTintColor: RED,
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
        tabBarShowLabel: false,
    })}
    >
      <Tab.Screen name={"User"} component={User}/>
      <Tab.Screen name={"Setting"} component={Setting} />
      <Tab.Screen name={"MealForm"} component={MealForm} />
    </Tab.Navigator>
  );
};

export default AppStack;