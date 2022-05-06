import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ICON, GREEN, LIGHTGRAY, STYLE} from '../components/config.js';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular} from '@expo-google-fonts/roboto';
import { FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';


export default function Home(props) {

  // Login listener

  let [fontsLoaded] = useFonts({
    Roboto:Roboto_400Regular,
    FredokaOne:FredokaOne_400Regular,
  });

  const pressLogin = () =>{
    props.navigation.navigate('Slider');
    console.log("Redirecting to Slider's screen");
  }

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.bigIcon} source={ICON} />
      </View>

      <View style={styles.loginContainer}>
        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Identifiant"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={LIGHTGRAY}
              style={styles.inputText}/>
          </View>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Mot de passe"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="Votre mot de passe"
              placeholderTextColor={LIGHTGRAY}
              secureTextEntry={true}
              value={"abcdefgh"}
              style={styles.inputText}/>
          </View>
        </View>
      </View>

      <View style={[styles.buttonContainer, styles.buttonWidth]}>
        <TouchableOpacity onPress={pressLogin}>
          <View
            style={[styles.button, styles.login]}
          >
            <Text style={styles.buttonText}>
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
  ...STYLE,
  loginContainer:{
    marginTop:"10%",
    width:'80%',
  },
  login: {
    backgroundColor: GREEN,
  },
  inputText:{
    ...STYLE.inputText,
    paddingHorizontal:10,
    paddingVertical:5,
  },
  input:{
    flexDirection:'column',
    justifyContent:'space-around',
    margin:"7%",
  },
  inputTag:{
    ...STYLE.inputTag,
    textAlign:'left',
    margin:"2%",
  },
});
