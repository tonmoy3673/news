import logo from "../../../assets/logo.png";

const Header = () => {
  return (
    <div className="text-center py-3">
      <img src={logo} alt="logo" className="py-2 img-fluid" />
      <p>Journalism Without Fear or Favour</p>
    </div>
  );
};

export default Header;
