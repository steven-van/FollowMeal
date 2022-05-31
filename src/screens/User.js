import { useEffect, useState, useRef } from 'react'
import styled from "styled-components/native";
import SafeContainer from "../components/SafeContainer";
import Title from "../components/Title";
import { Text, View, Dimensions } from "react-native";
import Svg from "react-native-svg";
import { LineChart, ProgressChart } from "react-native-chart-kit";
import { host } from "../config/host";
import { FredokaOne_400Regular } from "@expo-google-fonts/fredoka-one";

const screenWidth = Dimensions.get("window").width - 30;

const User = ({route, navigation}) => {

    const userdata = route.params;
    

    const [meals,setMeals] = useState(null);
    const [dates,setDates] = useState(null);
    const [scores,setScores] = useState(null);

    const [progressData, setProgressData] = useState(null);

    useEffect(() => {

        async function prepare() {
            try{
                await fetch(`http://${host}:3000/user/scores/${userdata.id}`,{
                    method : "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => response.json())
                .then(json =>  {
                    setMeals(json)
                    
                    var recentScores = json[json.length - 1];
                    const progress = {
                        labels:["Score nutritif", "Score budgetaire", "Score total"],
                        data:[recentScores.nutr_score/100, recentScores.budg_score/100, recentScores.score/100],
                        colors: [
                            "rgba(222, 78, 78, 0.6)",
                            "rgba(255, 122, 0, 0.5)",
                            "rgba(115, 210, 143, 0.5)"
                          ],
                    };

                    var objd = [];
                    var objs = [];
                    const item = json.map(e =>{
                        objd.push(e.date);
                        objs.push(e.score);
                    })

                    setProgressData(progress);
                    setDates(objd);
                    setScores(objs);
                });


            } catch (e) {
                console.warn(e);
            }
        }
        prepare();
        if(meals!=null){
            CreateLineChart(dates,scores)
        }

        return () => {

        }
    },[]);

    const CreateLineChart = (props) => {
        return (
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
            />
    )}

    if(meals ==null || dates == null || scores == null || progressData == null){
        return(
        <SafeContainer>
            <Title fontSize={"26px"} additionnalStyle={{marginBottom:10}}>
                {'Bonjour '}
            </Title>
        </SafeContainer>
        )
    }

    return(
        <SafeContainer>
        <Title fontSize={"26px"} additionnalStyle={{marginBottom:10}}>
            {'Bonjour ' + userdata.username}
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
        </SafeContainer>
    )
}

export default User;