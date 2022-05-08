import React from "react";
import Home from "./app/screens/Home.js";
import Icon from "react-native-vector-icons/Ionicons";
import Slider from "./app/screens/Slider.js";
import { GRAY, GREEN } from "./app/components/config.js";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";
// import { useFonts, Roboto, FredokaOne} from '@expo-google-fonts/inter';

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  /*
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
      />
      <Stack.Screen
        name="Form"
        component={Form}
      />
      </Stack.Navigator>
    </NavigationContainer>
  );
  */
  let [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    FredokaOne: FredokaOne_400Regular,
  });

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "ios-person";
            } else if (route.name === "Slider") {
              iconName = "ios-search";
            }

            // Icon returned
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: GREEN,
          tabBarInactiveTintColor: GRAY,
          headerShown: false,
        })}
      >
        <Tab.Screen name={"Home"} component={Home} />
        <Tab.Screen name={"Slider"} component={Slider} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
