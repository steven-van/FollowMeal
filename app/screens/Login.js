import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { ICON, STYLE } from "../components/config.js";
import { Text, StyleSheet, Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RED } from "../components/config.js";
import { host } from "../services/host";

const LoginContainer = styled.View`
  width: 60%;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-top: 30px;
`;

const storeToken = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("auth_token", jsonValue);
  } catch (e) {
    console.log(e);
  }
};

const Login = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (credentials) => {
    return fetch(`http://${host}:3000/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.login == true && json.data != "expired") {
          storeToken(json.token);
          setError("");
          navigation.navigate("Slider", json.data);
        } else {
          setError("Identifiant ou mot de passe incorrect");
        }
      })
      .catch((err) => console.log(err));
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
          <Input placeholder={"Email"} onChangeText={(text) => setUser(text)} />
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Mot de passe"}
          </InputLabel>
          <Input
            placeholder={"Mot de passe"}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          ></Input>
        </InputContainer>
      </LoginContainer>

      {error.length > 0 && (
        <Title
          fontSize={"12px"}
          additionnalStyle={{
            width: "70%",
            textAlign: "center",
            marginBottom: 20,
            color: RED,
          }}
        >
          {error}
        </Title>
      )}

      <Button
        handlePress={() => handleLogin({ user: user, password: password })}
      >
        {"Se connecter"}
      </Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default Login;

const styles = StyleSheet.create({
  ...STYLE,
});
