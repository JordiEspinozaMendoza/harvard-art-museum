import { breakpoints, primaryFont, typeScale } from "utils";
import { applyStyleModifiers } from "styled-components-modifiers";
import styled from "styled-components";
const BUTTON_MODIFIERS = {
  small: () => `
        padding: 0.5rem 1rem;
        font-size: ${typeScale.helperText};
    `,
  large: () => `
        padding: 1.5rem 3rem;
        font-size: ${typeScale.header5};
    `,
};
const Button = styled.button`
  font-family: ${primaryFont};
  padding: 12px 15px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  min-width: 110px;
  font-family: ${primaryFont};
  font-size: 1rem;
  line-height: 1rem;
  letter-spacing: 0.1rem;
  border-radius: 2px;
  transition: all 0.2s linear;
`;
export const PrimaryButton = styled(Button)`
  background-color: ${(props) => props.theme.buttons.primary.background};
  color: ${(props) => props.theme.buttons.primary.color};
  border: none;
  &:hover {
    background-color: ${(props) =>
      props.theme.buttons.primary.hover.background};
    color: ${(props) => props.theme.buttons.primary.hover.color};
  }
  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;
