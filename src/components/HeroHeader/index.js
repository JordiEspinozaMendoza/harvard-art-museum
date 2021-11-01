import { HeroHeaderText, ParagraphHeroHeader, primaryFont } from "utils";
import { PrimaryButton } from "components";
import styled from "styled-components";
import "./styles.scss";
export const HeroHeader = ({ backgroundImage }) => {
  const HeroHeaderContainer = styled.div`
    &:before {
      background-image: url(${backgroundImage});
    }
    h1 {
      font-family: ${primaryFont};
    }
  `;
  return (
    <HeroHeaderContainer className="hero-header">
      <div className="hero-header__container">
        <div className="hero-header__container__text">
          <HeroHeaderText
            modifiers={["heroHeader"]}
            className="hero-header__container__text__title"
          >
            Welcome to the Harvard Art Museum
          </HeroHeaderText>
        </div>
      </div>
      <PrimaryButton>Explore the collection</PrimaryButton>
    </HeroHeaderContainer>
  );
};
