import { setClientToken } from "../spotify";

export const logOut = () => {
  window.localStorage.setItem("token", "");
  window.location.replace("/login");
};

export const getToken = () => {
  return window.localStorage.getItem("token");
};

export const setToken = () => {
  const token = window.localStorage.getItem("token");
  const hash = window.location.hash;
  window.location.hash = "";
  if (!token && hash) {
    const _token = hash.split("&")[0].split("=")[1];
    window.localStorage.setItem("token", _token);
    setClientToken(_token);
  } else {
    setClientToken(token);
  }
  return token;
};
