import styled from "styled-components/native";
import { RED } from "../components/config.js";

const InputContainer = styled.TextInput`
  min-width: 100px;
  font-family: "Roboto";
  font-size: 14px;
  padding: 8px 12px;
  border-radius: 50px;
  border-width: 1px;
  border-color: ${RED};
`;

const Input = ({
  placeholder,
  additionnalStyle,
  secureTextEntry = false,
  maxLength,
  onChangeText,
  type = "default",
}) => {
  return (
    <InputContainer
      placeholder={placeholder}
      style={additionnalStyle}
      maxLength={maxLength}
      keyboardType={type}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
    />
  );
};

export default Input;
