//React
import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
//styled
import styled from "styled-components";

//components
import LoadingScreen from "./LoadingScreen";
import { Loader } from "components";

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
  const { id } = useParams();

  const history = useHistory();
  //state
  const [item, setItem] = useState({});
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoaded(false);
    fetch(
      `https://api.harvardartmuseums.org/image?q=id:${id}&size=2&apikey=4f0413b4-cf20-4e70-9792-202beca9b50e`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data.records[0]);
        setItem(data.records[0]);
        setIsLoaded(true);
      })
      .catch((error) => {
        setError(error);
        setIsLoaded(true);
      });
  }, [id]);

  if (isLoaded) {
    if (item === undefined) {
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
    } else if (!error) {
      const r = parseInt(item.colors[0]?.color.substring(1, 3), 16);
      const g = parseInt(item.colors[0]?.color.substring(3, 5), 16);
      const b = parseInt(item.colors[0]?.color.substring(5, 7), 16);

      console.log(r, g, b);
      const txtWhite = r < 110 && g < 110 && b < 110;

      return (
        <div className="content">
          {item && (
            <Container className="mt-2">
              <Title
                style={{
                  backgroundColor: item.colors && item.colors[0]?.color,
                  color: txtWhite ? "#FFFFFF" : "#000000",
                }}
              >
                {item.caption ? item.caption : "No caption"}
              </Title>
              <Line />
              <div className="d-flex justify-content-center">
                <Image
                  key={item.id}
                  src={item.baseimageurl}
                  alt={item.alttext}
                />
              </div>
              <div>
                <Button
                  style={{
                    backgroundColor: item.colors && item.colors[0]?.color,
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
                    backgroundColor: item.colors && item.colors[0]?.color,
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
                    backgroundColor: item.colors && item.colors[0]?.color,
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
                    backgroundColor: item.colors && item.colors[0]?.color,
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
    } else return <div>error: {error.message}</div>;
  } else return <Loader />;
}
