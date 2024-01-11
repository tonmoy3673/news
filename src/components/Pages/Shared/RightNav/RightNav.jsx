import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { Link } from "react-router-dom";

const RightNav = () => {
  return (
    <div>
      <h5 className="text-secondary text-center mb-3"> Login With</h5>
      <div className="text-center">
        <div className="mb-2">
          <Button variant="outline-primary" className="w-50">
            <FaGoogle className="me-2" />
            Google
          </Button>
        </div>
        <div>
          <Button variant="outline-success" className="w-50">
            <FaGithub className="me-2" />
            GitHub
          </Button>
        </div>
      </div>

      {/* =============== find us button ============= */}
      <div className="py-5 mb-2">
        <h5 className="text-center text-secondary">Find US On</h5>
        <ListGroup className="text-center">
          <ListGroup.Item style={{ cursor: "pointer" }}>
            <Link
              to="https://facebook.com/"
              target="_blank"
              style={{ cursor: "pointer", textDecoration: "none" }}
            >
              <FaFacebookF className="me-2" /> Facebook
            </Link>
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: "pointer" }}>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="https://twitter.com/"
              target="_blank"
            >
              <FaTwitter className="me-2" />
              Twitter
            </Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Link
              style={{ cursor: "pointer", textDecoration: "none" }}
              to="https://www.instagram.com/"
              target="_blank"
            >
              <FaInstagram className="me-2" />
              Instagram
            </Link>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
