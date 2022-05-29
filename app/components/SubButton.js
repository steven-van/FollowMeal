import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { GREEN, LIGHTGRAY } from "../components/config.js";

const ButtonContainer = styled.View`
  padding: 7px 15px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: black;
  font-family: "FredokaOne";
  font-size: 16px;
`;

const SubButton = ({ children, handlePress, additionnalStyle }) => {
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

export default SubButton;
