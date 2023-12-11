// import { useState } from "react";

// import { forwardRef } from "react";
// import Dialog from "@mui/material/Dialog";
// import Slide from "@mui/material/Slide";
// import styled from "styled-components";
// import InputCommon from "../inputField/InputCommon";
// // import cancel from "../../assets/common/x_black.svg";
// // import loader from "../../assets/common/loader_red_dots.svg";
// import { CircularProgress } from "@mui/material";

// const Transition = forwardRef(function Transition(props, ref) {
//   return <Slide direction="up" ref={ref} {...props} />;
// });

// export default function Modal(
//   {
//     //   open,
//     //   HeaderText,
//     //   onClickConfirmButton,
//     //   disableConfirmButton,
//     //   loading,
//     //   handleClose,
//     //   confirmationBody,
//     //   confirmationText,
//     //   onChangeReasonBody,
//     //   reason,
//   }
// ) {
//   const [open, setOpen] = useState(false);
//   const [fullWidth, setFullWidth] = useState(true);
//   const [maxWidth, setMaxWidth] = useState("sm");
//   return (
//     <div>
//       <Dialog
//         open={true}
//         // TransitionComponent={Transition}
//         // keepMounted
//         // onClose={handleClose}
//         aria-describedby="alert-dialog-slide-description"
//         fullWidth={true}
//         maxWidth="xs"
//       >
//         <ModalContainer>
//           <ModalHeader>
//             <h4>Add User</h4>
//             <h3>X</h3>
//             {/* <img src={} alt="cancel" onClick={} /> */}
//           </ModalHeader>
//           <ModalBody>
//             <p>Lorem ipsum dolor sit amet.</p>
//             <PersonalInformation>
//               <InputCommon />
//             </PersonalInformation>

//             {/* Render conditionally based on api response */}
//           </ModalBody>
//         </ModalContainer>
//       </Dialog>
//     </div>
//   );
// }

// const ModalContainer = styled.div`
//   /* width: 60vw;
//   height: 60vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center; */
//   /* width: 600px; */
// `;

// const ModalHeader = styled.div`
//   width: 90%;
//   margin: 0px auto;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   /* padding: 16px; */

//   h4 {
//     font-weight: 700;
//     font-size: 22.4px;
//     line-height: 25.6px;
//     color: #933d0c;
//     margin-right: 80px;
//     margin-bottom: 0px;
//   }

//   img {
//     cursor: pointer;
//   }
// `;

// const ModalBody = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   box-sizing: border-box;
//   margin: 0px auto;

//   .declinePosMessage {
//     font-weight: 400;
//     font-size: 15.2px;
//     line-height: 16px;
//     margin-bottom: 32px;
//     margin-top: 16px;
//     letter-spacing: 0.0036rem;
//     color: #475661;
//   }
// `;

// const InputField = styled.textarea`
//   width: 98%;
//   height: 80px;
//   border: 0.0625rem solid #d3d3d3;
//   border-radius: 0.25rem;
//   padding: 16px;
//   box-sizing: border-box;
//   outline: none;
// `;

// const PersonalInformation = styled.div`
//   width: 90%;
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   justify-content: center;

//   h4 {
//     font-weight: 700;
//     font-size: 14.4px;
//     line-height: 17.6px;
//     color: #000000;
//     margin: 0;
//     padding-bottom: 8px;
//     width: 100%;
//     padding-bottom: 16px;
//   }
// `;

// //loading info style
// const LoadingInfo = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     animation: spin infinite 2s linear;
//     margin-right: 0.3125rem;
//   }

//   p {
//     margin: 0.3125rem;
//     color: #98a2b3;
//     font-size: 0.75rem;
//     font-weight: 500;
//     line-height: 16px;
//   }

//   @keyframes spin {
//     from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }
//   }
// `;

// //agent details style

// const AgentDetails = styled.div`
//   background-color: #fdf6f2;
//   margin-top: 1.25rem;
//   padding: 0.5rem 1.5rem;
//   border-radius: 0.5rem;
//   width: 80%;
//   h3 {
//     color: #1c2c02;
//     font-size: 1rem;
//     font-weight: 500;
//     letter-spacing: 0.01rem;
//   }

//   p {
//     color: #2b3241;
//     font-size: 12px;
//     font-weight: 400;
//     letter-spacing: 0.12px;
//   }
// `;

// const ActionButton = styled.div`
//   width: 100%;
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: space-between;
//   margin-top: 44.8px;

//   a {
//     background: #ffffff;
//     color: #933d0c;
//     border: 0.0625rem solid #933d0c;
//     height: 48px;
//     border-radius: 0.25rem;
//     width: ${(props) =>
//       props.transactionStatus === "FAILED" ? "49%" : "100%"};
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     justify-content: center;
//     text-decoration: none;

//     img {
//       margin-right: 8px;
//     }
//   }

//   button {
//     display: block;
//     border-radius: 0.375rem;
//     height: 48px;
//     width: 49%;
//   }
// `;

// const AcceptButton = styled.button`
//   background: #933d0c;
//   border: none;
//   color: #ffffff;

//   &:disabled {
//     background: #7a7a7a;
//   }
// `;

// const CancelButton = styled.button`
//   background: #ffffff;
//   color: #933d0c;
//   border: 0.0625rem solid #933d0c;
// `;
