import { useState } from "react";

import styled from "styled-components";
import DataTable from "react-data-table-component";

import ModalComponent from "../../components/ModalComponent";

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

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
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
      {openModal && (
        <ModalComponent open={handleOpenModal} handleClose={handleCloseModal} />
      )}
      <DashboardContainer>
        <Sidebar>
          <div className="sidebar-container">
            <h3>Clinton's Properties</h3>
            <ul>
              <li>User</li>
              <li>Projects</li>
              <li>Messages</li>
            </ul>
          </div>
        </Sidebar>
        <DashboardMain>
          <div className="navbar">
            <h4>Type: User</h4>
            <button onClick={handleOpenModal}>
              <span>+</span>Add New Project
            </button>
          </div>
          <div style={{ margin: "24px" }}>
            <DataTable
              data={data}
              columns={columns}
              customStyles={customStyles}
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
      color: #6976a1;

      text-align: justify;
      font-family: Satoshi;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.018px;
    }

    button {
      padding: 8px 14px;
      background-color: #eff2fd;
      border: none;
      color: #6976a1;

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

const Sidebar = styled.div`
  height: 100vh;
  background-color: rgba(234, 236, 240, 1);

  .sidebar-container {
    margin-top: 40px;
    margin-left: 20px;
    gap: 20px;

    h3 {
      margin-bottom: 50px;
      color: #6976a1;

      font-family: Satoshi;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    li {
      margin-bottom: 60px;
      width: 200px;
      list-style: none;
      color: #6976a1;
      text-align: justify;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      letter-spacing: 0.018px;
      padding: 12px 24px;
      border-radius: 20px;
    }

    li:hover {
      background-color: #fff;
    }
  }
`;
