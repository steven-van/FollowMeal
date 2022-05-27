import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { GREEN, LIGHTGRAY } from "../components/config.js";

const ButtonContainer = styled.View`
  background-color: ${LIGHTGRAY};
  background-color: ${GREEN};
  padding: 15px 25px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: white;
  font-family: "FredokaOne";
  font-size: 16px;
`;

const Button = ({ children, handlePress, additionnalStyle }) => {
  return (
    <View style={additionnalStyle}>
      <TouchableOpacity onPress={handlePress}>
        <ButtonContainer>
          <ButtonText>{children}</ButtonText>
        </ButtonContainer>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
