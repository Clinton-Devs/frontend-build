import React from "react";
import DashboardNav from "../../components/navbar/DashboardNav";
import styled from "styled-components";
import InfoCard from "../../components/dashboard/InfoCard";
import InfoContainer from "../../components/InfoContainer";
import houseImage from "../../assets/images/image_1.png";
import houseImage2 from "../../assets/images/image_2.png";

import DataTable from "react-data-table-component";
import { CardsWrapper } from "./dashboardStyles";
import { dashboardTableSyles } from "../../utils/styles/tableStyles";

//move to services where you will fetch it from
const data = [
  {
    id: "56789",
    name: "Payment for Mintar Apartment, Lagos Nigeria",
    date: "22/02/2024",
    amount: "N3.5m",
  },
  {
    id: "56789",
    name: "Payment for Mintar Apartment, Lagos Nigeria",
    date: "22/02/2024",
    amount: "N3.5m",
  },
  {
    id: "56789",
    name: "Payment for Mintar Apartment, Lagos Nigeria",
    date: "22/02/2024",
    amount: "N3.5m",
  },
  {
    id: "56789",
    name: "Payment for Mintar Apartment, Lagos Nigeria",
    date: "22/02/2024",
    amount: "N3.5m",
  },
];

const UserDashboard = () => {
  const columns = [
    {
      name: "",
      selector: (row, index) => index + 1,
    },
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      grow: 3,
    },
    {
      name: "Date",
      selector: (row) => row.date,
    },

    {
      name: "Amount",
      selector: (row) => row.amount,
    },
  ];

  return (
    <>
      <DashboardNav />
      <Welcome>
        <h3>Welcome John</h3>
        <p>You currently have (3) properties</p>
      </Welcome>

      <InfoContainer title="My Properties">
        <CardsWrapper>
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
        </CardsWrapper>
      </InfoContainer>

      <InfoContainer title="Recent Transactions">
        <div style={{ padding: "16px", backgroundColor: "#fafafa" }}>
          <DataTable
            data={data}
            columns={columns}
            customStyles={dashboardTableSyles}
          />
        </div>
      </InfoContainer>

      <InfoContainer title="Ongoing Projects">
        <CardsWrapper>
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
        </CardsWrapper>
        <br />
      </InfoContainer>
    </>
  );
};

export default UserDashboard;

const Welcome = styled.div`
  background-color: #fafafa;
  padding: 64px 0px 40px 32px;

  h3 {
    color: #192861;
    font-size: 32px;
    font-weight: 700;
    line-height: 30px; /* 93.75% */
    letter-spacing: 0.032px;
    margin-bottom: 16px;
  }

  p {
    color: #192861;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 0.016px;
  }
`;
