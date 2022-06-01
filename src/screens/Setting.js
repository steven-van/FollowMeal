import React, { useEffect } from "react";
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


const Form = styled.View`
  width: 100%;
  margin-bottom: 50px;
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
const Setting = () => {
  const {authData} = useAuth();
  const [age, setAge] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [weight, setWeight] = React.useState("");
  const [sportPerWeek, setSportPerWeek] = React.useState("");
  const [pricePerMeal, setPricePerMeal] = React.useState("");

  useEffect(() => {
    async function prepare() {
      setAge(authData.age.toString());
      setHeight(authData.height.toString());
      setWeight(authData.weight.toString());
      setSportPerWeek(authData.sports_per_week.toString());
      setPricePerMeal(authData.price_per_meal.toString());
    };
    prepare();
  }, [authData]);

 
  return (
    <SafeContainer>
      <Title
        fontSize={"24px"}
        additionnalStyle={{ width: "70%", textAlign: "center", marginTop: 20, marginBottom: 30 }}
      >
        {"Vos informations"}
      </Title>

      <Form >
        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>{"Age"}</InputLabel>
          <Input type={"numeric"} maxLength={2} placeholder={"Ex : 18"} textValue = {age} />
          <Unit>{""}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>{"Taille"}</InputLabel>
          <Input type={"numeric"} maxLength={3} placeholder={"Ex : 170"} textValue = {height}/>
          <Unit>{"cm"}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>{"Poids"}</InputLabel>
          <Input
            width={"200px"}
            type={"numeric"}
            maxLength={3}
            placeholder={"Ex : 60"}
            textValue={weight}
          />
          <Unit>{"kg"}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>
            {"Pratique sportive"}
          </InputLabel>
          <Input type={"numeric"} maxLength={1} placeholder={"Ex : 3"} textValue={sportPerWeek} />
          <Unit>{"jours / semaine"}</Unit>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={styles.inputTag}>
            {"Objectif"}
          </InputLabel>
          <Input type={"numeric"} maxLength={3} placeholder={"Ex : 18"} textValue={pricePerMeal} />
          <Unit>{"€ / repas"}</Unit>
        </InputContainer>
      </Form>

      <Button>{"Mettre à jour"}</Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default Setting;

const styles = StyleSheet.create({
  ...STYLE,
  inputTag: {
    width: 85,
    textAlign: "right",
  },
});
