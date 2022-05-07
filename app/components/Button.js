import styled from "styled-components/native";
import { View, TouchableOpacity } from "react-native";
import { GREEN, LIGHTGRAY } from "../components/config.js";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

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

const Button = ({ children, pressLogin, additionnalStyle }) => {
  let [fontsLoaded] = useFonts({
    FredokaOne: FredokaOne_400Regular,
  });
  return (
    <View style={additionnalStyle}>
      <TouchableOpacity onPress={pressLogin}>
        <ButtonContainer>
          <ButtonText>{children}</ButtonText>
        </ButtonContainer>
      </TouchableOpacity>
    </View>
    /* <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={pressLogin}>
        <View style={[styles.button, styles.login]}>
          <Text style={styles.buttonText}>{"Se connecter"}</Text>
        </View>
      </TouchableOpacity>
    </View> */
  );
};

export default Button;
