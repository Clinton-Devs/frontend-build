import React, { useState, useCallback } from "react";
import styled from "styled-components";
import addImageButton from "../../assets/dashboard/addImageIcon.svg";
import { CardsWrapper } from "../../pages/userPages/dashboardStyles";
import useGetOneProject from "../../app/services/projects/useGetOneProject";
import Spinner from "../../assets/common/spinner.svg";
import { httpClient } from "../../app/services/axios-https";
import Notification from "../Notification";
import toast from "react-hot-toast";
import env from "../../env";
import ButtonCommon from "../button/ButtonCommon";

import { useDropzone } from "react-dropzone";

const AddImages = ({ projectId }) => {
  const [uploadedImages, setUploadedImages] = useState([]);
  const [addingImage, setAddingImage] = useState(false);

  // const {
  //   loading,
  //   projectDetail,
  //   projectImages,
  //   project3DImages,
  //   projectUnits,
  // } = useGetOneProject(projectId);

  const onDrop = useCallback((acceptedFiles) => {
    const newImages = acceptedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file), // Create a preview URL for the image
    }));

    setUploadedImages((prevImages) => [...prevImages, ...newImages]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const addProjectImages = () => {
    const formData = new FormData();

    uploadedImages.forEach((file) => {
      setAddingImage(true);
      formData.append("image", file.file);
    });

    httpClient
      .post(
        `${env.clinton_homes_base_url}/admin/project/${projectId}/images`,
        formData
      )
      .then((response) => {
        toast.success("New Images Added");
        console.log(response.data.data);
        setAddingImage(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "An Error Occured");
      });
  };

  return (
    <>
      <AddImagesContainer>
        <Notification />
        <div className="header-wrapper">
          <h3>Project Images</h3>

          <div {...getRootProps()} style={{ textAlign: "end" }}>
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Drop the files here ...</p>
            ) : (
              <img src={addImageButton} alt="" />
            )}
          </div>
        </div>
      </AddImagesContainer>

      <AddImagesContainer>
        {uploadedImages.length === 0 ? (
          <h3>No Images available</h3>
        ) : (
          <CardsWrapper>
            {uploadedImages.map((image, index) => {
              return (
                <ImageContainer>
                  <img src={image.preview} alt={`Preview-${index}`} />
                </ImageContainer>
              );
            })}
          </CardsWrapper>
        )}

        {uploadedImages.length > 0 && (
          <div style={{ textAlign: "end" }}>
            <ButtonCommon
              content={addingImage ? <img src={Spinner} /> : "Save"}
              backgroundColor="#F8F4F6"
              textColor="#721F4B"
              marginTop="16px"
              onClick={addProjectImages}
              width="20%"
            />
          </div>
        )}
      </AddImagesContainer>
    </>
  );
};

export default AddImages;

const AddImagesContainer = styled.div`
  padding: 24px;
  /* width: 100%; */
  background-color: #fff;

  .header-wrapper {
    display: flex;
    justify-content: space-between;
  }

  h3 {
    color: #721f4b;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.018px;
    margin-bottom: 32px;
  }
`;

const ImageContainer = styled.div`
  max-width: 100%;
  height: 200px;

  img {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
