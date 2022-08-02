import axios from "axios";

const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = '6635439f1ae7422196b9b2633b56bed7';
const redirectUri = 'http://localhost:3000';
const scopes = [
    // 'user-read-currently-playing',
    // 'user-read-recently-played',
    // 'user-read-playback-state',
    // 'user-top-read',
    // 'user-modify-playback-state',

    'playlist-read-private',
    'user-library-read',
];

export const getTokenFromUrl = () => {
    return window.location.hash.substring(1).split('&').reduce((initial, item) => {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
    }, {});
}

export const loginEndpoint = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
  });
  
  export const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      return config;
    });
  };
  
  export default apiClient;

// export const getToken = () => {
//     const urlParams = getTokenFromUrl();
//     return urlParams.access_token;
// }
// export const getRefreshToken = () => {
//     const urlParams = getTokenFromUrl();
//     return urlParams.refresh_token;
// }
// export const getTokenExpiration = () => {
//     const urlParams = getTokenFromUrl();
//     return urlParams.expires_in;
// }
// export const getTokenExpirationDate = () => {
//     const urlParams = getTokenFromUrl();
//     return urlParams.expires_in;
// }