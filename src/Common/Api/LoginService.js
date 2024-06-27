import http from '../Api/HeaderCommon';
export const LoginAPI=(data)=>{
    return http.post("/authentication/login", data);
}