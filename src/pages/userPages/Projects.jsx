import React from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import InfoCard from "../../components/dashboard/InfoCard";
import InfoContainer from "../../components/InfoContainer";
import { CardsWrapper } from "./dashboardStyles";

import useGetAllProjects from "../../app/services/projects/useGetAllProjects";

const Projects = () => {
  const { loading, projectList } = useGetAllProjects();
  return (
    <div>
      <DashboardNav />
      <InfoContainer title="Ongoing Projects">
        <CardsWrapper>
          {loading ? (
            <h3>Loading</h3>
          ) : (
            projectList.map(
              (project) =>
                project.status === "ongoing" && (
                  <InfoCard
                    name={project.name}
                    imgSrc={project.image}
                    tagInfo="10 Units"
                    location={project.location}
                    link={`/projects/${project._id}`}
                  />
                )
            )
          )}
        </CardsWrapper>
      </InfoContainer>

      <InfoContainer title="Completed Projects">
        <CardsWrapper>
          {loading ? (
            <h3>Loading</h3>
          ) : (
            projectList.map(
              (project) =>
                project.status === "completed" && (
                  <InfoCard
                    name={project.name}
                    imgSrc={project.image}
                    tagInfo="10 Units"
                    location={project.location}
                    link={`/projects/${project._id}`}
                  />
                )
            )
          )}
        </CardsWrapper>
        <br />
      </InfoContainer>
    </div>
  );
};

export default Projects;
