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
        .then((response) => response.json())
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
        .catch((err) => console.log(err));
};

export const updateUserInfo = async (info) => {
    try {
        return await updateUser(info);
    } catch (err) {
        console.error("The Promise is rejected!", error);
    }
};

export const userAddMeal = async (data) => {
    try {
        if (data) {
            return await fetch(`http://${host}:3000/food/meal`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            })
        } else {
            return {response:false, message:"Error from server"};
        }
    } catch (err) {
        console.warn(err);
    }
};