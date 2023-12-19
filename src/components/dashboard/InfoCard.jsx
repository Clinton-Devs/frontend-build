import React from "react";
import styled from "styled-components";
import locationIcon from "../../assets/common/location-icon.svg";
import messageButton from "../../assets/dashboard/message-cta.svg";
import { Link } from "react-router-dom";

const InfoCard = ({ imgSrc, tagInfo, link, name, location, price }) => {
  return (
    <Link to={link}>
      <CardContainer>
        <div className="main-image">
          <img src={imgSrc} alt="house" />
          <div className="info-tag">{tagInfo}</div>
        </div>

        <div className="name-and-price">
          <h5>{name}</h5>
          <p>{price || "1.2m"}</p>
        </div>

        <p className="location">
          <span>
            <img src={locationIcon} alt="" style={{ marginTop: "5px" }} />
          </span>{" "}
          {location}
        </p>

        <div className="message-bar">
          <p>Clinton Properties</p>
          <img src={messageButton} alt="" />
        </div>
      </CardContainer>
    </Link>
  );
};

export default InfoCard;

const CardContainer = styled.div`
  background-color: #fff;
  max-width: 100%;
  /* margin: 0 auto; */
  padding: 16px;
  border-radius: 10px;
  box-shadow: 0px 8px 50px -4px rgba(16, 24, 40, 0.01),
    0px 20px 50px -4px rgba(16, 24, 40, 0.03),
    1px -4px 50px 4px rgba(16, 24, 40, 0.01),
    0px -10px 50px 4px rgba(0, 0, 0, 0.03);

  .main-image {
    margin-bottom: 20px;
    position: relative;
    img {
      width: 100%;
      display: block;
    }

    .info-tag {
      background-color: #fff;
      position: absolute;
      bottom: 5%;
      left: 0;
      border-radius: 0px 10px 10px 0px;
      color: #6976a1;
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.012px;
      padding: 9px 8px 8px 7px;
    }
  }

  .name-and-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 7px;

    h5,
    p {
      color: #192861;
      line-height: 30px; /* 187.5% */
    }

    h5 {
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.016px;
    }

    p {
      font-size: 12px;
      font-weight: 500;
      letter-spacing: 0.012px;
    }
  }

  .location {
    color: #192861;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 0.014px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
  }

  .message-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;

    p {
      color: #192861;
      font-size: 12px;
      font-weight: 400;
      letter-spacing: 0.012px;
    }
  }
`;
