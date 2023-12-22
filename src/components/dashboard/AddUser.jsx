import React, { useState } from "react";
import InputCommon from "../inputField/InputCommon";
import Spinner from "../../assets/common/spinner.svg";
import { httpClient } from "../../app/services/axios-https";
import ButtonCommon from "../button/ButtonCommon";

import styled from "styled-components";

const AddUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pricePaid, setPricePaid] = useState("");
  const [newPricePaid, setNewPricePaid] = useState("");
  const [addingUser, setAddingUser] = useState(false);

  return (
    // <DashboardContainer>
    //   <DashboardMain>

    <FormContainer>
      <h4>Add User</h4>
      <InputCommon
        placeholder="Name:"
        marginBottom="24px"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <InputCommon
        placeholder="Email Address:"
        marginBottom="24px"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputCommon
        placeholder="Price paid:"
        marginBottom="24px"
        value={pricePaid}
        onChange={(e) => setPricePaid(e.target.value)}
      />
      <InputCommon
        placeholder="New Price Paid:"
        marginBottom="24px"
        value={newPricePaid}
        onChange={(e) => setNewPricePaid(e.target.value)}
      />

      <div style={{ textAlign: "end" }}>
        <ButtonCommon
          content={addingUser ? <img src={Spinner} /> : "Save"}
          backgroundColor="#F8F4F6"
          textColor="#721F4B"
          marginTop="16px"
          // onClick={addUnit}
          width="20%"
        />
      </div>
    </FormContainer>
  );
};

export default AddUser;

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

  h4 {
    color: #721f4b;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0.018px;
    margin-bottom: 32px;
  }
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

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  h4 {
    margin-bottom: 6px;
  }
`;
