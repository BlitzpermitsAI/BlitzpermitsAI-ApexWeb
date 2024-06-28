import http from "../Api/HeaderCommon";
export const LoginAPI = (data) => {
  return http.post("/authentication/login", data);
};

export const UserDetailsAPI = async (userId) => {
  return http.get("/user/" + userId);
};

export const VerifyCodeApi = (data) => {
  return http.post("/authentication/login-2FA", data);
};
