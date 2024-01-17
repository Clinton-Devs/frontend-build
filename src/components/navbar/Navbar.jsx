import { NavbarStyle } from "./navbarStyles";

import Logo from "../../assets/common/clinton_logo_original.svg";

const Navbar = () => {
  return (
    <NavbarStyle>
      <div className="company-logo">
        <img src={Logo} alt="" style={{ width: "130px" }} />
      </div>
      <p>Log in</p>
    </NavbarStyle>
  );
};

export default Navbar;
