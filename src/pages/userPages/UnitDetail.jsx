import React, { useRef } from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import styled from "styled-components";

import { useNavigate, useParams } from "react-router-dom";
import InfoContainer from "../../components/InfoContainer";
import PlayButton from "../../assets/common/play-button.svg";
import { ImageContainer } from "../adminPages/dashboard/AdminDashboardStyles";

import PayButton from "../../assets/dashboard/payElectricityButton.svg";
import messageButton from "../../assets/dashboard/message-cta.svg";

import useGetOneUnit from "../../app/services/units/useGetOneUnit";

import { CardsWrapper } from "./dashboardStyles";

const UnitDetail = () => {
  const navigate = useNavigate();
  const { unitId } = useParams();

  const { loading, unitDetail, floorPlanImages, unitVideos } =
    useGetOneUnit(unitId);

  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }

      videoElement.play();
    }
  };

  const goToMessage = () => {
    navigate("/messages", { state: { unitId: unitDetail[0]?._id } });
  };

  return (
    <>
      <DashboardNav />

      <InfoContainer
        title={
          <Title>
            <div onClick={() => navigate(-1)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M12.5 5C12.5 5 7.50001 8.68242 7.5 10C7.49999 11.3177 12.5 15 12.5 15"
                  stroke="#721F4B"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>

            <p>Unit Details</p>
          </Title>
        }
      >
        <ProjectMainImages>
          <img src={unitDetail[0]?.image} alt="" className="left" />
          <img src={unitDetail[0]?.image} alt="" className="right-top" />
          <img src={unitDetail[0]?.image} alt="" className="right-bottom" />
        </ProjectMainImages>

        <Grid>
          <OverviewContainer>
            <Overview>
              <div className="title">
                <h4>{unitDetail[0]?.name}</h4>
                <p>{unitDetail[0]?.price}</p>
              </div>

              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nulla distinctio similique ea modi sed necessitatibus nobis
                  cupiditate deserunt at suscipit.
                </p>
              </div>
            </Overview>

            <Description>
              <h3>Description</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda deserunt est provident excepturi consequatur
                necessitatibus non, iste cum voluptas amet. m ipsum dolor sit
                amet consectetur adipisicing elit. Assumenda deserunt est
                provident excepturi consequatur necessitatibus non, iste cum
                voluptas .
              </p>
            </Description>
          </OverviewContainer>

          {unitDetail[0]?.projectManager && (
            <PropertyManager>
              <div className="title">
                <h4>Property Manager</h4>
                <img src={messageButton} alt="" onClick={() => goToMessage()} />
              </div>
              <div className="detail">
                <div className="img-thumbnail">
                  <img src="" alt="" />
                </div>
                <div className="name">
                  <p>
                    {`${unitDetail[0]?.projectManager?.firstName} ${unitDetail[0]?.projectManager?.lastName}`}
                  </p>
                  <p>Property Manager</p>
                </div>
              </div>
            </PropertyManager>
          )}
        </Grid>
      </InfoContainer>

      <InfoContainer title="Payment Plan">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia
          repellendus placeat voluptatem, incidunt hic minima dolorum nobis sit
          veritatis voluptatum!
        </p>

        <div style={{ marginTop: "72px" }}>
          <img src={PayButton} alt="" />
        </div>
      </InfoContainer>

      <InfoContainer title="Floor Plan">
        <CardsWrapper>
          {floorPlanImages.length === 0 ? (
            <h3>No Images Available</h3>
          ) : (
            floorPlanImages.map((image) => {
              return (
                <div>
                  <img src={image.url} alt="" style={{ maxWidth: "100%" }} />
                </div>
              );
            })
          )}
        </CardsWrapper>

        <Description>
          <h3>Description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            deserunt est provident excepturi consequatur necessitatibus non,
            iste cum voluptas amet. m ipsum dolor sit amet consectetur
            adipisicing elit. Assumenda deserunt est provident excepturi
            consequatur necessitatibus non, iste cum voluptas .
          </p>
        </Description>
      </InfoContainer>

      <InfoContainer title="Unit Videos">
        <CardsWrapper>
          {unitVideos.length === 0 ? (
            <h3>No Video Available</h3>
          ) : (
            unitVideos.map((video) => {
              return (
                <ImageContainer>
                  <Play onClick={handleVideoClick}>
                    <img src={PlayButton} alt="play_button" />
                  </Play>
                  <video muted onClick={handleVideoClick} ref={videoRef}>
                    <source src={video.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </ImageContainer>
              );
            })
          )}
        </CardsWrapper>

        <Description>
          <h3>Description</h3>
          <p>{unitDetail[0]?.description}</p>
        </Description>
      </InfoContainer>
    </>
  );
};

export default UnitDetail;

const ProjectMainImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  grid-template-areas:
    "left left rightTop"
    "left left rightBottom";
  margin-bottom: 40px;

  .left {
    grid-area: left;
  }
  .right-top {
    grid-area: rightTop;
  }
  .right-bottom {
    grid-area: rightBottom;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  p {
    margin-bottom: 6px;
  }
`;

const Description = styled.div`
  h3 {
    margin-bottom: 16px;
  }
  p {
    color: #192861;
    font-size: 16px;
    font-weight: 400;
    line-height: 30px; /* 187.5% */
    letter-spacing: 0.016px;
  }
`;

const Grid = styled.div`
  display: flex;
  gap: 40px;
`;

const OverviewContainer = styled.div``;

const Overview = styled.div`
  margin-bottom: 40px;
  .title {
    display: flex;
    align-items: center;
    gap: 24px;
    margin-bottom: 18px;

    h4 {
      color: #192861;
      font-size: 24px;
      font-weight: 700;
      line-height: 30px; /* 125% */
      letter-spacing: 0.024px;
    }

    p {
      border-radius: 5px;
      background: #f8f4f6;
      padding: 6px 16px;
      color: #721f4b;
      font-size: 16px;
      font-weight: 500;
      letter-spacing: 0.016px;
    }
  }
`;

const PropertyManager = styled.div`
  width: 700px;
  padding: 16px;
  border-radius: 13px;
  background: #fff;
  box-shadow: 0px 8px 50px -4px rgba(16, 24, 40, 0.01),
    0px 20px 50px -4px rgba(16, 24, 40, 0.03),
    1px -4px 50px 4px rgba(16, 24, 40, 0.01),
    0px -10px 50px 4px rgba(0, 0, 0, 0.03);

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #eaecf0;
    padding-bottom: 24px;

    h4 {
      color: #192861;
      font-size: 16px;
      font-weight: 700;
      letter-spacing: 0.016px;
    }
  }

  .detail {
    display: flex;
    /* gap: 24px; */
    justify-content: space-between;
    height: 108px;
    border-radius: 7px;
    margin-top: 30px;

    .img-thumbnail {
      width: 40%;
      background-color: #eaecf0;
    }

    .name {
      margin: auto 0;
      p {
        color: #192861;
        font-size: 14px;
        font-weight: 500;
        line-height: 26px; /* 185.714% */
        letter-spacing: 0.014px;
      }
    }
  }
`;

const Play = styled.div`
  position: absolute;
  top: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  z-index: 10;
  width: 64px;
  height: 64px;
  cursor: pointer;

  :hover {
    transform: scale(1.05, 1.05);
  }
`;
