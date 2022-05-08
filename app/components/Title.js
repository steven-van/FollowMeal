import styled from "styled-components/native";

const TextContainer = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-family: "FredokaOne";
`;

const Title = ({ children, fontSize, additionnalStyle }) => {
  return (
    <TextContainer fontSize={fontSize} style={additionnalStyle}>
      {children}
    </TextContainer>
  );
};

export default Title;
