import { Alert } from "react-native";

export const popAlert = (title, message) => Alert.alert(
    title,
    message,
    [
        {
            text:"Ok",
            style:"cancel"
        }
    ]
);