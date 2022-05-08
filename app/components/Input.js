import styled from "styled-components/native";
import { RED } from "../components/config.js";

const InputContainer = styled.TextInput`
  min-width: 100px;
  font-family: "Roboto";
  font-size: 12px;
  padding: 10px;
  border-radius: 50px;
  border-width: 1px;
  border-color: ${RED};
`;

const Input = ({ placeholder, additionnalStyle, secureTextEntry = false }) => {
  return (
    <InputContainer
      placeholder={placeholder}
      style={additionnalStyle}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
