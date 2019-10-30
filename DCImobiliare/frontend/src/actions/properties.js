import axios from "axios";
import { GET_PROPERTIES } from "./types";

// GET OFFERS
export const getProperties = () => {
  axios
    .get("/api/properties")
    .then(res => {
      // dispatch({
      //   type: GET_PROPERTIES,
      //   payload: res.data
      // });
      console.log(res.data);
      return res.data;
    })
    .catch(err => console.log(err.response.data, err.response.status));
};
