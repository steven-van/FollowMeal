import { StatusBar } from "expo-status-bar";
import React from "react";
import { ICON, GREEN, LIGHTGRAY, STYLE } from "../components/config.js";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";

const Home = (props) => {
  // Login listener

  let [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
    FredokaOne: FredokaOne_400Regular,
  });

  const pressLogin = () => {
    props.navigation.navigate("Slider");
    console.log("Redirecting to Slider's screen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image style={styles.mediumIcon} source={ICON} />
      </View>

      <Text style={styles.desc}>{"Connexion"}</Text>

      <View style={styles.loginContainer}>
        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Identifiant"}</Text>

          <TextInput
            placeholder="E-mail"
            placeholderTextColor={LIGHTGRAY}
            style={styles.inputText}
          />
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Mot de passe"}</Text>
          <TextInput
            placeholder="Votre mot de passe"
            placeholderTextColor={LIGHTGRAY}
            secureTextEntry={true}
            value={"abcdefgh"}
            style={styles.inputText}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={pressLogin}>
          <View style={[styles.button, styles.login]}>
            <Text style={styles.buttonText}>{"Se connecter"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  ...STYLE,
  loginContainer: {
    width: "60%",
  },
  login: {
    marginTop: 30,
    backgroundColor: GREEN,
  },
  inputText: {
    ...STYLE.inputText,
    paddingHorizontal: 12,
    paddingVertical: 9,
  },
  input: {
    flexDirection: "column",
    marginTop: 30,
  },
  inputTag: {
    ...STYLE.inputTag,
    marginBottom: 9,
  },
  desc: {
    fontFamily: "FredokaOne",
    marginTop: 30,
    fontSize: 25,
  },
});
