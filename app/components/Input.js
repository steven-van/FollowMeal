import styled from "styled-components/native";
import { RED } from "../components/config.js";

const InputContainer = styled.TextInput`
  min-width: 100px;
  font-family: "Roboto";
  font-size: 12px;
  padding: 10px 12px;
  border-radius: 50px;
  border-width: 1px;
  border-color: ${RED};
`;

const Input = ({
  placeholder,
  additionnalStyle,
  secureTextEntry = false,
  maxLength,
  type = "default",
  width,
}) => {
  return (
    <InputContainer
      customWidth={width}
      placeholder={placeholder}
      style={additionnalStyle}
      maxLength={maxLength}
      keyboardType={type}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
