import styled from "styled-components/native";
import { GREEN } from "./config.js";

const Label = styled.Text`
  font-family: "FredokaOne";
  font-size: 20px;
  color: ${GREEN};
`;

const InputLabel = ({ children, additionnalStyle }) => {
  return <Label style={additionnalStyle}>{children}</Label>;
};

export default InputLabel;
