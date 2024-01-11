import { Button, Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center py-3 container">
      <img src={logo} alt="logo" className="py-2 img-fluid" />
      <h5 className="text-secondary">Journalism Without Fear or Favour</h5>
      <p>
        <small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
      </p>

      {/* ============= banner ============= */}
      <div className="d-flex justify-content-center align-items-center bg-light rounded-2">
        <Button variant="danger">Latest</Button>
        <Marquee className="mt-3" speed={80}>
          <p className="me-4">
            In a major stride towards a sustainable future, a team of
            scientists....
          </p>
          <p className="me-4">
            The innovation, named EcoPowerX aims to address key challenges in
            harnessing clean energy sources....
          </p>
          <p className="me-4">
            Developed over several years in collaboration with leading
            experts....
          </p>
          <p>
            Dr. Emily Turner, lead researcher on the project, expressed
            excitement about the potential impact of EcoPowerX.We believe
            this....
          </p>
        </Marquee>
      </div>

      {/* ========================= Nav bar =================== */}
      <div className="py-4">
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav ">
              <Nav className="mx-auto">
                <Nav.Link href="#features" className="text-primary">
                  Home
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-primary">
                  About
                </Nav.Link>
                <Nav.Link href="#pricing" className="text-primary">
                  Career
                </Nav.Link>
              </Nav>
              <Nav className="d-flex justify-content-center align-items-center">
                <Nav.Link href="#deets">Profile</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                  <Button variant="primary">Login</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      {/* ====================== Nav bar =================== */}
    </div>
  );
};

export default Header;
