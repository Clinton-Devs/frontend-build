import { NavbarStyle } from "./navbarStyles";

import Logo from "../../assets/common/clinton_logo.svg";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="company-logo">
        <img src={Logo} alt="" />
      </div>
      <p>Log in</p>
    </NavbarStyle>
  );
};

export default Navbar;
