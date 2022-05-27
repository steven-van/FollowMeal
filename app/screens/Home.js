import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { ICON, STYLE } from "../components/config.js";
import { StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginContainer = styled.View`
  width: 60%;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-top: 30px;
`;

const Home = (props) => {
  const [logged, setLogin] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const storeToken = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("auth_token", jsonValue);
    } catch (e) {
      console.log("ERROR : Counldn't save token");
    }
  };

  const getToken = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("auth_token");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      console.log("ERROR : Counldn't get token");
    }
  };

  const pressLogin = () => {
    props.navigation.navigate("Slider");
    console.log("Redirecting to Slider's screen");
  };

  return (
    <SafeContainer>
      <Image style={styles.mediumIcon} source={ICON} />

      <Title fontSize={"25px"} additionnalStyle={{ marginTop: 30 }}>
        {"Connexion"}
      </Title>
      <LoginContainer>
        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Identifiant"}
          </InputLabel>
          <Input placeholder={"Email"} />
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Mot de passe"}
          </InputLabel>
          <Input placeholder={"Mot de passe"} secureTextEntry={true}></Input>
        </InputContainer>
      </LoginContainer>

      <Button handlePress={pressLogin}>{"Se connecter"}</Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default Home;

const styles = StyleSheet.create({
  ...STYLE,
});
