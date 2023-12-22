import { useState } from "react";

import styled from "styled-components";
import DataTable from "react-data-table-component";
import Sidebar from "../../../components/dashboard/Sidebar";
import ModalComponent from "../../../components/ModalComponent";
import Modal from "../../../components/dashboard/Modal";
import useGetAllUsers from "../../../app/services/projects/useGetAllUsers";
import AddUserForm from "../../../components/dashboard/AddUserForm";
import { dashboardTableSyles } from "../../../utils/styles/tableStyles";
import editButton from "../../../assets/dashboard/EditButton.svg";

const Dashboard = () => {
  const { userList} = useGetAllUsers();
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
      {/* {openModal && (
        <ModalComponent open={handleOpenModal} handleClose={handleCloseModal} />
      )} */}

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
        <DashboardMain>
          <div className="navbar">
            <h4>Type: User</h4>
            <button onClick={handleOpenAddUserForm}>
              <span>+</span>Add New User
            </button>
          </div>
          <div style={{ margin: "24px", padding: "24px" }}>
            <DataTable
              data={userList}
              columns={columns}
              customStyles={dashboardTableSyles}
              noDataComponent={<h4>No users available</h4>}
            />
          </div>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default Dashboard;

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
`;

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

    button {
      padding: 8px 14px;
      background-color: #f1e9ed;
      border: none;
      border-radius: 5px;
      color: #721f4b;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.016px;

      span {
        margin-right: 8px;
      }
    }
  }
`;
