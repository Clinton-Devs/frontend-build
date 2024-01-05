import React, { useState, useCallback } from "react";

import { http, httpCloudinary } from "../../app/services/axios-https";
import env from "../../env";
import InputCommon from "../inputField/InputCommon";
import ButtonCommon from "../button/ButtonCommon";
import InputCommonWithIcon from "../inputField/InputCommonWithIcon";
import Notification from "../Notification";
import spinner from "../../assets/common/spinner.svg";
import toast from "react-hot-toast";
import { useDropzone } from "react-dropzone";

const AddUnitForm = () => {
  const [unitName, setUnitName] = useState("");
  const [noOfRooms, setNoOfRooms] = useState();
  const [noOfBathrooms, setNoOfBathRooms] = useState();
  const [price, setPrice] = useState();
  const [paymentPlan, setPaymentPlan] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [coverImageUrl, setCoverImageUrl] = useState("");
  const [addingUnit, setAddingUnit] = useState(false);
  const [unitId, setUnitId] = useState("");

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
      .then((response) => setCoverImageUrl(response.data.url))
      .catch((error) =>
        toast.error(error.response.data.message || "Image upload error")
      );
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  // const clearFields = () => {
  //   setFirstName("");
  //   setLastName("");
  //   setEmail("");
  // };

  const addUnit = ({ projectId }) => {
    setAddingUnit(true);
    const formdata = {
      name: unitName,
      numberOfBathRooms: parseInt(noOfBathrooms),
      paymentPlan: paymentPlan,
      image: coverImageUrl,
      numberOfRooms: parseInt(noOfRooms),
      price: parseInt(price),
    };
    http
      .post(
        `${env.clinton_homes_base_url}/admin/project/${projectId}/create-unit`,
        formdata
      )
      .then((response) => {
        toast.success("Unit Successfully Created");
        console.log(response.data.data._id);
        setUnitId(response.data.data._id);
        setAddingUnit(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message || "An Error Occured");
      });
  };

  return (
    <div className="input-container">
      <Notification />
      <InputCommon
        placeholder="Name:"
        marginBottom="24px"
        value={unitName}
        onChange={(e) => setUnitName(e.target.value)}
      />
      <InputCommon
        placeholder="Number of rooms:"
        marginBottom="24px"
        value={noOfRooms}
        onChange={(e) => setNoOfRooms(e.target.value)}
      />
      <InputCommon
        placeholder="Number of bathrooms:"
        marginBottom="24px"
        value={noOfBathrooms}
        onChange={(e) => setNoOfBathRooms(e.target.value)}
      />
      <InputCommon
        placeholder="Price:"
        marginBottom="24px"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <InputCommon
        placeholder="Payment plan:"
        marginBottom="24px"
        value={paymentPlan}
        onChange={(e) => setPaymentPlan(e.target.value)}
      />

      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <InputCommonWithIcon
            placeholder={coverImage ? coverImage.name : "Cover Image"}
            icon={
              <>
                <p>Icon</p>
              </>
            }
            marginBottom={"32px"}
            readOnly={true}
          />
        )}
      </div>
      <div style={{ textAlign: "end" }}>
        <ButtonCommon
          content={addingUnit ? <img src={spinner} /> : "Add"}
          backgroundColor="#F8F4F6"
          textColor="#721F4B"
          marginTop="16px"
          onClick={addUnit}
          width="20%"
        />
      </div>
    </div>
  );
};

export default AddUnitForm;
