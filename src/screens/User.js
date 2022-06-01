import { useEffect, useState, useContext, useCallback} from 'react'
import styled from "styled-components/native";
import SafeContainer from "../components/SafeContainer";
import Title from "../components/Title";
import { View, Dimensions } from "react-native";
import Svg from "react-native-svg";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { host } from "../config/host";
import Button from "../components/Button";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";

import { useAuth }from "../contexts/Auth";

const screenWidth = Dimensions.get("window").width - 30;

const User = ({navigation}) => {

    const {authData, signOut} = useAuth();

    const [dates,setDates] = useState(null);
    const [scores,setScores] = useState(null);
    const [progressData, setProgressData] = useState(null);

    const handleSignout = useCallback(async () => {
        signOut();
    }, []);

    useEffect(() => {
        async function prepare() {
            try{
                await fetch(`http://${host}:3000/user/scores/${authData.id}`,{
                    method : "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => response.json())
                .then(json =>  {
                    if (json === null || typeof(json) == undefined || json.length == 0) {
                        authData.meals = null;
                    } else {
                        var _recent = json[json.length - 1];
                        const _progress = {
                            labels:["Score nutritif", "Score budgetaire", "Score total"],
                            data:[_recent.nutr_score/100, _recent.budg_score/100, _recent.score/100],
                            colors: [
                                "rgba(222, 78, 78, 0.6)",
                                "rgba(255, 122, 0, 0.5)",
                                "rgba(115, 210, 143, 0.5)"
                            ],
                        };

                        var _dates = [];
                        var _scores = [];
                        json.forEach(e =>{
                            _dates.push(e.date);
                            _scores.push(e.score);
                        })

                        authData.meals = json;
                        setProgressData(_progress);
                        setDates(_dates);
                        setScores(_scores);
                    }

                });
            } catch (e) {
                console.warn(e);
            }
        }
        prepare();
        if(authData.meals!=null){
            CreateLineChart(dates,scores)
        }

        return () => {

        }
    },[]);

    const CreateLineChart = (props) => {
        if (props == null || typeof(props) == undefined) return null
        else return (
                <LineChart
                    data={{
                        labels:props.dates,
                        datasets: [
                            {
                                data: props.scores
                            },
                            {
                                data: [0], // min
                                withDots: false, //a flage to make it hidden
                            },
                            {
                                data: [100], // max
                                withDots: false, //a flage to make it hidden
                            },
                        ]
                    }}
                    width={screenWidth} // from react-native
                    height={220}
                    fromZero = {true}
                    // yAxisLabel="Score "
                    yAxisInterval={100} // optional, defaults to 1
                    onDataPointClick={() => {}}
                    chartConfig={{
                        backgroundColor: "#73D28f",
                        backgroundGradientFrom: "#73D28f",
                        backgroundGradientTo: "#73D28f",
                        backgroundGradientFromOpacity: 0.7,
                        backgroundGradientToOpacity: 1,
                        decimalPlaces: 2, // optional, defaults to 2dp
                        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        style: {
                            borderRadius: 16
                        },
                        propsForDots: {
                            r: "4",
                            strokeWidth: "2",
                            stroke: "#DE4E4E"
                        },
                        propsForLabels:{
                            fontSize : "10",
                        }
                    }}
        
                    bezier
                    style={{
                    marginVertical: 8,
                    borderRadius: 16
                }}
            />)
    }

    if(authData.meals == null || dates == null || scores == null || progressData == null){
        return(
        <SafeContainer>
            <Title fontSize={"26px"} additionnalStyle={{marginBottom:10}}>
                {'Bonjour ' + authData.username}
            </Title>
            <Button additionnalStyle={{marginBottom:10}}
            handlePress={() => navigation.navigate("MealForm")}>
                {"Ajouter un repas"}
            </Button>
            <Button
                handlePress={() => handleSignout()}
                >
                {"Se déconnecter"}
            </Button>
        </SafeContainer>
        )
    }

    return(
        <SafeContainer>
            <Title fontSize={"26px"} additionnalStyle={{marginBottom:10}}>
                {'Bonjour ' + authData.username}
            </Title>
            <View>
                <ProgressChart 
                data={progressData}
                width={screenWidth}
                height={170}
                strokeWidth={7}
                withCustomBarColorFromData={true}
                radius={35}
                chartConfig={{
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientToOpacity: 0,
                    backgroundColor: "#73D28f",
                    backgroundGradientFrom: "#73D28f",
                    backgroundGradientTo: "#73D28f",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1, _index) => `rgba(0,0,0,${opacity})`,
                    propsForLabels: { fontSize : "10", },
                }}
                />
            </View>
            <View>
                <CreateLineChart dates = {dates} scores = {scores}/>
            </View>
            <Button additionnalStyle={{marginBottom:10}}
            handlePress={() => navigation.navigate("MealForm")}>
                {"Ajouter un repas"}
            </Button>
            <Button handlePress={() => handleSignout()}>
                {"Se déconnecter"}
            </Button>
        </SafeContainer>
    )
}

export default User;