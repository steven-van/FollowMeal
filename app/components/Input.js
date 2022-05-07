import styled from "styled-components/native";
import { RED } from "../components/config.js";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const InputContainer = styled.TextInput`
  font-family: "Roboto";
  font-size: 12px;
  padding: 10px;
  border-radius: 50px;
  border-width: 1px;
  border-color: ${RED};
`;

const Input = ({ placeholder, additionnalStyle, secureTextEntry = false }) => {
  let [fontsLoaded] = useFonts({
    Roboto: Roboto_400Regular,
  });
  return (
    <InputContainer
      placeholder={placeholder}
      style={additionnalStyle}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
