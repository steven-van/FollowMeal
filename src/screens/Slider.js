import React from "react";
import { StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

import styled from "styled-components/native";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { ICON, STYLE, STORYSET } from "../components/config.js";

import { useAuth } from "../contexts/Auth";


const slides = [
  {
    name: "welcome",
    description:
      "Suivez votre alimentation de près et" +
      "adopter un mode de vie sain et surtout pas cher !",
    icon: STORYSET,
  },
  {
    name: "form",
    description: "Veuillez renseigner les informations ci-dessous",
  },
];

const Form = styled.View`
  width: 100%;
  margin-bottom: 20px;
`;
const InputContainer = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 15px;
`;

const Unit = styled.Text`
  font-size: 12px;
  font-family: "FredokaOne";
  width: 60px;
`;
const Slider = () => {
  const auth = useAuth();
  const [age, setAge] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [sportPerWeek, setSportPerWeek] = React.useState(0);
  const [goalPerMeal, setGoalPerMeal] = React.useState(0);

 
  return (
    <SafeContainer>
      <Image style={styles.mediumIcon} source={ICON} />
      <Title
        fontSize={"15px"}
        additionnalStyle={{ width: "70%", textAlign: "center", marginTop: 20 }}
      >
        {slides[1].description}
      </Title>

      <Form>
        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>{"Age"}</InputLabel>
          <Input type={"numeric"} maxLength={2} placeholder={"Ex : 18"} />
          <Unit>{""}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>{"Taille"}</InputLabel>
          <Input type={"numeric"} maxLength={3} placeholder={"Ex : 170"} />
          <Unit>{"cm"}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>{"Poids"}</InputLabel>
          <Input
            width={"200px"}
            type={"numeric"}
            maxLength={3}
            placeholder={"Ex : 60"}
          />
          <Unit>{"kg"}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>
            {"Pratique sportive"}
          </InputLabel>
          <Input type={"numeric"} maxLength={1} placeholder={"Ex : 3"} />
          <Unit>{"jours / semaine"}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>
            {"Objectif"}
          </InputLabel>
          <Input type={"numeric"} maxLength={3} placeholder={"Ex : 18"} />
          <Unit>{"€ / repas"}</Unit>
        </InputContainer>
      </Form>

      <Button>{"Confirmer"}</Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default Slider;

const styles = StyleSheet.create({
  ...STYLE,
  inputTag: {
    width: 85,
    textAlign: "right",
  },
});
