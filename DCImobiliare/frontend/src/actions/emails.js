import axios from "axios";
// import { createMessage, returnErrors } from './messages';
import { SEND_EMAIL } from "./types";

export const sendEmail = emailContent => {
  const csrftoken = getCookie("csrftoken");
  // console.log(csrftoken);
  const config = {
    headers: { "Content-Type": "application/json" }
  };
  const body = JSON.stringify(emailContent);
  axios.defaults.xsrfCookieName = "csrftoken";
  axios.defaults.xsrfHeaderName = "X-CSRFToken";
  axios
    .put("/mail", body, config)
    .then(res => {
      // dispatch(createMessage({ sendEmail: "Email sent!" }));
      // dispatch({
      //   type: SEND_EMAIL,
      //   payload: res.data
      // });
      let div = document.getElementsByClassName("alert")[0];
      div.style.display = "block";
      let loader = document.getElementById("formLoader");
      loader.style.display = "none";
    })
    .catch(err => console.log(err));
};

function getCookie(name) {
  if (!document.cookie) {
    return null;
  }
  const token = document.cookie
    .split(";")
    .map(c => c.trim())
    .filter(c => c.startsWith(name + "="));

  if (token.length === 0) {
    return null;
  }
  return decodeURIComponent(token[0].split("=")[1]);
}
