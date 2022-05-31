import React from "react";
import Icon from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import User from "../screens/User.js";
import Slider from "../screens/Slider.js";
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
            iconName = "ios-nutrition";
        } else if (route.name === "Slider") {
            iconName = "ios-search";
        } else if (route.name === "MealForm") {
            iconName = "ios-pizza";
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
    <Tab.Screen name={"Slider"} component={Slider} />
    <Tab.Screen name={"MealForm"} component={MealForm} />
    </Tab.Navigator>
  );
};

export default AppStack;