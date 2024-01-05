import React, { useState, useCallback, useRef } from "react";
import env from "../../../env";
import { http, httpCloudinary } from "../../../app/services/axios-https";
import Spinner from "../../../assets/common/spinner.svg";
import { useNavigate, useParams } from "react-router-dom";
import DataTable from "react-data-table-component";
import ProjectUnitTable from "../../../components/dashboard/TableMobile/ProjectUnitTable";
import {
  DashboardContainer,
  DashboardMain,
  Title,
  FormContainer,
  ImageContainer,
  AddImagesContainer,
  TableContainer,
} from "./AdminDashboardStyles";
import AddUnitVideos from "../../../components/dashboard/AddUnitVideos";
import { CardsWrapper } from "../../userPages/dashboardStyles";
import editButton from "../../../assets/dashboard/EditButton.svg";
import ActionButton from "../../../components/button/ActionButton";
import uploadButton from "../../../assets/common/upload.svg";
import Notification from "../../../components/Notification";
import toast from "react-hot-toast";
import Sidebar from "../../../components/dashboard/Sidebar";
import InputCommon from "../../../components/inputField/InputCommon";
import TextArea from "../../../components/inputField/TextArea";
import ButtonCommon from "../../../components/button/ButtonCommon";
import useGetOneUnit from "../../../app/services/projects/useGetOneUnit";
import useGetUnitUser from "../../../app/services/projects/useGetUnitUser";
import useGetAllTransactions from "../../../app/services/projects/useGetAllTransactions";
import { useDropzone } from "react-dropzone";
import InputCommonWithIcon from "../../../components/inputField/InputCommonWithIcon";
import MobileAdminNav from "../../../components/navbar/MobileAdminNav";
import { dashboardTableSyles } from "../../../utils/styles/tableStyles";

