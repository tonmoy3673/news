import { Card, Col, Row } from "react-bootstrap";
import ed1 from "../../../assets/editorsInsight1.png";
import ed2 from "../../../assets/editorsInsight2.png";
import ed3 from "../../../assets/editorsInsight3.png";
import { FaCalendar } from "react-icons/fa6";

const Editor = () => {
  return (
    <div>
      <h4 className="text-center text-secondary py-3">Editors Insight</h4>
      <Row xs={1} md={2} lg={3} className="g-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={ed1} />
              <Card.Text className="pt-2">
                The Most Stylish Wedding Guest Dresses For Spring.
              </Card.Text>
              <p className="text-center text-muted">
                <FaCalendar className="me-2" />
                <small>10 Jan 2024</small>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={ed2} />
              <Card.Text className="pt-2">
                This is the Most Effective News for world.
              </Card.Text>
              <p className="text-center text-muted">
                <FaCalendar className="me-2" />
                <small>14 Jan 2024</small>
              </p>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Img variant="top" src={ed3} />

              <Card.Text className="pt-2">
                This is the Most Effective News for world.
              </Card.Text>
              <p className="text-center text-muted">
                <FaCalendar className="me-2" />
                <small>14 Jan 2024</small>
              </p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Editor;
