import { Navbar } from "react-bootstrap";
import styled from "styled-components";
import { breakpoints, primaryFont } from "utils";
export const NavigationBarContainer = styled(Navbar)`
  background-color: ${(props) => props.theme.navbar.background};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  font-family: ${primaryFont};
  font-size: 0.7rem;
  z-index: 1043;
  width: 100%;
  border-bottom: 4px solid #000;
  i,
  a {
    color: ${(props) => props.theme.navbar.color};
  }
  i:hover,
  a:hover {
    opacity: 0.8;
  }
  .navbar-brand {
    color: ${(props) => props.theme.navbar.color};
    transition: all 0.3s ease-in-out;
    font-size: 1rem;
    font-weight: bold;
    span {
      margin-left: 0.5rem;
      &:hover {
        opacity: 0.8;
      }
    }
    &:hover {
      cursor: pointer;
      opacity: 0.8;
      color: ${(props) => props.theme.navbar.color};
    }
  }
`;
