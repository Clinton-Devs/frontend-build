import { useState } from "react";

import styled from "styled-components";
import DataTable from "react-data-table-component";
import Sidebar from "../../../components/dashboard/Sidebar";
import MobileAdminNav from "../../../components/navbar/MobileAdminNav";
import Modal from "../../../components/dashboard/Modal";
import useGetAllUsers from "../../../app/services/projects/useGetAllUsers";
import AddUserForm from "../../../components/dashboard/AddUserForm";
import { DashboardContainer } from "./AdminDashboardStyles";
import { dashboardTableSyles } from "../../../utils/styles/tableStyles";
import editButton from "../../../assets/dashboard/EditButton.svg";
import ActionButton from "../../../components/button/ActionButton";
import TableMobile from "../../../components/dashboard/TableMobile";

const Dashboard = () => {
  const { userList, loading } = useGetAllUsers();
  const [openAddUserForm, setOpenAddUserForm] = useState(false);

  const handleOpenAddUserForm = () => {
    setOpenAddUserForm(true);
  };
  const handleCloseAddUserForm = () => {
    setOpenAddUserForm(false);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      grow: 0.2,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },

    {
      name: "Assigned Property",
      selector: (row) => "Placeholder Estate",
    },
    {
      name: "Created",
      selector: (row) => "12/12/2023",
    },

    {
      name: "",
      cell: () => (
        <div>
          <img src={editButton} alt="edit" />
        </div>
      ),
      grow: 0.5,
    },
  ];

  return (
    <>
      <Modal
        modalOpenCondition={openAddUserForm}
        headerPrimaryText="Add User"
        isFullWidth={true}
        maxWidth="sm"
        handleClose={handleCloseAddUserForm}
      >
        <AddUserForm />
      </Modal>
      <DashboardContainer>
        <Sidebar />
        <MobileAdminNav />
        <DashboardMain>
          <div className="navbar">
            <h4>Type: User</h4>
            <ActionButton
              text="Add New User"
              handleAction={handleOpenAddUserForm}
            />
          </div>
          <TableContainer>
            <DataTable
              data={userList}
              columns={columns}
              customStyles={dashboardTableSyles}
              noDataComponent={<h4>No users available</h4>}
              progressPending={loading}
            />
          </TableContainer>
          {loading ? (
            <h3 style={{ textAlign: "center" }}>Loading...</h3>
          ) : (
            <TableMobile list={userList} />
          )}
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardMain = styled.div`
  background-color: #fafafa;
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px 35px auto 35px;
    /* height: 80px; */

    h4 {
      color: #721f4b;

      text-align: justify;

      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.018px;
    }
  }
`;

const TableContainer = styled.div`
  margin: 24px;
  padding: 24px;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;
