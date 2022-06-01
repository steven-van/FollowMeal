// import AsyncStorage from '@react-native-community/async-storage';
import { host } from "../config/host";


const userSignUp = async (credentials) => {
    return await fetch(`http://${host}:3000/auth/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
        })
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((err) => console.log(err));
};

const updateUserInfo = async (info) => {
    return await fetch(`http://${host}:3000/user/${info.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
        })
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((err) => console.log(err));
}