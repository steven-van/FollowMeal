import styled from "styled-components/native";
import { GREEN, LIGHTGRAY } from "./config.js";

const NavLinkContainer = styled.Text`
  color: ${GREEN};
  font-family: "FredokaOne";
  font-size: 16px;
`;
const NavLink = ({ children, handlePress }) => {
  return <NavLinkContainer onPress={handlePress}>{children}</NavLinkContainer>;
};

export default NavLink;
