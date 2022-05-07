import styled from "styled-components/native";

const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-olor: #ffffff;
  align-items: center;
  justify-content: center;
`;
const Container = ({ children }) => {
  return <SafeContainer>{children}</SafeContainer>;
};

export default Container;
