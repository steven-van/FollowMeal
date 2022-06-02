import { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

import styled from "styled-components/native";
import Input from "../components/Input";
import InputLabel from "../components/InputLabel";
import Button from "../components/Button";
import Title from "../components/Title";
import SafeContainer from "../components/SafeContainer";
import { RED, GREEN, STYLE } from "../components/config.js";
import { Slider } from "react-native-range-slider-expo";

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
    const auth = useAuth();

    const [message, setMessage] = useState("");
    const [messageCol, setMessageCol] = useState(RED);

    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");
    const [sportsPerWeek, setSportsPerWeek] = useState(0);
    const [pricePerMeal, setPricePerMeal] = useState("");
    const [budgRatio, setBudgRatio] = useState(0);
    const [nutrRatio, setNutrRatio] = useState(0);

    const handleUpdate = async (info) => {
        const _response = await auth.updateUser(info);
        console.log("response : ", _response);
        if (_response) {
            setMessageCol(GREEN);
            setMessage("Mis à jour");
        } else {
            setMessageCol(RED);
            setMessage("Une erreur est survenue");
        }
    };

    useEffect(() => {
        async function prepare() {
            const _data = auth.authData;
            setAge(_data.age.toString());
            setHeight(_data.height.toString());
            setWeight(_data.weight.toString());
            setPricePerMeal(_data.price_per_meal.toString());
            setSportsPerWeek(_data.sports_per_week);
            setBudgRatio(_data.budg_ratio * 10);
            setNutrRatio(_data.nutr_ratio * 10);
        }
        prepare();
    }, []);

    return (
        <SafeContainer>
            <Title
                fontSize={"24px"}
                additionnalStyle={{
                    width: "70%",
                    textAlign: "center",
                    marginTop: 20,
                    marginBottom: 30,
                }}
            >
                {"Vos informations"}
            </Title>

            <Form>
                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Age"}
                    </InputLabel>
                    <Input
                        type={"numeric"}
                        maxLength={2}
                        placeholder={"Ex : 18"}
                        onChangeText={setAge}
                        textValue={age}
                    />
                    <Unit>{""}</Unit>
                </InputContainer>

                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Taille"}
                    </InputLabel>
                    <Input
                        type={"numeric"}
                        maxLength={3}
                        placeholder={"Ex : 170"}
                        onChangeText={setHeight}
                        textValue={height}
                    />
                    <Unit>{"cm"}</Unit>
                </InputContainer>

                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Poids"}
                    </InputLabel>
                    <Input
                        width={"200px"}
                        type={"numeric"}
                        maxLength={3}
                        placeholder={"Ex : 60"}
                        onChangeText={setWeight}
                        textValue={weight}
                    />
                    <Unit>{"kg"}</Unit>
                </InputContainer>

                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Objectif"}
                    </InputLabel>
                    <Input
                        type={"numeric"}
                        maxLength={3}
                        placeholder={"Ex : 18"}
                        onChangeText={setPricePerMeal}
                        textValue={pricePerMeal}
                    />
                    <Unit>{"€ / repas"}</Unit>
                </InputContainer>

                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Pratique sportive"}
                    </InputLabel>
                    <Slider
                        styleSize={"small"}
                        min={0}
                        max={7}
                        initialValue={sportsPerWeek}
                        knobColor={RED}
                        step={1}
                        valueLabelsBackgroundColor={RED}
                        outOfRangeBarColor={GREEN}
                        valueOnChange={(value) => {
                            setSportsPerWeek(value);
                        }}
                    />

                    <Unit>{"jrs / sem"}</Unit>
                </InputContainer>

                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Importance nutritionnelle"}
                    </InputLabel>
                    <Slider
                        styleSize={"small"}
                        initialValue={nutrRatio}
                        min={0}
                        max={10}
                        knobColor={RED}
                        step={1}
                        valueLabelsBackgroundColor={RED}
                        outOfRangeBarColor={GREEN}
                        valueOnChange={(value) => {
                            setNutrRatio(value);
                        }}
                    />

                    <Unit>{""}</Unit>
                </InputContainer>
                <InputContainer>
                    <InputLabel additionnalStyle={styles.inputTag}>
                        {"Importance budgétaire"}
                    </InputLabel>
                    <Slider
                        styleSize={"small"}
                        initialValue={budgRatio}
                        min={0}
                        max={10}
                        knobColor={RED}
                        step={1}
                        valueLabelsBackgroundColor={RED}
                        outOfRangeBarColor={GREEN}
                        valueOnChange={(value) => {
                            setBudgRatio(value);
                        }}
                    />

                    <Unit>{""}</Unit>
                </InputContainer>
            </Form>

            {message.length > 0 && (
                <Title
                    fontSize={"12px"}
                    additionnalStyle={{
                        width: "70%",
                        textAlign: "center",
                        marginBottom: 20,
                        color: messageCol,
                    }}
                >
                    {message}
                </Title>
            )}

            <Button
                handlePress={() =>
                    handleUpdate({
                        id: auth.authData.id,
                        age: age,
                        height: height,
                        weight: weight,
                        sports_per_week: sportsPerWeek,
                        price_per_meal: pricePerMeal,
                        budg_ratio: budgRatio,
                        nutr_ratio: nutrRatio,
                    })
                }
            >
                {"Mettre à jour"}
            </Button>

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
