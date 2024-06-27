import React,{useState} from 'react';
import {UploadPDF} from '../../Common/Api/ApiCall';
import { useNavigate } from "react-router-dom";

function Upload(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(false);
  const [error,setError] = useState('');
  const navigate = useNavigate();

  const handleFile=async(e)=>{
    
  // if (!selectedFile) {
    //     setUploadStatus('Please select a file first.');
    //     return;
    // }

    const formData = new FormData();
    formData.append('file', e.target.files[0]);
    setUploadStatus(true)
    try {
      UploadPDF(formData).then((response)=>{
        handleDownloadFile(response.data)
        setUploadStatus(false)
        navigate('/compliance')
    })
    }
    catch(error) {
      alert(false)
      navigate('/compliance')
      setUploadStatus(false) 
      console.error('Error uploading file:', error);
      if (error.response) {
        // Server responded with a status other than 200 range
        setError(`Upload failed: ${error.response.data.message}`);
    } else if (error.request) {
        // Request was made but no response received
        setError('Upload failed: No response from server.');
    } else {
        // Something happened in setting up the request
        setError(`Upload failed: ${error.message}`);
    }
    console.error('Error uploading file:', error);
      }

    // try {
    //     const response = await axios.post('YOUR_API_ENDPOINT', formData, {
    //         headers: {
    //             'Content-Type': 'multipart/form-data',
    //         },
    //     });
    //     setUploadStatus('File uploaded successfully.');
    //     console.log('Response:', response.data);
    // } catch (error) {
    //     setUploadStatus('File upload failed.');
    //     console.error('Error uploading file:', error);
    // }
  }
  const handleDownloadFile = (pdfbase) => {
    // alert("download file");
   // const data="hello";
        
         const base64Pdf = `data:application/pdf;base64,${pdfbase}`; // Your Base64 string here

        // Convert Base64 to binary
        const byteCharacters = atob(base64Pdf.split(",")[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
          byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);

        // Create Blob from binary data
        const blob = new Blob([byteArray], { type: "application/pdf" });

        // Create a temporary anchor element
        const tempAnchor = document.createElement("a");
        tempAnchor.href = window.URL.createObjectURL(blob);
        tempAnchor.download = "report_document.pdf"; // Name of the downloaded file

        // Programmatically click the anchor element to trigger the download
        tempAnchor.click();

        // Clean up
        window.URL.revokeObjectURL(tempAnchor.href);
  };

return (
    <>
    <div className='upload-main-sec'>
    <div className='upload-sec-child'>
      <h1 className='heading-1'>Please upload PDF file.</h1>
    <div>
      <form>
      <input
        type="file"
        className='file-upload'
        onChange={handleFile}

      />

<div className={uploadStatus ? "overlay" : ""}>
                      {uploadStatus && (
                        <div className="loader">
                          
                        </div>
                      )}
                    </div>
      {/* <input type='submit'></input> */}
      </form>  
      {/* <h1>+++++++++++++++</h1> */}
      <svg className='upload-icon' xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 13.7812C10.674 13.7812 10.841 13.7121 10.964 13.589C11.0871 13.466 11.1562 13.299 11.1562 13.125V3.52362L12.6262 5.2395C12.7395 5.37178 12.9007 5.45365 13.0743 5.4671C13.2479 5.48056 13.4197 5.4245 13.552 5.31125C13.6843 5.198 13.7661 5.03685 13.7796 4.86323C13.7931 4.68962 13.737 4.51778 13.6237 4.3855L10.9987 1.323C10.9371 1.25096 10.8607 1.19312 10.7746 1.15346C10.6885 1.1138 10.5948 1.09326 10.5 1.09326C10.4052 1.09326 10.3115 1.1138 10.2254 1.15346C10.1393 1.19312 10.0629 1.25096 10.0012 1.323L7.37625 4.3855C7.32017 4.451 7.27755 4.5269 7.25081 4.60887C7.22406 4.69084 7.21373 4.77727 7.22039 4.86323C7.22706 4.9492 7.25059 5.03301 7.28964 5.10988C7.32869 5.18675 7.3825 5.25518 7.448 5.31125C7.51349 5.36732 7.58939 5.40995 7.67136 5.43669C7.75333 5.46343 7.83977 5.47377 7.92573 5.4671C8.0117 5.46044 8.09551 5.43691 8.17238 5.39786C8.24925 5.35881 8.31767 5.305 8.37375 5.2395L9.84375 3.5245V13.125C9.84375 13.4873 10.1377 13.7812 10.5 13.7812Z" fill="white"/>
      <path d="M14 7.875C13.3857 7.875 13.0786 7.875 12.8573 8.02287C12.7621 8.08656 12.6803 8.16832 12.6166 8.2635C12.4688 8.48488 12.4688 8.792 12.4688 9.40625V13.125C12.4688 13.6471 12.2613 14.1479 11.8921 14.5171C11.5229 14.8863 11.0221 15.0938 10.5 15.0938C9.97785 15.0938 9.4771 14.8863 9.10788 14.5171C8.73867 14.1479 8.53125 13.6471 8.53125 13.125V9.40625C8.53125 8.792 8.53125 8.48488 8.38338 8.2635C8.31969 8.16832 8.23793 8.08656 8.14275 8.02287C7.92137 7.875 7.61425 7.875 7 7.875C4.5255 7.875 3.28737 7.875 2.51912 8.64412C1.75 9.41237 1.75 10.6487 1.75 13.1241V13.9991C1.75 16.4754 1.75 17.7118 2.51912 18.4809C3.28737 19.25 4.5255 19.25 7 19.25H14C16.4745 19.25 17.7126 19.25 18.4809 18.4809C19.25 17.7118 19.25 16.4745 19.25 14V13.125C19.25 10.6496 19.25 9.41237 18.4809 8.64412C17.7126 7.875 16.4745 7.875 14 7.875Z" fill="white"/>
      </svg>

    </div>
    </div>
      {/* <div className='loader-sec'>
      <img src={require('../../Assets/images/loader.png')} className='loader-img' />
      </div> */}
    </div>
    
    </>
)
}
export default Upload;