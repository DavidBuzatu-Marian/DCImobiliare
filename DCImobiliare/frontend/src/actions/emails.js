import axios from "axios";
// import { createMessage, returnErrors } from './messages';
import { SEND_EMAIL } from "./types";

export const sendEmail = email => (dispatch, getState) => {
  axios
    .post("/sendEmails/", email)
    .then(res => {
      dispatch(createMessage({ sendEmail: "Email sent!" }));
      dispatch({
        type: SEND_EMAIL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
