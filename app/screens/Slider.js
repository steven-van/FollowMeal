import { StatusBar } from 'expo-status-bar';
import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';

import {ICON, GREEN, LIGHTGRAY, RED, STYLE, STORYSET} from '../components/config.js';
import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, FredokaOne_400Regular } from '@expo-google-fonts/fredoka-one';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';

export default function Slider() {

  let [fontsLoaded] = useFonts({
    FredokaOne:FredokaOne_400Regular,
    Roboto:Roboto_400Regular
  })

  const [age, setAge] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [sportPerWeek, setSportPerWeek] = React.useState(0);
  const [goalPerMeal, setGoalPerMeal] = React.useState(0);

  const slides = [
    {
      name:"welcome",
      description:"Suivez votre alimentation de près et"+
      "adopter un mode de vie sain et surtout pas cher !",
      icon:STORYSET,
    },
    {
      name:"form",
      description:"Veuillez renseigner les informations ci-dessous",
    }
  ];

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
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.mediumIcon} source={ICON} />
        <Text style={styles.desc}>
          {slides[1].description}
        </Text>
      </View>

      <View style={styles.form}>
        
        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Age"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="Un nombre"
              placeholderTextColor={LIGHTGRAY}
              style={styles.inputText}/>
          </View>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Taille"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="En cm"
              placeholderTextColor={LIGHTGRAY}
              style={styles.inputText}/>
          </View>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Poids"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="En kg"
              placeholderTextColor={LIGHTGRAY}
              style={styles.inputText}/>
          </View>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Pratique sportive"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="Jour(s) par semaine"
              placeholderTextColor={LIGHTGRAY}
              style={styles.inputText}/>
          </View>
        </View>

        <View style={styles.input}>
          <Text style={styles.inputTag}>{"Objectif"}</Text>
          <View style={styles.inputInnerContainer}>
            <TextInput
              placeholder="Euro par repas"
              placeholderTextColor={LIGHTGRAY}
              style={styles.inputText}/>
          </View>
        </View>

      </View>

      <View style={[styles.buttonContainer, styles.buttonWidth]}>
        <TouchableOpacity onPress={null}>
          <View
            style={[styles.button, styles.confirm]}
          >
            <Text style={styles.buttonText}>
              {"Confirm"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
    )
}

const styles = StyleSheet.create({
  ...STYLE,
  form:{
    width:"100%",
  },
  desc:{
    fontFamily:'FredokaOne',
    textAlign:'center',
    width:'70%',
  },
  sliderCricle:{
    width: 40,
    height: 40,
    backgroundColor: GREEN,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirm: {
    backgroundColor: GREEN,
  },
  input:{
    flexDirection:'row',
    alignContent:'center',
    alignItems:'center',
    justifyContent:'space-evenly',
    margin:5,
  },
  inputTag:{
    ...STYLE.inputTag,
    width:'20%',
    textAlign:'right',
  }
});