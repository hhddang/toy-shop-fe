import { Container, ListGroup } from "react-bootstrap";
import { TOY_LIST } from "@models";
import { ToyCard } from "@components";

export default function ToyList() {
  return (
    <Container>
      <ListGroup as="div" className="d-flex flex-row flex-wrap">
        {TOY_LIST.map((toy, index) => (
          <ListGroup.Item
            as="div"
            key={index}
            className="col-4 border-0 p-2">
            <ToyCard toy={toy} />
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}
