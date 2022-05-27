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

const storeToken = async (value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem("auth_token", jsonValue);
  } catch (e) {
    console.log("ERROR : Counldn't save token");
  }
};

const login = async(credentials) => {
  return fetch('http://127.0.0.1:3000/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
      })
      .then(response => {
        console.log(response);
        response = JSON.parse(response);
        console.log(response);
        if (response.login == true && response.data != "expired")
        {
          props.navigation.navigate('Slider', response.data);
        }
      })
      .catch(err => console.log("ERROR : " + err))
};

// Component
const Home = ({navigation}) => {
  
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const pressLogin = () => {
    login({user,password});
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
          <Input placeholder={"Email"} onChangeText={text => setUser(text)} />
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Mot de passe"}
          </InputLabel>
          <Input placeholder={"Mot de passe"} onChangeText={text => setPassword(text)} secureTextEntry={true}></Input>
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
