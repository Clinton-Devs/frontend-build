import styled from "styled-components";

const InputCommon = ({
  inputType,
  inputLabel,
  placeholder,
  marginBottom,
  onChange,
  value,
  // inputMode,
  // pattern,
}) => {
  return (
    <Container marginBottom={marginBottom}>
      <label htmlFor={inputType}>{inputLabel}</label>
      <input
        type={inputType}
        name={inputType}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        // inputMode={inputMode}
        // pattern={pattern}
      />
    </Container>
  );
};

export default InputCommon;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom};`}

  label {
    color: #001660;
    font-size: 14px;
    font-weight: 500;
    line-height: 26px; /* 185.714% */
    letter-spacing: 0.014px;
  }

  input {
    width: 100%;
    height: 52px;
    padding: 13px 20px;
    border-radius: 5px;
    border: 1px solid #eaecf0;
    box-shadow: 0px 1px 2px 0px rgba(16, 24, 40, 0.05);
    margin-top: 12px;
    box-sizing: border-box;
  }

  input:focus {
    border: none;
    border: 1px solid #2753e8;
    outline: none;
  }
`;
