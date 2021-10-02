import { Spinner } from "react-bootstrap";
export function Loader() {
  return (
    <div className="loader_container">
      <Spinner animation="grow" />
    </div>
  );
}
