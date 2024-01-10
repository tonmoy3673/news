import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>sm=8</Col>
          <Col lg={6}>Main Content Coming Soon</Col>
          <Col lg={3}>sm=4</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
