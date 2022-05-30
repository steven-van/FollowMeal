import React, { useCallback, useEffect, useState } from "react";
import Login from "./app/screens/Login.js";
import User from "./app/screens/User.js";
import Icon from "react-native-vector-icons/Ionicons";
import Slider from "./app/screens/Slider.js";

import { GREEN, RED } from "./app/components/config.js";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import * as SplashScreen from "expo-splash-screen";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
import * as Font from "expo-font";
import Signup from "./app/screens/Signup.js";
import MealForm from "./app/screens/MealForm.js";


const Tab = createBottomTabNavigator();

const App = () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Roboto: Roboto_400Regular,
          FredokaOne: FredokaOne_400Regular,
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer onReady={onLayoutRootView}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Login") {
              iconName = "ios-person";
            } else if ( route.name == "User"){
              iconName = "ios-nutrition";
            } else if (route.name === "Slider") {
              iconName = "ios-search";
            } else if (route.name === "Signup") {
              iconName = "ios-person-add";
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
        <Tab.Screen name={"Login"} component={Login} />
        <Tab.Screen name={"User"} component={User}/>
        <Tab.Screen name={"Slider"} component={Slider} />
        <Tab.Screen name={"Signup"} component={Signup} />
        <Tab.Screen name={"MealForm"} component={MealForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;