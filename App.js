import React from 'react';
import Home from './app/screens/Home.js'
import Form from './app/screens/Form.js'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
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
}
