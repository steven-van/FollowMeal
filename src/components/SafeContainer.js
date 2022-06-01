import styled from "styled-components/native";
import { Platform } from "react-native";
const Container = styled.SafeAreaView`
  flex: 1;
  position: relative;
  background-color: #ffffff;
  align-items: center;
  justify-content: center;
`;
const SafeContainer = ({ children }) => {
  return (
    <Container style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}>
      {children}
    </Container>
  );
};

export default SafeContainer;
