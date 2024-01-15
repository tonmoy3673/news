import { Card, Col, Row } from "react-bootstrap";
import { FaCalendar } from "react-icons/fa6";
import bg1 from "../../../../assets/1.png";
import bg2 from "../../../../assets/2.png";
import bg3 from "../../../../assets/3.png";
const Slider = () => {
  return (
    <Row lg={1} md={1} sm={1} xs={1}>
      <Col className="mx-auto">
        <Card className="mb-3">
          <Card.Body className="text-center">
            <Card.Img variant="top" src={bg1} />
            <Card.Text className="pt-2">
              The Most Stylish Wedding Guest Dresses For Spring.
            </Card.Text>
            <p className="text-center text-muted">
              <span className="me-3">Arts</span>
              <FaCalendar className="me-2" />
              <small>10 Jan 2024</small>
            </p>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <Card.Img variant="top" src={bg3} />
            <Card.Text className="pt-2">
              The Most Stylish Wedding Guest Dresses For Spring.
            </Card.Text>
            <p className="text-center text-muted">
              <span className="me-3">Sports</span>
              <FaCalendar className="me-2" />
              <small>10 Jan 2024</small>
            </p>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body>
            <Card.Img variant="top" src={bg2} />
            <Card.Text className="pt-2">
              The Most Stylish Wedding Guest Dresses For Spring.
            </Card.Text>
            <p className="text-center text-muted">
              <span className="me-3">Culture</span>
              <FaCalendar className="me-2" />
              <small>10 Jan 2024</small>
            </p>
          </Card.Body>
        </Card>
        <Card className="mb-3">
          <Card.Body className="text-center">
            <Card.Img variant="top" src={bg1} />
            <Card.Text className="pt-2">
              The Most Stylish Wedding Guest Dresses For Spring.
            </Card.Text>
            <p className="text-center text-muted">
              <span className="me-3">Arts</span>
              <FaCalendar className="me-2" />
              <small>10 Jan 2024</small>
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Img variant="top" src={bg2} />
            <Card.Text className="pt-2">
              The Most Stylish Wedding Guest Dresses For Spring.
            </Card.Text>
            <p className="text-center text-muted">
              <span className="me-3">Culture</span>
              <FaCalendar className="me-2" />
              <small>10 Jan 2024</small>
            </p>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default Slider;
