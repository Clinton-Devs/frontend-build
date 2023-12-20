import { useState } from "react";

import styled from "styled-components";
import DataTable from "react-data-table-component";
import Sidebar from "../../../components/dashboard/Sidebar";
import ModalComponent from "../../../components/ModalComponent";
import Modal from "../../../components/dashboard/Modal";
import AddUserForm from "../../../components/dashboard/AddUserForm";

const data = [
  {
    id: "56119",
    name: "Rhoda Bola",
    email: "rhoda@gmail.com",
    assignedProperty: "Inana Estate",
    created: "22/02/2024",
  },
  {
    id: "56789",
    name: "Joanna Friday",
    email: "joanna@gmail.com",
    assignedProperty: "Rhoda Bola",
    created: "22/02/2024",
  },
  {
    id: "56119",
    name: "Rhoda Bola",
    email: "rhoda@gmail.com",
    assignedProperty: "Inana Estate",
    created: "22/02/2024",
  },
  {
    id: "56789",
    name: "Joanna Friday",
    email: "joanna@gmail.com",
    assignedProperty: "Rhoda Bola",
    created: "22/02/2024",
  },
  {
    id: "56119",
    name: "Rhoda Bola",
    email: "rhoda@gmail.com",
    assignedProperty: "Inana Estate",
    created: "22/02/2024",
  },
  {
    id: "56789",
    name: "Joanna Friday",
    email: "joanna@gmail.com",
    assignedProperty: "Rhoda Bola",
    created: "22/02/2024",
  },
];

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);

  const [openAddUserForm, setOpenAddUserForm] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

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
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "EMAIL",
      selector: (row) => row.email,
    },

    {
      name: "Assigned Property",
      selector: (row) => row.assignedProperty,
    },
    {
      name: "Created",
      selector: (row) => row.created,
    },

    {
      name: "",
      cell: () => <p>Edit</p>,
    },
  ];

  const customStyles = {
    table: {
      style: {
        border: "none",
        position: "relative",
      },
    },
    rows: {
      style: {
        minHeight: "72px", // override the row height
        // fontFamily: "DM Sans",
        fontSize: "16px",
        fontWeight: "400",
        color: "#6976A1",
        borderBottom: "8px solid rgba(239, 242, 253, 1)!important",
      },
    },
    headCells: {
      style: {
        padding: "30px 10px 30px 10px",
        backgroundColor: "#FFF",
        // fontFamily: "DM Sans",
        fontSize: "14px",
        fontWeight: "500",
        color: "#2B3241",
        borderBottom: "24px solid rgba(239, 242, 253, 1)!important",
      },
    },
    cells: {
      style: {
        paddingLeft: "10px", // override the cell padding for data cells
        paddingRight: "10px",
        minWidth: "100px",
      },
    },
  };

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
          <div style={{ margin: "24px" }}>
            {/* <DataTable
              data={data}
              columns={columns}
              customStyles={customStyles}
            /> */}

            <h4 style={{ textAlign: "center", color: "#721F4B" }}>
              No users available
            </h4>
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
      background-color: #f8f4f6;
      border: none;
      color: #721f4b;

      font-family: Satoshi;
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
