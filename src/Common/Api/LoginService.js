import http from "../Api/HeaderCommon";
export const LoginAPI = async (data) => {
  try {
    const response = await http.post("/authentication/login", data);
    return response;
  } catch (err) {
    console.log("error", err);
    return err;
  }
};

export const UserDetailsAPI = async (userId) => {
  try {
    const response = await http.get("/user/" + userId);
    return response;
  } catch (err) {
    console.log("error+", err);
    return err;
  }
};

export const VerifyCodeApi = async (data) => {
  try {
    const response = await http.post("/authentication/login-2FA", data);
    return response;
  } catch (err) {
    console.log("error", err);
    return err;
  }
};
