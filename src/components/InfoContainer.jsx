import React from "react";
import styled from "styled-components";

const InfoContainer = ({ children, title }) => {
  return (
    <Container>
      <h3>{title}</h3>
      {children}
    </Container>
  );
};

export default InfoContainer;

const Container = styled.div`
  padding: 24px;

  h3 {
    color: #721f4b;
    font-size: 18px;
    font-weight: 700;
    line-height: 26px; /* 144.444% */
    letter-spacing: 0.018px;
    margin-bottom: 32px;
  }
`;
