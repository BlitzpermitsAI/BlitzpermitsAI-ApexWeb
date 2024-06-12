import http from '../Api/Header';
export const login=(data)=>{
    return http.post("api/authentication/login-2FA", data);
}


