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
import { RED } from "../components/config.js";
import { host } from "../services/host";

const SignupContainer = styled.View`
  width: 60%;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-top: 20px;
`;

const Signup = ({ navigation }) => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const handleSignup = async (credentials) => {
    return fetch(`http://${host}:3000/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => response.json())
      .then((json) => {})
      .catch((err) => console.log(err));
  };

  return (
    <SafeContainer>
      <Image style={styles.mediumIcon} source={ICON} />

      <Title fontSize={"25px"} additionnalStyle={{ marginTop: 30 }}>
        {"Inscription"}
      </Title>
      <SignupContainer>
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

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Confirmation"}
          </InputLabel>
          <Input
            placeholder={"Confirmer le mot de passe"}
            onChangeText={(text) => setConfirm(text)}
            secureTextEntry={true}
          ></Input>
        </InputContainer>
      </SignupContainer>

      {password.length > 0 && confirm.length > 0 && confirm != password && (
        <Title
          fontSize={"12px"}
          additionnalStyle={{
            width: "70%",
            textAlign: "center",
            marginBottom: 20,
            color: RED,
          }}
        >
          {"Les mots de passe ne correspondent pas"}
        </Title>
      )}

      <Button
        handlePress={() =>
          /*handleSignup({user: user, password: password})*/ ""
        }
      >
        {"S'inscrire"}
      </Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default Signup;

const styles = StyleSheet.create({
  ...STYLE,
});
