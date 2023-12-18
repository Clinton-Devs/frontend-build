import { useState } from "react";

import {
  LoginPageStyle,
  HouseImagesContainer,
  LoginLeftColumn,
  LoginRightColumn,
  LoginContainer,
  // LoginLabel,
  // LoginButton,
  // LoginInput,
} from "./SignInStyles";

import Navbar from "../../components/navbar/Navbar";

import InputCommon from "../../components/inputField/InputCommon";
import InputCommonWithIcon from "../../components/inputField/InputCommonWithIcon";
import ButtonCommon from "../../components/button/ButtonCommon";
import { useNavigate } from "react-router-dom";

import Spinner from "../../assets/common/spinner.svg";
import SpinnerWhite from "../../assets/common/spinner_light.svg";
import Get_Otp_Button from "../../assets/login/get_otp_button.svg";

import House_1 from "../../assets/login/house_img_1.png";
import House_2 from "../../assets/login/house_img_2.png";
import House_3 from "../../assets/login/house_img_3.png";

import axios from "axios";
import env from "../../env";

// interface LoginProps {
//   onLoginSuccess: (user: User) => void;
// }

const SignIn = () => {
  // const dispatch = useDispatch<AppDispatch>();
  // const { user } = useSelector((state: RootState) => state.authData);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [codeSent, setCodeSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoadingOtp, setIsLoadingOtp] = useState(false);
  const [isLogginIn, setIsLoggingIn] = useState(false);

  const navigate = useNavigate();

  const handleSendCode = () => {
    setIsLoadingOtp(true);
    axios
      .post(`${env.clinton_homes_base_url}/public/get-code`, { email })
      .then((response) => {
        console.log(response);
        setIsLoadingOtp(false);
        setCodeSent(true);
        setIsError(false);
      })
      .catch((error) => {
        // console.log(error.response.data);
        setIsLoadingOtp(false);
        setIsError(true);
        setErrorMessage(
          error?.response?.data?.message ? error.response.data.message : "Error"
        );
        setTimeout(() => {
          setIsError(false);
        }, 7000);

        if (error?.response?.status === 400) {
          setErrorMessage(error?.response?.data[0].errors?.issues[0].message);
        }
      });
  };

  const handleUserLogin = () => {
    setIsLoggingIn(true);
    axios
      .post(`${env.clinton_homes_base_url}/public/login`, {
        email,
        otp: otp.trim(),
      })
      .then((response) => {
        console.log(response.data.data);
        env.storeUser(response.data.data.token, response.data.data.user);
        setIsLoggingIn(false);

        if (response.data.data.user.userType === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/user-dashboard");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Navbar />

      <LoginPageStyle>
        <LoginLeftColumn>
          <HouseImagesContainer>
            <figure className="house-1">
              <img src={House_1} alt="house_image" />
            </figure>
            <figure className="house-2">
              <img src={House_2} alt="house_image" />
            </figure>
            <figure className="house-3">
              <img src={House_3} alt="house_image" />
            </figure>
          </HouseImagesContainer>

          <div className="images-container-text">
            <h3>Your Personal Property Hub</h3>
            <p>
              Manage your properties, track your payments, and connect with your
              property managers - all in one place
            </p>
          </div>
        </LoginLeftColumn>

        <LoginRightColumn>
          <LoginContainer>
            <div className="login-welcome-message">
              <h3>Welcome Back!</h3>
              <p>Sign into your account</p>
            </div>

            <div className="login-inputs">
              <InputCommonWithIcon
                inputLabel="Email"
                icon={isLoadingOtp ? Spinner : Get_Otp_Button}
                marginBottom={"32px"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onClickIcon={handleSendCode}
              />

              {isError ? (
                <p className="error-message">{errorMessage}</p>
              ) : codeSent ? (
                <p className="input-message">
                  OTP has been sent to your email address registered with us
                </p>
              ) : null}

              {codeSent && (
                <InputCommon
                  inputLabel="Enter OTP"
                  marginBottom={"56px"}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}

              <ButtonCommon
                content={isLogginIn ? <img src={SpinnerWhite} /> : "Log In"}
                backgroundColor="#721F4B;"
                onClick={handleUserLogin}
                disabled={!codeSent}
              />
            </div>
          </LoginContainer>

          <p className="support-text">
            Trouble logging in? <a href="#">Contact Support</a>
          </p>
        </LoginRightColumn>
      </LoginPageStyle>
    </>
  );
};

export default SignIn;
