import styled from "styled-components/native";
import { GREEN } from "./config.js";

const InputLabelContainer = styled.Text`
  font-family: "FredokaOne";
  font-size: 20px;
  color: ${GREEN};
`;

const InputLabel = ({ children, additionnalStyle }) => {
  return <InputLabelContainer style={additionnalStyle}>{children}</InputLabelContainer>;
};

export default InputLabel;
