import logo from "../../../assets/logo.png";
import moment from "moment";

const Header = () => {
  return (
    <div className="text-center py-3">
      <img src={logo} alt="logo" className="py-2 img-fluid" />
      <h5>Journalism Without Fear or Favour</h5>
      <p>
        <small>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</small>
      </p>
    </div>
  );
};

export default Header;
