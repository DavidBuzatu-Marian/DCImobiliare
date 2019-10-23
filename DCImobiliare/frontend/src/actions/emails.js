import axios from "axios";
// import { createMessage, returnErrors } from './messages';
import { SEND_EMAIL } from "./types";

export const sendEmail = emailContent => {
  console.log("err");
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  const body = JSON.stringify(emailContent);
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios.defaults.withCredentials = true;
  axios
    .post("/api/sendEmail", body, config)
    .then(res => {
      // dispatch(createMessage({ sendEmail: "Email sent!" }));
      dispatch({
        type: SEND_EMAIL,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
