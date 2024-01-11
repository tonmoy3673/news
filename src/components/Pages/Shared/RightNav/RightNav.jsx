import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

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
            <FaFacebookF className="me-2" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: "pointer" }}>
            <FaTwitter className="me-2" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item style={{ cursor: "pointer" }}>
            <FaInstagram className="me-2" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
