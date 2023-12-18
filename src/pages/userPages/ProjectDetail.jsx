import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import DashboardNav from "../../components/navbar/DashboardNav";
import styled from "styled-components";

import InfoContainer from "../../components/InfoContainer";
import InfoCard from "../../components/dashboard/InfoCard";
import bed from "../../assets/dashboard/bed-icon.svg";

import image3 from "../../assets/images/image_3.png";
import image4 from "../../assets/images/image_4.png";
import image5 from "../../assets/images/image_5.png";
import image6 from "../../assets/images/image_6.png";
import image3d_1 from "../../assets/images/3d_image_1.png";
import image3d_2 from "../../assets/images/3d_image_2.png";
import image3d_3 from "../../assets/images/3d_image_3.png";

import { CardsWrapper } from "./dashboardStyles";
const ProjectDetail = () => {
  const navigate = useNavigate();
  const { projectDetail } = useParams();
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

            <p>Project A</p>
          </Title>
        }
      >
        <ProjectMainImages>
          <img src={image3} alt="" className="left" />
          <img src={image4} alt="" className="right-top" />
          <img src={image5} alt="" className="right-bottom" />
        </ProjectMainImages>

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

      <InfoContainer title="Project A - 10 Units">
        <CardsWrapper>
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
          <InfoCard
            imgSrc={image6}
            tagInfo={
              <Tag>
                <img src={bed} alt="" />3
              </Tag>
            }
            link="/projects/unit-details"
          />
        </CardsWrapper>
      </InfoContainer>

      <InfoContainer title="3D Images">
        <CardsWrapper>
          <div>
            <img src={image3d_1} alt="" style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <img src={image3d_2} alt="" style={{ maxWidth: "100%" }} />
          </div>
          <div>
            <img src={image3d_3} alt="" style={{ maxWidth: "100%" }} />
          </div>
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
