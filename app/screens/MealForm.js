import { useEffect, useState, useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import styled from "styled-components/native";
import Button from "../components/Button";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { STYLE } from "../components/config.js";
import { StyleSheet, Text } from "react-native";
import { host } from "../services/host";
import { Picker, onOpen } from 'react-native-actions-sheet-picker';

const FormContainer = styled.View`
  width: 60%;
  margin-bottom: 30px;
`;

const InputContainer = styled.View`
  margin-top: 20px;
`;

const MealForm = ({ navigation }) => {

    // Picker
    const [data, setData] = useState([]);
    const [query, setQuery] = useState('');
    const [selected, setSelected] = useState(undefined);

    const [name, setName] = useState("");
    const [restaurant, setRestaurant] = useState("");
    const [price, setPrice] = useState(.0);
    const [ingredient, setIngredient] = useState([]);
    const [confirm, setConfirm] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
            await fetch(`http://${host}:3000/food/ingredient`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                console.log(json.length);
            })
            } catch (e) {
            console.warn(e);
            } 
        }
        prepare();
    }, []);

    useEffect(() => {
        ingredient.forEach(element => console.log(element.name));
    }, [ingredient]);

    const filteredData = useMemo(() => {
        if (data && data.length > 0) {
        return data.filter((item) =>
            item.name
            .toLocaleLowerCase('en')
            .includes(query.toLocaleLowerCase('en'))
        );
        }
    }, [data, query]);

    const onSearch = (text) => {
        setQuery(text);
    };

    const handleSubmit = async (data) => {
        return fetch(`http://${host}:3000/food/meal`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((json) => {console.log(json);})
        .catch((err) => console.log(err));
    };

  return (
    <SafeContainer>
      <Title fontSize={"25px"} additionnalStyle={{ marginTop: 30 }}>
        {"Ajout d'un plat"}
      </Title>
      <FormContainer>
        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Nom"}
          </InputLabel>
          <Input placeholder={"Nom du repas"} onChangeText={(text) => setName(text)} />
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Enseigne"}
          </InputLabel>
          <Input
            placeholder={"Nom de l'enseigne"}
            onChangeText={(text) => setPassword(text)}
            secureTextEntry={true}
          ></Input>
        </InputContainer>

        <InputContainer>
          <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Price"}
          </InputLabel>
          <Input
            type={"numeric"} 
            maxLength={5}
            placeholder={"Price"}
            onChangeText={(text) => setConfirm(text)}
            secureTextEntry={true}
          ></Input>
        </InputContainer>

        <InputContainer>
            <InputLabel additionnalStyle={{ marginBottom: 9 }}>
            {"Ingredients"}
            </InputLabel>
            <Text style={{ padding: 10 }}> Chosen : {JSON.stringify(selected)}</Text>
            <Button handlePress={() => { 
                onOpen('ingredient');
                }}>
                {"Ajouter un ingrédient"}
            </Button>
            <Picker
                id="ingredient"
                data={filteredData}
                inputValue={query}
                searchable={true}
                label="Select an ingredient"
                setSelected={(obj) => {
                    setIngredient([...ingredient, obj]);
                }}
                onSearch={onSearch}
            />
        </InputContainer>
        
      </FormContainer>

      <Button
        handlePress={() =>
          handleSubmit()
        }
      >
        {"Ajouter"}
      </Button>

      <StatusBar style="auto" />
    </SafeContainer>
  );
};

export default MealForm;

const styles = StyleSheet.create({
  ...STYLE,
});
