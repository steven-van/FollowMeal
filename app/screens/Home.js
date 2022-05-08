import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Title from "../components/Title";
import Container from "../components/Container";
import { ICON, STYLE } from "../components/config.js";
import { StyleSheet, Image } from "react-native";

const LoginContainer = styled.View`
  width: 60%;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-top: 30px;
`;
const Home = (props) => {
  const pressLogin = () => {
    props.navigation.navigate("Slider");
    console.log("Redirecting to Slider's screen");
  };

  return (
    <Container>
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
    </Container>
  );
};

export default Home;

const styles = StyleSheet.create({
  ...STYLE,
});
