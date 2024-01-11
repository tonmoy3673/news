import { Button } from "react-bootstrap";
import { FaGoogle } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";

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
            <FaFacebookF className="me-2" />
            Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
