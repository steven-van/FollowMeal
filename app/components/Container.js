import styled from "styled-components/native";
import { Platform } from "react-native";
const SafeContainer = styled.SafeAreaView`
  flex: 1;
  background-olor: #ffffff;
  align-items: center;
  justify-content: center;
`;
const Container = ({ children }) => {
  return (
    <SafeContainer style={{ paddingTop: Platform.OS === "android" ? 25 : 0 }}>
      {children}
    </SafeContainer>
  );
};

export default Container;
