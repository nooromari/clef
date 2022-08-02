import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize";
const clientId = "6635439f1ae7422196b9b2633b56bed7";
const redirectUri = "https://fierce-hollows-72352.herokuapp.com"; //FOR DEVELOPMENT "http://localhost:3000"
const baseURL = "https://api.spotify.com/v1/";
const scopes = ["playlist-read-private", "user-library-read"];

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      const parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: baseURL,
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
