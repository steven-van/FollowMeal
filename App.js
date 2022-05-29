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
import AsyncStorage from "@react-native-async-storage/async-storage";
import { host } from "./app/config/host";
import Signup from "./app/screens/Signup.js";


const Tab = createBottomTabNavigator();

const getToken = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("auth_token");

    if (jsonValue === null) {
      console.log("No token");
      return {
        login: false,
        data: null,
      };
    } else {
      return fetch(`http://${host}:3000/auth/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: jsonValue }),
      })
        .then((response) => response.json())
        .then((json) => {
          if (json.login == true && json.data != "expired") {
            // to do, change screen to slider and passing @json.data
            //navigation.navigate('Slider', json.data);
          } else {
            AsyncStorage.removeItem("auth_token");
          }
        })
        .catch((err) => console.log(err));
    }
  } catch (e) {
    console.log("ERROR " + e);
  }
};

const App = () => {
  const [token, setToken] = useState(null);
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({
          Roboto: Roboto_400Regular,
          FredokaOne: FredokaOne_400Regular,
        });
        await getToken();
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
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;