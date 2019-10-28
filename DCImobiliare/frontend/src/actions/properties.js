import axios from "axios";

// GET OFFERS
export const getProperties = () => {
  axios
    .get("/api/properties")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err.response.data, err.response.status));
};
