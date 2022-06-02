// import AsyncStorage from '@react-native-community/async-storage';
import { host } from "../config/host";

const updateUser = async (info) => {
    return await fetch(`http://${host}:3000/user/${info.id}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
    })
        .then((response) => {
            return response.json();
        })
        .catch((err) => console.log(err));
};

export const userSignUp = async (credentials) => {
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

export const updateUserInfo = async (info) => {
    try {
        return await updateUser(info);
    } catch (err) {
        console.error("The Promise is rejected!", error);
    }
};
