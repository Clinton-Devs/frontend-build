import React from "react";
import Sidebar from "../../../components/dashboard/Sidebar";
import { useNavigate } from "react-router-dom";
import InfoContainer from "../../../components/InfoContainer";
import InfoCard from "../../../components/dashboard/InfoCard";
import { CardsWrapper } from "../../userPages/dashboardStyles";
import useGetAllProjects from "../../../app/services/projects/useGetAllProjects";

import { DashboardContainer } from "./AdminDashboardStyles";

import MobileAdminNav from "../../../components/navbar/MobileAdminNav";

const AdminProjects = () => {
  const navigate = useNavigate();
  const { loading, projectList } = useGetAllProjects();
  return (
    <div>
      <DashboardContainer>
        <Sidebar />
        <MobileAdminNav />
        <div>
          <InfoContainer
            title="Ongoing Projects"
            action={() => navigate("/admin-dashboard/projects/create")}
          >
            <CardsWrapper>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                projectList.map(
                  (project) =>
                    project.status === "ongoing" && (
                      <InfoCard
                        name={project.name}
                        imgSrc={project.image}
                        tagInfo="10 Units"
                        location={project.location}
                        link={`/admin-dashboard/projects/${project._id}`}
                      />
                    )
                )
              )}
            </CardsWrapper>
            <br />
          </InfoContainer>
          <InfoContainer title="Completed Projects">
            <CardsWrapper>
              {loading ? (
                <h3>Loading...</h3>
              ) : (
                projectList.map(
                  (project) =>
                    project.status === "completed" && (
                      <InfoCard
                        name={project.name}
                        imgSrc={project.image}
                        tagInfo="10 Units"
                        location={project.location}
                        link={`/admin-dashboard/projects/:projectId`}
                      />
                    )
                )
              )}
            </CardsWrapper>
            <br />
          </InfoContainer>
        </div>
      </DashboardContainer>
    </div>
  );
};

export default AdminProjects;
