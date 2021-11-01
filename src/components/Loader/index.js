import styled from "styled-components";
import { flip } from "utils";

export function Loader() {
  const Container = styled.div`
    height: 40px;
    width: 40px;
    background-color: ${(props) => props.theme.loader.background};
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
    animation: ${flip} 1s infinite;
  `;
  return <Container className="loader_container" />;
}
