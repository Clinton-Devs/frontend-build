import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardNav from "../../components/navbar/DashboardNav";
import styled from "styled-components";

import InfoContainer from "../../components/InfoContainer";
import InfoCard from "../../components/dashboard/InfoCard";
import bed from "../../assets/dashboard/bed-icon.svg";

import useGetOneProject from "../../app/services/projects/useGetOneProject";

import { CardsWrapper } from "./dashboardStyles";
const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectId } = useParams();
  const {
    loading,
    projectDetail,
    projectImages,
    project3DImages,
    projectUnits,
  } = useGetOneProject(projectId);

  const projectImagesUrl = projectImages.map((image) => {
    return image.url;
  });

  const projectName = projectDetail[0]?.name;

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

            <p>{loading ? "---" : projectName}</p>
          </Title>
        }
      >
        <ProjectMainImages>
          <img src={projectImagesUrl[0]} alt="" className="left" />
          <img src={projectImagesUrl[1]} alt="" className="right-top" />
          <img src={projectImagesUrl[2]} alt="" className="right-bottom" />
        </ProjectMainImages>

        <Description>
          <h3>Description</h3>
          <p>{projectDetail[0]?.description}</p>
        </Description>
      </InfoContainer>

      <InfoContainer
        title={`${projectName} - ${projectUnits.length} Unit${
          projectUnits.length > 1 ? "s" : ""
        }`}
      >
        <CardsWrapper>
          {projectUnits.map((unit) => {
            return (
              <InfoCard
                name={unit.name}
                imgSrc={unit.image}
                price={unit.price}
                tagInfo={
                  <Tag>
                    <img src={bed} alt="" />
                    {unit.numberOfRooms}
                  </Tag>
                }
                link="/projects/units/:unitId"
              />
            );
          })}
        </CardsWrapper>
      </InfoContainer>

      <InfoContainer title="3D Images">
        <CardsWrapper>
          {project3DImages.map((image) => {
            return (
              <div>
                <img src={image.url} alt="" style={{ maxWidth: "100%" }} />
              </div>
            );
          })}
        </CardsWrapper>

        <Description>
          <h3>Description</h3>
          <p>{projectDetail[0]?.description}</p>
        </Description>
      </InfoContainer>
    </>
  );
};

export default ProjectDetail;

const ProjectMainImages = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  grid-template-areas:
    "left left rightTop"
    "left left rightBottom";

  padding: 24px;

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

const Tag = styled.div`
  display: flex;
  gap: 6px;
`;
