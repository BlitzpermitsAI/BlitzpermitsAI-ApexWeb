import http from '../Api/Header';
export const UploadPDF=(data)=>{
    
    return http.post("/process_file", data);
}


