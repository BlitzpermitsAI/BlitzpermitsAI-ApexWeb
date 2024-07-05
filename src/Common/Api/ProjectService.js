import http from "../Api/HeaderCommon";

export const ProjectListAPI = async (userId) => {
  try {
    const response = await http.get("/project/apex/" + userId);
    return response;
  } catch (err) {
    console.log("error+", err);
    return err;
  }
};


