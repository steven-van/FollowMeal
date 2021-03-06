import { useEffect, useState, useMemo, useContext} from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Button from "../components/Button";
import SubButton from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { STYLE } from "../components/config.js";
import { popAlert } from "../components/Alert";

import { StyleSheet } from "react-native";
import { host } from "../config/host";
// import { Picker, onOpen } from 'react-native-actions-sheet-picker';
import DropDownPicker from "react-native-dropdown-picker";


import { useAuth } from "../contexts/Auth";

const FormContainer = styled.View`
  width: 60%;
  margin-bottom: 10px;
`;

const InputContainer = styled.View`
  margin-top: 20px;
`;

const MealForm = () => {
  const auth = useAuth();

  // Picker
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [selected, setSelected] = useState(undefined);

  const [name, setName] = useState("");
  const [restaurant, setRestaurant] = useState("");
  const [price, setPrice] = useState(0.0);
  const [category, setCategory] = useState("");
  const [ingredient, setIngredient] = useState([]);

  useEffect(() => {
    async function prepare() {
      try {
        await fetch(`http://${host}:3000/food/ingredient`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((json) => {
            setData(json);
          });
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  useEffect(() => {
    console.log("Nouvelle liste d'ingrédient : ");
    ingredient.forEach((element) => console.log("  - " + element.name));
  }, [ingredient]);

  const handleSubmit = async (info) => {

    const {name, restaurant, category, ingredient} = info;

    if (name != ""
      && restaurant != ""
      && category != ""
      && ingredient.length > 0) {
      const _meal = await auth.addMeal({...info, user:auth.authData});
      console.log(_meal);
      if (_meal && _meal.response) {

        var _scoreString = "Score final : " + _meal.score.score 
                          + "\nScore nutritif : " + _meal.score.nutr_score 
                          + "\nScore budgétaire : " + _meal.score.budg_score;

        popAlert("Ajout de repas", _meal.name + ": \n" + _scoreString);
        // to update authData context to show new added meal
      } else {
        popAlert("Ajout de repas", response.message ? response.message : "Erreur de message");
      }
    } else {
      popAlert("Message", "Au moins une des informations est manquante.");
    }
  };

  const ingredientObj = useMemo(() => {
    return data.find((x) => x.id == value);
  }, [value]);

  return (
    <SafeContainer>
      <Title fontSize={"25px"}>{"Ajout d'un plat"}</Title>

      <FormContainer>
        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Nom"}
          </InputLabel>
          <Input
            placeholder={"Nom du repas"}
            onChangeText={(e) => setName(e)}
            value={name}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Enseigne"}
          </InputLabel>
          <Input
            placeholder={"Nom de l'enseigne"}
            onChangeText={(e) => setRestaurant(e)}
            value={restaurant}
          ></Input>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Categorie"}
          </InputLabel>
          <Input
            placeholder={"Categorie"}
            onChangeText={(e) => setCategory(e)}
            value={category}
          ></Input>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Price"}
          </InputLabel>
          <Input
            type={"decimal-pad"}
            maxLength={5}
            placeholder={"Price"}
            onChangeText={(e) => setPrice(e)}
            value={price}
          ></Input>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Ingredients"}
          </InputLabel>
          <DropDownPicker
            searchable={true}
            addCustomItem={true}
            searchPlaceholder="Search..."
            open={open}
            value={value}
            items={data}
            schema={{
              label: "name",
              value: "id",
            }}
            setOpen={(e) => setOpen(e)}
            setValue={(e) => setValue(e)}
            maxHeight={200}
            onChangeValue={() => {
              setSelected(ingredientObj);
            }}
          />
        </InputContainer>
      </FormContainer>

      <SubButton
        additionnalStyle={{ marginBottom: 15 }}
        handlePress={() => {
          if (selected != undefined) setIngredient([...ingredient, selected]);
        }}
      >
        {"Ajouter l'ingrédient"}
      </SubButton>

      <Button
        handlePress={() =>
          handleSubmit({ name, restaurant, category, price, ingredient })
        }
      >
        {"Ajouter"}
      </Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default MealForm;