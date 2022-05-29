import { useEffect, useState, useRef } from 'react'
import styled from "styled-components/native";
import SafeContainer from "../components/SafeContainer";
import { Text, View, Dimensions } from "react-native";
import Svg from "react-native-svg";
import { LineChart } from "react-native-chart-kit";
import { host } from "../config/host";


const User = ({route, navigation}) => {

    const userdata = route.params;
    console.log(userdata.id);
    const [meals,setMeals] = useState(null);
    const [dates,setDates] = useState(null);
    const [scores,setScores] = useState(null);
    useEffect(() => {
        async function prepare() {
            try{
                await fetch(`http://${host}:3000/user/meals/${userdata.id}`,{
                    method : "GET",
                    headers: {
                        "Content-Type": "application/json",
                    }
                })
                .then((response) => response.json())
                .then(json =>  {
                    setMeals(json)
                    var objd = [];
                    var objs = []
                    const item = json.map(e =>{
                        objd.push(e.date);
                        objs.push(e.price);
                    })
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
    },[]);

    const CreateLineChart = (props) => {
        return(
            <LineChart
    data={{
      labels:props.dates,
      datasets: [
        {
          data: props.scores
        }
      ]
    }}
    width={Dimensions.get("window").width} // from react-native
    height={220}
    yAxisLabel="Score "
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#73D28f",
      backgroundGradientFrom: "#73D28f",
      backgroundGradientTo: "#73D28f",
      decimalPlaces: 2, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "6",
        strokeWidth: "2",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
        )
    }

    console.log(meals);
    // console.log(meals[0].date);
    console.log(dates)
    if(meals ==null || dates == null || scores == null){
        return(
        <SafeContainer>

        </SafeContainer>
        )
    }

    return(
        <SafeContainer>
        <Text>
            {'bonjour ' + userdata.username}
            {"\n"}
        </Text>
        <View>
            <CreateLineChart dates = {dates} scores = {scores}/>
        </View>
        </SafeContainer>
    )
}

export default User;