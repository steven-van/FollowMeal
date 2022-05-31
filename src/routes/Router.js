import React, { useCallback, useEffect, useState } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { AuthStack } from "./src/stacks/AuthStack";
import { AppStack } from "./src/stacks/AppStack";

import * as SplashScreen from "expo-splash-screen";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
import * as Font from "expo-font";

const Router = () => {
  const [userData, setUserData] = useState(null);
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

  const getToken = useCallback(async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("auth_token");
  
      if (jsonValue === null) {;
        setUserData(null);
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
              setUserData(json.data);
            } else {
              AsyncStorage.removeItem("auth_token");
              setUserData(null);
            }
          })
          .catch((err) => console.log(err));
      }
    } catch (e) {
      console.log("ERROR " + e);
    }
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
    <NavigationContainer onReady = {onLayoutRootView}>
      {userData !== null ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Router;