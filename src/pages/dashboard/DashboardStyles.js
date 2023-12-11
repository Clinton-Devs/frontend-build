import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: calc(100vh - 5rem);
  padding: 2rem;
  box-sizing: border-box;
  background: #fbfbfb;

  h1 {
    color: #1c2c02;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 2.5rem;
    letter-spacing: 0.01875rem;
    margin: 0;
    margin-bottom: 0.5rem;
  }
`;

const Transaction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

const AccountBalance = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  /* width: 40%; */
  width: 25rem;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 12px;
  border: 0.5px solid #dbdfe7;
  background: #fff;
  margin-right: 1rem;
  height: 10rem;

  .accountBalance {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    .accountBalance__amount {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      flex: 1;

      h2 {
        color: #933d0c;
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 2.25rem;
        margin: 0;
      }

      p {
        color: #98a2b3;
        font-size: 0.75rem;
        line-height: 1.125rem;
        margin: 0;
      }
    }

    img {
      cursor: pointer;
    }
  }

  .accountDetails {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;
    /* margin-top: 2rem; */

    .accountNumber,
    .accountName {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      width: 100%;

      h3 {
        color: #434c61;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.3125rem;
        letter-spacing: 0.01rem;
        margin: 0;
      }

      p {
        color: #98a2b3;
        font-size: 0.75rem;
        line-height: 1.125rem;
        margin: 0;
      }
    }

    .accountName {
      align-items: flex-end;

      h3 {
        color: #933d0c;
      }
    }
  }
`;

const TransactionVolume = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: calc((100% - 25rem - 1rem) / 2);
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 12px;
  border: 0.5px solid #dbdfe7;
  border-right: none;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background: #fff;
  height: 10rem;

  .transactionVolume {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    h3 {
      color: #2b3241;
      font-size: 1rem;
      font-weight: 500;
      line-height: 1.5rem;
      letter-spacing: 0.01rem;
      margin: 0;
    }

    .accountBalance__day {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;

      h3 {
        margin: 0;
        color: #667085;
        font-size: 0.875rem;
        line-height: 1.3125rem;
      }
    }
  }

  .transactionVolume__amount {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    .amount {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;

      h3 {
        color: #1c2c02;
        font-size: 1.5rem;
        line-height: 2.8125rem;
        letter-spacing: 0.015rem;
        margin: 0;
        font-weight: 500;
      }

      .amount__details {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        p {
          margin: 0;
          color: #008d4b;
          text-align: center;
          font-size: 0.875rem;
          font-weight: 500;
          line-height: 1.3125rem;
          letter-spacing: 0.01rem;

          span {
            color: #98a2b3;
            font-size: 0.8rem;
            line-height: 1.3rem;
            font-weight: 400;
          }
        }
      }
    }
  }
`;

const TransactionCount = styled(TransactionVolume)`
  border-radius: 12px;
  border: 0.5px solid #dbdfe7;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const Services = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
  border-radius: 12px;
  background: #fff;
  border: 0.5px solid #dbdfe7;

  .service {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    padding: 1rem 1.5rem;
    border-right: 0.5px solid #dbdfe7;

    .service__details {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      flex-direction: column;
      /* width: 100%; */
      margin-left: 1rem;

      h3 {
        color: #434c61;
        text-align: center;
        font-size: 1.125rem;
        font-weight: 500;
        line-height: 1.5rem;
        margin: 0;
      }

      p {
        color: #949ca9;
        font-size: 0.75rem;
        line-height: 1.125rem;
        margin: 0;
      }
    }
  }

  .service:last-child {
    border-right: none;
  }
`;

export {
  Container,
  Transaction,
  AccountBalance,
  TransactionVolume,
  TransactionCount,
  Services,
};
