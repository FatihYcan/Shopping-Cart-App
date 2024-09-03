import { Col, ListGroup, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Placeholder from "react-bootstrap/Placeholder";
import { useProducts } from "../context/ProductProvider";

const Loading = () => {
  const { products } = useProducts();
  return (
    <Row
      xs={1}
      sm={2}
      md={3}
      lg={4}
      xl={5}
      className="g-4 mb-4 justify-content-center"
    >
      {products.map((_, i) => (
        <Col key={i}>
          <Card className="text-center">
            <Placeholder as={Card.Text} animation="glow">
              <Placeholder
                className="w-75 m-auto mt-3"
                style={{ height: "175px" }}
              />
            </Placeholder>

            <Card.Body>
              <Placeholder as={Card.Title} animation="glow">
                <Placeholder xs={5} />
              </Placeholder>
              <Placeholder as={Card.Text} animation="glow">
                <Placeholder xs={2} /> <Placeholder xs={2} />
              </Placeholder>
            </Card.Body>

            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder.Button variant="warning" xs={1} />{" "}
                  <Placeholder xs={1} />{" "}
                  <Placeholder.Button variant="success" xs={1} />
                </Placeholder>
              </ListGroup.Item>
              <ListGroup.Item>
                <Placeholder as={Card.Text} animation="glow">
                  <Placeholder.Button variant="warning" xs={2} />{" "}
                  <Placeholder.Button variant="danger" xs={3} />
                </Placeholder>
              </ListGroup.Item>
              <ListGroup.Item className="fs-5">
                <Placeholder as={Card.Title} animation="glow">
                  <Placeholder xs={5} />
                </Placeholder>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Loading;
