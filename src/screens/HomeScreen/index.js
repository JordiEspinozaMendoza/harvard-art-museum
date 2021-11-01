import React from "react";
// * Reducer stuff
import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";
// * Components
import {
  Loader,
  HeroHeader,
  CollectionsBanner,
  PrimaryButton,
} from "components";
// * API stuff
import { getWideImages } from "api/callApi";
import { HeaderTextColor, ParagraphTextColor, primaryFont } from "utils";
// * Styles
import "./styles.scss";
import styled from "styled-components";

const BannerContainer = styled.div`
  background-color: ${(props) => props.theme.banner.background};
  h1,
  p {
    color: ${(props) => props.theme.banner.color};
    font-family: ${primaryFont};
  }
`;
export default function HomeScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  React.useEffect(() => {
    getWideImages(
      {
        REQUEST: actions.FETCH_IMAGE_HERO_HEADER_REQUEST,
        SUCCESS: actions.FETCH_IMAGE_HERO_HEADER_SUCCESS,
        FAILURE: actions.FETCH_IMAGE_HERO_HEADER_FAILURE,
      },
      dispatch
    );
  }, []);
  if (state.heroHeader.loading || !state.heroHeader.backgroundImage) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Loader />
      </div>
    );
  } else {
    return (
      <>
        <HeroHeader
          backgroundImage={state.heroHeader.backgroundImage?.baseimageurl}
        />
        <CollectionsBanner collections={state.collections} />
        <PrimaryButton className="view_all">
          View All <span>&#8594;</span>
        </PrimaryButton>
        <BannerContainer className="banner__home">
          <div className="banner__home__text">
            <HeaderTextColor modifiers={["h2"]}>Header</HeaderTextColor>
            <ParagraphTextColor>
              Ad commodo sit dolor elit incididunt nisi ea. Nisi mollit qui
              velit quis et est excepteur nulla cupidatat irure incididunt elit
              aliqua consequat. Eu Lorem laboris labore id eu adipisicing nulla
              aute voluptate.
            </ParagraphTextColor>
          </div>

          <div className="banner__home__image">
            <img src={state.heroHeader.backgroundImage?.baseimageurl} alt="" />
          </div>
        </BannerContainer>
      </>
    );
  }
}
