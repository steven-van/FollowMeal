import styled from "styled-components/native";
import {
  useFonts,
  FredokaOne_400Regular,
} from "@expo-google-fonts/fredoka-one";

const TextContainer = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-family: "FredokaOne";
`;

const Title = ({ children, fontSize, additionnalStyle }) => {
  let [fontsLoaded] = useFonts({
    FredokaOne: FredokaOne_400Regular,
  });

  return (
    <TextContainer fontSize={fontSize} style={additionnalStyle}>
      {children}
    </TextContainer>
  );
};

export default Title;
