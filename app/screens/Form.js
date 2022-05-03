import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ICON, GREEN, LIGHTGREY, ROBOTO, FREDOKAONE} from '../components/config.js';

import { TextInput, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function Home() {

  const [age, setAge] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [weight, setWeight] = React.useState(0);
  const [sportPerWeek, setSportPerWeek] = React.useState(0);
  const [goalPerMeal, setGoalPerMeal] = React.useState(0);

  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={ICON} />
        <Text>
          {"Veuillez renseigner les informations ci-dessous"}
        </Text>
      </View>

      <View>
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
            placeholderTextColor={LIGHTGREY}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Fredoka One',
  },
  image: {
    width: 126,
    height: 126,
    alignItems:'center',
  },
  button: {
    margin: 7,
    height: 50,
    backgroundColor: LIGHTGREY,
    color: "black",
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  width: {
    width: '80%',
  },
  buttonContainer: {
    marginTop: "15%",
  },
  confirm: {
    backgroundColor: GREEN,
  },
  textInput:{
    fontFamily: 'Roboto',
    color:GREEN,
  },
  input:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin:10
  },
  inputColumn:{
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: 10,
  }
});