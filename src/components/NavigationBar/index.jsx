import React from "react";
import { NavbarBrand } from "react-bootstrap";
import { NavigationBarContainer } from "./styled"; //* <-- The styled component
// ? Logos
import { logos } from "assets";

export const NavigationBar = () => {
  return (
    <NavigationBarContainer
      expand="lg"
      collapseOnSelect
      className="justify-content-center"
    >
      <NavbarBrand>
        <img src={logos.logoHarvard} alt="logo" height="50" />
        <span>Harvard Art Museum</span>
      </NavbarBrand>
    </NavigationBarContainer>
  );
};
