import { useState, useCallback, useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Image } from "react-native";

import styled from "styled-components/native";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { ICON, STYLE } from "../components/config.js";
import { RED } from "../components/config.js";

import { useAuth } from "../contexts/Auth";

const LoginContainer = styled.View`
  width: 60%;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-top: 30px;
`;

const Login = ({navigation}) => {

  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = useCallback(async (credentials) => {
    auth.signIn(credentials);
    setError("");
    setPassword("");
    setEmail("");
  }, []);

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
          <Input placeholder={"Email"} onChangeText={setEmail}  textValue={email}/>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Mot de passe"}
          </InputLabel>
          <Input
            placeholder={"Mot de passe"}
            onChangeText={setPassword}
            secureTextEntry={true}
            textValue={password}
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
        handlePress={() => navigation.navigate("Signup")}
      >
        {"S'inscrire"}
      </Button>

      <Button
        handlePress={() => handleLogin({ email: email, password: password })}
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
