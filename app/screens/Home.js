import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ICON, GREEN, LIGHTGREY} from '../components/config.js';

import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';



export default function Home(props) {

  // Login listener

  const pressLogin = () =>{
    props.navigation.navigate('Form');
    console.log("Redirecting to Form's screen");
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={ICON} />
      </View>
      <View style={[styles.buttonContainer, styles.width]}>
        <TouchableOpacity onPress={pressLogin}>
          <View
            style={[styles.button, styles.login]}
          >
            <Text>
              {"Login"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 252,
    height: 252,
  },
  button: {
    margin: 7,
    height: 50,
    backgroundColor: LIGHTGREY,
    color: "black",
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  width: {
    width: '80%',
  },
  buttonContainer: {
    marginTop: "15%",
  },
  login: {
    backgroundColor: GREEN,
  },
});
