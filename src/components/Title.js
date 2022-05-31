import styled from "styled-components/native";

const TitleContainer = styled.Text`
  font-size: ${(props) => props.fontSize};
  font-family: "FredokaOne";
`;

const Title = ({ children, fontSize, additionnalStyle }) => {
  return (
    <TitleContainer fontSize={fontSize} style={additionnalStyle}>
      {children}
    </TitleContainer>
  );
};

export default Title;
