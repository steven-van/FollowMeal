import styled from "styled-components/native";

const TextContainer = styled.Text`
  color: ${(props) => props.textColor};
  font-family: "FredokaOne";
  font-size: ${(props) => props.fontSize};
`;
const FredokaText = ({
  children,
  textColor = "#000000",
  fontSize = "16px",
}) => {
  return (
    <TextContainer textColor={textColor} fontSize={fontSize}>
      {children}
    </TextContainer>
  );
};

export default FredokaText;
