import { Button } from "react-bootstrap";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";

const Header = () => {
  return (
    <div className="text-center py-3 container">
      <img src={logo} alt="logo" className="py-2 img-fluid" />
      <h5>Journalism Without Fear or Favour</h5>
      <p>
        <small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
      </p>
      <div className="d-flex align-items-center justify-content-center">
        <Button variant="danger">Latest</Button>
        <Marquee className="mt-3" speed={70}>
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
    </div>
  );
};

export default Header;