const AdminUnitDetails = () => {
  const navigate = useNavigate();
  const { unitId } = useParams();
  const { loading, unitDetail, floorPlanImages, unitVideos } =
    useGetOneUnit(unitId);
  const { userLoading, userDetail } = useGetUnitUser(unitId);
  const { transactionLoading, transactionList } = useGetAllTransactions();

  const [readOnly, setReadOnly] = useState(true);
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState("");

  const [newUnitName, setNewUnitName] = useState("");
  const [newNoOfRooms, setNewNoOfRooms] = useState("");
  const [newNoOfBathRooms, setNewNoOfBathRooms] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newPaymentPlan, setNewPaymentPlan] = useState("");
  const [updatingUnit, setUpdatingUnit] = useState(false);

  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;

    if (videoElement) {
      if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
      } else if (videoElement.mozRequestFullScreen) {
        videoElement.mozRequestFullScreen();
      } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
      } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
      }

      videoElement.play();
    }
  };

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setCoverImage(acceptedFiles[0]);

    const formdata = new FormData();
    formdata.append("file", acceptedFiles[0]);
    formdata.append("upload_preset", env.cloudinary_upload_preset);
    formdata.append("cloud_name", env.cloudinary_cloud_name);
    formdata.append("folder", "Cloudinary-ClintonDevs");

    httpCloudinary
      .post(
        `https://api.cloudinary.com/v1_1/${env.cloudinary_cloud_name}/image/upload`,
        formdata
      )
      .then((response) => {
        setCoverImageUrl(response.data.url);
        toast.success("Image uploaded");
      })
      .catch((error) =>
        toast.error(error.response.data.message || "Image upload error")
      );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const updateUnit = () => {
    setUpdatingUnit(true);
    const formdata = {
      name: newUnitName,
      numberOfRooms: parseInt(newNoOfRooms),
      numberOfBathRooms: parseInt(newNoOfBathRooms),
      price: parseInt(newPrice),
      paymentPlan: newPaymentPlan,
      image: coverImageUrl,
    };
    http
      .put(
        `${env.clinton_homes_base_url}/admin/unit/${unitId}/update-unit`,
        formdata
      )
      .then((response) => {
        toast.success("Unit Successfully Updated");
        setUpdatingUnit(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "An Error Occured");
        setUpdatingUnit(false);
      });

    // console.log(formdata);
  };

  return (
    <>
      <DashboardContainer>
        <Notification />
        <Sidebar />
        <MobileAdminNav />
        <DashboardMain>
          <div className="navbar">
            {" "}
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

              <h4>Unit Details</h4>
            </Title>
            {unitId && (
              <div
                onClick={() => setReadOnly(false)}
                style={{ cursor: "pointer" }}
              >
                <img src={editButton} alt="" />
              </div>
            )}
          </div>

          <FormContainer>
            <InputCommon
              placeholder={`Name: ${
                loading ? "fetching..." : unitDetail[0]?.name
              }`}
              marginBottom="24px"
              disabled={readOnly}
              value={newUnitName}
              onChange={(e) => setNewUnitName(e.target.value)}
            />
            <InputCommon
              placeholder={`Number of Rooms: ${
                loading ? "fetching..." : unitDetail[0]?.numberOfRooms
              }`}
              marginBottom="24px"
              disabled={readOnly}
              value={newNoOfRooms}
              onChange={(e) => setNewNoOfRooms(e.target.value)}
            />
            <InputCommon
              placeholder={`Number of Bathrooms: ${
                loading ? "fetching..." : unitDetail[0]?.numberOfBathRooms
              }`}
              marginBottom="24px"
              disabled={readOnly}
              value={newNoOfBathRooms}
              onChange={(e) => setNewNoOfBathRooms(e.target.value)}
            />

            <InputCommon
              placeholder={`Price: ${
                loading ? "fetching..." : unitDetail[0]?.price
              }`}
              marginBottom="24px"
              value={newPrice}
              onChange={(e) => setNewPrice(e.target.value)}
            />
            <InputCommon
              placeholder={`Payment Plan: ${
                loading ? "fetching..." : unitDetail[0]?.paymentPlan
              }`}
              marginBottom="24px"
              value={newPaymentPlan}
              onChange={(e) => setNewPaymentPlan(e.target.value)}
            />

            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Drop the files here ...</p>
              ) : (
                <InputCommonWithIcon
                  placeholder={coverImage ? coverImage.name : "Upload Image"}
                  icon={uploadButton}
                  marginBottom={"32px"}
                />
              )}
            </div>
            <div style={{ textAlign: "end" }}>
              <ButtonCommon
                content={updatingUnit ? <img src={Spinner} /> : "Save"}
                backgroundColor="#F8F4F6"
                textColor="#721F4B"
                marginTop="16px"
                onClick={updateUnit}
                width="20%"
              />
            </div>
          </FormContainer>

          {userDetail.length > 0 && (
            <FormContainer>
              <h4>User</h4>
              <InputCommon
                placeholder={`Name: ${
                  loading
                    ? "fetching..."
                    : `${userDetail[0].ownerId.firstName} ${userDetail[0].ownerId.lastName}`
                }`}
                marginBottom="24px"
                disabled={readOnly}
                value={newUnitName}
                onChange={(e) => setNewUnitName(e.target.value)}
              />
              <InputCommon
                placeholder={`Email: ${
                  loading ? "fetching..." : userDetail[0].ownerId.email
                }`}
                marginBottom="24px"
                disabled={readOnly}
                value={newNoOfRooms}
                onChange={(e) => setNewNoOfRooms(e.target.value)}
              />
              <InputCommon
                placeholder={`Price Paid: ${
                  loading ? "fetching..." : userDetail[0].pricePaid
                }`}
                marginBottom="24px"
                disabled={readOnly}
                value={newNoOfBathRooms}
                onChange={(e) => setNewNoOfBathRooms(e.target.value)}
              />

              <InputCommon
                placeholder={`New Price Paid: ${
                  loading ? "fetching..." : userDetail[0].recentPayment
                }`}
                marginBottom="24px"
                value={newPrice}
                onChange={(e) => setNewPrice(e.target.value)}
              />
            </FormContainer>
          )}

          <AddImagesContainer>
            <div className="header-wrapper">
              <h3>Floor Plan</h3>
            </div>
            {floorPlanImages.length === 0 ? (
              <h3>No Images Available</h3>
            ) : (
              <CardsWrapper>
                {floorPlanImages.map((image, index) => {
                  return (
                    <ImageContainer>
                      <img src={image.url} alt={`Project Image -${index}`} />
                    </ImageContainer>
                  );
                })}
              </CardsWrapper>
            )}
          </AddImagesContainer>

          <AddImagesContainer>
            <AddUnitVideos unitId={unitId} />
            {unitVideos.length === 0 ? (
              <h3>No Videos Available</h3>
            ) : (
              <CardsWrapper>
                {unitVideos.map((video, index) => {
                  return (
                    <ImageContainer>
                      <video
                        autoPlay
                        loop
                        muted
                        onClick={handleVideoClick}
                        ref={videoRef}
                      >
                        <source src={video.url} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </ImageContainer>
                  );
                })}
              </CardsWrapper>
            )}
          </AddImagesContainer>
        </DashboardMain>
      </DashboardContainer>
    </>
  );
};

export default AdminUnitDetails;
