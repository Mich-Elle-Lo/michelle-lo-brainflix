// {"api_key":"7b621a10-171d-40ee-80c4-68f110785e04"}
import axios from "axios";

const apiKey = "7b621a10-171d-40ee-80c4-68f110785e04";
const baseUrl = "https://project-2-api.herokuapp.com/";

const getVideos = async () => {
  return axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
};

const getVideosDetails = async () => {
  return axios.get(`${baseUrl}/videos/?api_key=${apiKey}`);
};

export { getVideos, getVideosDetails };
