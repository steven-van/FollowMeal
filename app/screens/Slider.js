import { StatusBar } from "expo-status-bar";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";
import styled from "styled-components/native";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import Title from "../components/Title";
import Container from "../components/Container";
import { ICON, STYLE, STORYSET } from "../components/config.js";
import { StyleSheet, Image } from "react-native";

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
  const [age, setAge] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [sportPerWeek, setSportPerWeek] = React.useState(0);
  const [goalPerMeal, setGoalPerMeal] = React.useState(0);

  /*
  _renderItem = ({item}) => {
    if (item.name == "welcome"){
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.image} source={item.icon} />
            <Text fontFamily={ROBOTO}>
              {item.description}
            </Text>
          </View>
        </View>
      );
      
    } else if (item.name == "form"){
      return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={item.icon} />
          <Text fontFamily={ROBOTO}>
            {item.description}
          </Text>
        </View>
  
        <View style={styles.form}>
          <View style={styles.input}>
            <View >
              <Text style={styles.textInput}>
                {"Age"}
              </Text>
              <Text style={styles.textInput}>
                {"Taille"}
              </Text>
              <Text style={styles.textInput}>
                {"Poids"}
              </Text>
              <Text style={styles.textInput}>
                {"Pratique sportive"}
              </Text>
              <Text style={styles.textInput}>
                {"Objectif"}
              </Text>
            </View>
            <View style={styles.inputColumn}>
              <TextInput
              placeholder="Ex : 10"
              placeholderTextColor={LIGHTGRAY}
              styles={styles.textInput}>
              </TextInput>
              <TextInput
              placeholder="Ex : 10"
              placeholderTextColor={LIGHTGRAY}
              styles={styles.textInput}>
              </TextInput>
              <TextInput
              placeholder="Ex : 10"
              placeholderTextColor={LIGHTGRAY}
              styles={styles.textInput}>
              </TextInput>
              <TextInput
              placeholder="Ex : 10"
              placeholderTextColor={LIGHTGRAY}
              styles={styles.textInput}>
              </TextInput>
              <TextInput
              placeholder="Ex : 10"
              placeholderTextColor={LIGHTGRAY}
              styles={styles.textInput}>
              </TextInput>
            </View>          
          </View>
        </View>
  
        <View style={[styles.buttonContainer, styles.width]}>
          <TouchableOpacity onPress={null}>
            <View
              style={[styles.button, styles.confirm]}
            >
              <Text>
                {"Confirm"}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
      )
    } else {
      return(
        <View style={styles.container}>
          <View style={styles.header}>
            <Image style={styles.image} source={ICON} />
            <Text>
              {"Test"}
            </Text>
          </View>
        </View>
      );
    }
  }
  */

  // return (
  //   <AppIntroSlider renderItem ={_render} data={slides}/>
  // );
  return (
    <Container>
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
    </Container>
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
