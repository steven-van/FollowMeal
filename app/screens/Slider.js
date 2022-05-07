import { StatusBar } from "expo-status-bar";
import React from "react";
import AppIntroSlider from "react-native-app-intro-slider";

import {
  ICON,
  GREEN,
  LIGHTGRAY,
  RED,
  STYLE,
  STORYSET,
} from "../components/config.js";
import {
  TextInput,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";

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

const Slider = () => {
  let [fontsLoaded] = useFonts({
    FredokaOne: FredokaOne_400Regular,
    Roboto: Roboto_400Regular,
  });

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
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.mediumIcon} source={ICON} />
        <Text style={styles.desc}>{slides[1].description}</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Age"}</Text>
          <TextInput
            placeholder="Ex : 18"
            placeholderTextColor={LIGHTGRAY}
            style={styles.inputText}
          />
          <Text style={styles.units}>{""}</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Taille"}</Text>
          <TextInput
            placeholder="Ex : 170"
            placeholderTextColor={LIGHTGRAY}
            style={styles.inputText}
          />
          <Text style={styles.units}>{"cm"}</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Poids"}</Text>
          <TextInput
            placeholder="Ex : 60"
            placeholderTextColor={LIGHTGRAY}
            style={styles.inputText}
          />
          <Text style={styles.units}>{"kg"}</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Pratique sportive"}</Text>
          <TextInput
            placeholder="Ex : 3"
            placeholderTextColor={LIGHTGRAY}
            style={styles.inputText}
          />
          <Text style={styles.units}>{"jours / semaine"}</Text>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Objectif"}</Text>
          <TextInput
            placeholder="Ex : 10"
            placeholderTextColor={LIGHTGRAY}
            style={styles.inputText}
          />
          <Text style={styles.units}>{"€ / repas"}</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={null}>
          <View style={[styles.button, styles.confirm]}>
            <Text style={styles.buttonText}>{"Confirmer"}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Slider;

const styles = StyleSheet.create({
  ...STYLE,
  form: {
    width: "100%",
    marginBottom: 25,
  },
  desc: {
    fontFamily: "FredokaOne",
    textAlign: "center",
    width: "70%",
    fontSize: 15,
    marginTop: 25,
  },
  confirm: {
    backgroundColor: GREEN,
  },
  input: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "space-evenly",
    marginTop: 25,
  },
  inputTag: {
    ...STYLE.inputTag,
    width: 85,
    textAlign: "right",
  },
  units: {
    fontSize: 12,
    fontFamily: "FredokaOne",
    width: 60,
  },
});
