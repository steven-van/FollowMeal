import styled from "styled-components/native";
import { GREEN } from "./config.js";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

const Label = styled.Text`
  font-family: "FredokaOne";
  font-size: 20px;
  color: ${GREEN};
`;

const InputLabel = ({ children, additionnalStyle }) => {
  let [fontsLoaded] = useFonts({
    FredokaOne: FredokaOne_400Regular,
  });

  return <Label style={additionnalStyle}>{children}</Label>;
};

export default InputLabel;
