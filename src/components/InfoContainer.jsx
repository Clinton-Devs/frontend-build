import React from "react";
import styled from "styled-components";
import ActionButton from "./button/ActionButton";

const InfoContainer = ({ children, title, action }) => {
  return (
    <Container>
      <div className="title-container">
        <h3>{title}</h3>
        {action && (
          <ActionButton text="Create New Project" handleAction={action} />
        )}
      </div>
      {children}
    </Container>
  );
};

export default InfoContainer;

const Container = styled.div`
  padding: 24px;

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #721f4b;
      font-size: 18px;
      font-weight: 700;
      line-height: 26px; /* 144.444% */
      letter-spacing: 0.018px;
      margin-bottom: 32px;
    }
  }
`;
