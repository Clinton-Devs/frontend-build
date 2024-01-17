import React, { useState } from "react";
import styled from "styled-components";
import Logo from "../../assets/common/clinton_logo_original.svg";
import debitCard from "../../assets/dashboard/debit-card-icon.svg";
import messageIcon from "../../assets/dashboard/message-icon-message.svg";
import houseIcon from "../../assets/dashboard/house-icon.svg";
import { useNavigate, useLocation } from "react-router-dom";
import env from "../../env";

const DashboardNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const user = env.getUser();
  const selectActiveMenu = (option) => {
    navigate(`/${option}`);
  };

  return (
    <>
      <Nav>
        <div
          onClick={() => selectActiveMenu("user-dashboard")}
          style={{ cursor: "pointer" }}
        >
          <img src={Logo} alt="" style={{ width: "130px" }} />
        </div>

        <div className="dashboard-menu-tray">
          <div className="menu-list">
            <div
              className="menu-item"
              onClick={() => selectActiveMenu("projects")}
            >
              <img src={houseIcon} alt="" />
              {location.pathname === "/projects" && (
                <MenuItemSelected></MenuItemSelected>
              )}
            </div>
            <div className="menu-item">
              <img src={debitCard} alt="" />
              {/* {location.pathname === "/projects" && (
                <MenuItemSelected></MenuItemSelected>
              )} */}
            </div>
            <div
              className="menu-item"
              style={{ marginRight: "32px" }}
              onClick={() => selectActiveMenu("messages")}
            >
              <img src={messageIcon} alt="" />
              {location.pathname === "/messages" && (
                <MenuItemSelected></MenuItemSelected>
              )}
            </div>
          </div>
          <p>{`${user.firstName} ${user.lastName}`}</p>
        </div>
      </Nav>
    </>
  );
};

export default DashboardNav;

const Nav = styled.nav`
  background: #fff;
  box-shadow: 0px 4px 6px -2px #f1f2f4, 0px 12px 16px -4px #f1f2f4;
  padding: 20px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  margin-bottom: 64px;

  @media only screen and (max-width: 768px) {
    padding: 0;
    margin-bottom: 20px;
  }

  .dashboard-menu-tray {
    display: flex;
    align-items: center;
    gap: 32px;

    .menu-list {
      border-right: 1px solid #e2e4ed;
      display: flex;
      gap: 24px;
      cursor: pointer;
    }

    p {
      color: #192861;
      font-size: 12px;
      font-weight: 500;
      line-height: 24px; /* 200% */
      letter-spacing: 0.012px;

      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
  }
`;

const MenuItemSelected = styled.div`
  border-bottom: 3px solid #721f4b;
  width: 45px;
  position: absolute;
  bottom: 0;
  margin-left: 8px;
`;
