import axios from "axios";
import getURL from "../routes/api-urls";

const uploadDocuments = (payload) => {
  return axios
    .post(getURL("docQuery").upload, payload, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then(({ data }) => data);
};

const getChats = (id) => {
  return axios.get(getURL("docQuery").get + id).then(({ data }) => data);
};

export const docQueryService = {
  uploadDocuments,
  getChats,
};
