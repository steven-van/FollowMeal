
import { host } from "../config/host";

const getUser = async (credentials) => {
    return await fetch(`http://${host}:3000/auth/login`, {
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
        .catch((err) => console.warn(err));
}

export const checkToken = async ({token}) => {
    return await fetch(`http://${host}:3000/auth/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
    })
        .then((response) => response.json())
        .then((json) => {
            return json;
        })
        .catch((err) => console.log(err));
}

export const userSignIn = async (credentials) => {
    try {
        return await getUser(credentials);
    } catch (err) {
        console.error("The Promise is rejected!", error);
    }
}