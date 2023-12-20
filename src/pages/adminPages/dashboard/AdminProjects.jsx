import React, { useState, useCallback } from "react";
import styled from "styled-components";
import Sidebar from "../../../components/dashboard/Sidebar";
import InputCommon from "../../../components/inputField/InputCommon";
import InputCommonWithIcon from "../../../components/inputField/InputCommonWithIcon";
import ButtonCommon from "../../../components/button/ButtonCommon";
import AddImages from "../../../components/dashboard/AddImages";
import uploadButton from "../../../assets/common/upload.svg";
import Spinner from "../../../assets/common/spinner.svg";
import { httpClient } from "../../../app/services/axios-https";
import env from "../../../env";
import { useDropzone } from "react-dropzone";
import Notification from "../../../components/Notification";
import toast from "react-hot-toast";

const AdminProjects = () => {
  const [projectName, setProjectName] = useState("");
  const [address, setAddress] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [creatingProject, setCreatingProject] = useState(false);
  const [projectId, setProjectId] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setCoverImage(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const createProject = () => {
    setCreatingProject(true);
    const formdata = new FormData();
    formdata.append("name", "Andre");
    formdata.append("description", description);
    formdata.append("address", address);
    formdata.append("location", location);
    formdata.append("status", "ongoing");
    // formdata.append("paymentPlan", "installment");
    formdata.append("image", coverImage);
    httpClient
      .post(`${env.clinton_homes_base_url}/admin/project`, formdata)
      .then((response) => {
        toast.success("Project Successfully Created");
        console.log(response.data.data._id);
        setProjectId(response.data.data._id);
        setCreatingProject(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "An Error Occured");
      });

    // console.log(formdata);
  };

  return (
    <>
      <DashboardContainer>
        <Notification />
        <Sidebar />

        <DashboardMain>
          <div className="navbar">
            <h4>
              <span style={{ marginRight: "40px" }}>&lt;</span> Add Project
            </h4>

            {projectId && (
              <button>
                <span>+</span>Add Unit
              </button>
            )}
          </div>
          <div style={{ margin: "24px" }}>
            {/* <DataTable
              data={data}
              columns={columns}
              customStyles={customStyles}
            /> */}

            <FormContainer>
              <InputCommon
                placeholder="Project name:"
                marginBottom="24px"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
              />
              <InputCommon
                placeholder="Description:"
                marginBottom="24px"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <InputCommon
                placeholder="Address:"
                marginBottom="24px"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
              <InputCommon
                placeholder="Location:"
                marginBottom="24px"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />

              <div {...getRootProps()}>
                <input {...getInputProps()} />
                {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <InputCommonWithIcon
                    placeholder="Cover Image"
                    icon={uploadButton}
                    marginBottom={"32px"}
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                    // onClickIcon={handleSendCode}
                  />
                )}
              </div>
              <ButtonCommon
                content={creatingProject ? <img src={Spinner} /> : "Save"}
                backgroundColor="#F8F4F6"
                textColor="#721F4B"
                marginTop="16px"
                onClick={createProject}
              />
            </FormContainer>
            {projectId && <AddImages projectId={projectId} />}
          </div>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default AdminProjects;

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

const FormContainer = styled.div`
  padding: 24px;
  background-color: rgba(255, 255, 255, 1);
  width: 70%;
  margin: 0px auto 104px auto;
`;

const ImagesContainer = styled.div`
  background-color: #fff;
  margin: 100px auto 20px auto;
  width: 80%;

  height: 300px;

  .container-header {
    display: flex;
    justify-content: space-between;
  }
`;
