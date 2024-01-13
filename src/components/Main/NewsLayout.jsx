import { Col, Container, Row } from "react-bootstrap";
import Header from "../Pages/Shared/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../Pages/Shared/RightNav/RightNav";
import Footer from "../Pages/Shared/Footer";

const NewsLayout = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet />
          </Col>
          <Col lg={3}>
            <RightNav />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default NewsLayout;
