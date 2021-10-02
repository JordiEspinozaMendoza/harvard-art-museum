//React
import React, { useEffect, useState, useReducer } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
//styled
import styled from "styled-components";

//components
import LoadingScreen from "./LoadingScreen";
import { Loader } from "components";
// reducer
import { actions } from "./actions";
import { reducer } from "./reducer";
import { initialState } from "./constants";
// !API
import { getOneImage } from "api/callApi";

var Image = styled.img`
  height: 400px;
`;
var Line = styled.p`
  display: flex;
  width: 100%;
  border-bottom: black solid 1px;
`;
var Title = styled.h2`
  border-radius: 10px;
  width: fit-content;
  padding: 10px;
`;

export default function ArtDetails() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { id } = useParams();

  const history = useHistory();
  //* state

  useEffect(() => {
    getOneImage(
      id,
      {
        REQUEST: actions.GET_ART_REQUEST,
        SUCCESS: actions.GET_ART_SUCCESS,
        FAILURE: actions.GET_ART_FAILURE,
      },
      dispatch
    );

  }, [id]);
  useEffect(() => {
    console.table(state);
  },[state]);
  if (state?.isLoaded) {
    if (state?.item === undefined) {
      return (
        <div>
          <Button
            onClick={() => {
              history.push(`/art/${parseInt(id) - 10}`);
            }}
            className="m-2"
          >
            Previous (-10)
          </Button>
          <Button
            onClick={() => {
              history.push(`/art/${parseInt(id) - 1}`);
            }}
            className="m-2"
          >
            Previous
          </Button>
          <Button
            onClick={() => {
              history.push(`/art/${parseInt(id) + 1}`);
            }}
            className="m-2"
          >
            Next
          </Button>
          <Button
            onClick={() => {
              history.push(`/art/${parseInt(id) + 10}`);
            }}
            className="m-2"
          >
            Next (+10)
          </Button>
        </div>
      );
    } else if (!state?.error) {
      const r = parseInt(state?.item.colors[0]?.color.substring(1, 3), 16);
      const g = parseInt(state?.item.colors[0]?.color.substring(3, 5), 16);
      const b = parseInt(state?.item.colors[0]?.color.substring(5, 7), 16);

      console.log(r, g, b);
      const txtWhite = r < 110 && g < 110 && b < 110;

      return (
        <div className="content">
          {state?.item && (
            <Container className="mt-2">
              <Title
                style={{
                  backgroundColor:
                    state?.item.colors && state?.item.colors[0]?.color,
                  color: txtWhite ? "#FFFFFF" : "#000000",
                }}
              >
                {state?.item.caption ? state?.item.caption : "No caption"}
              </Title>
              <Line />
              <div className="d-flex justify-content-center">
                <Image
                  key={state?.item.id}
                  src={state?.item.baseimageurl}
                  alt={state?.item.alttext}
                />
              </div>
              <div>
                <Button
                  style={{
                    backgroundColor:
                      state?.item.colors && state?.item.colors[0]?.color,
                    color: txtWhite ? "#FFFFFF" : "#000000",
                    border: "none",
                  }}
                  onClick={() => {
                    history.push(`/art/${parseInt(id) - 10}`);
                  }}
                  className="m-2"
                >
                  Previous (-10)
                </Button>
                <Button
                  style={{
                    backgroundColor:
                      state?.item.colors && state?.item.colors[0]?.color,
                    color: txtWhite ? "#FFFFFF" : "#000000",
                    border: "none",
                  }}
                  onClick={() => {
                    history.push(`/art/${parseInt(id) - 1}`);
                  }}
                  className="m-2"
                >
                  Previous
                </Button>
                <Button
                  style={{
                    backgroundColor:
                      state?.item.colors && state?.item.colors[0]?.color,
                    color: txtWhite ? "#FFFFFF" : "#000000",
                    border: "none",
                  }}
                  onClick={() => {
                    history.push(`/art/${parseInt(id) + 1}`);
                  }}
                  className="m-2"
                >
                  Next
                </Button>
                <Button
                  style={{
                    backgroundColor:
                      state?.item.colors && state?.item.colors[0]?.color,
                    color: txtWhite ? "#FFFFFF" : "#000000",
                    border: "none",
                  }}
                  onClick={() => {
                    history.push(`/art/${parseInt(id) + 10}`);
                  }}
                  className="m-2"
                >
                  Next (+10)
                </Button>
              </div>
            </Container>
          )}
        </div>
      );
    } else return <div>error: {state?.error?.message}</div>;
  } else return <Loader />;
}
