import React from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import InfoCard from "../../components/dashboard/InfoCard";
import InfoContainer from "../../components/InfoContainer";
import houseImage from "../../assets/images/image_1.png";
import houseImage2 from "../../assets/images/image_2.png";
import styled from "styled-components";
const Projects = () => {
  return (
    <div>
      <DashboardNav />
      <InfoContainer title="Ongoing Projects">
        <MyProperties>
          <InfoCard
            imgSrc={houseImage}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
        </MyProperties>
      </InfoContainer>

      <InfoContainer title="Completed Projects">
        <MyProperties>
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
          <InfoCard
            imgSrc={houseImage2}
            tagInfo="10 Units"
            link="/projects/:projectId"
          />
        </MyProperties>
        <br />
      </InfoContainer>
    </div>
  );
};

export default Projects;

const MyProperties = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 16px;
  /* justify-content: space-between; */
  /* gap: 16px; */

  @media only screen and (max-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;
