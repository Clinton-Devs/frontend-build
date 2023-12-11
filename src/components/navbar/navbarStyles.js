import styled from "styled-components";
import { devices } from "../../utils/styles/breakpoints";

const NavbarStyle = styled.nav`
  /* background-color: rgb(1, 1, 1, 0);
  height: 90px;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center; */

  display: flex;
  height: 90px;
  justify-content: space-between;
  /* padding: 15px 20px; */

  .company-logo {
    color: #2753e8;
    font-size: 20px;
    font-weight: 700;
    line-height: normal;
    background-color: #fff;
    width: 50%;
    display: flex;
    justify-content: start;
    align-items: center;
    padding-left: 8%;

    ${`@media only screen and ${devices.lg}`} {
      background-color: #f8f4f6;
    }
  }

  p {
    width: 50%;
    justify-self: center;
    display: flex;
    justify-content: end;
    align-items: center;
    padding-right: 8%;

    color: #6976a1;

    font-family: Satoshi;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.014px;
  }

  ${`@media only screen and ${devices.md}`} {
    /* Styles for small devices */
    /* padding: 27px 112px; */
  }
`;

export { NavbarStyle };
