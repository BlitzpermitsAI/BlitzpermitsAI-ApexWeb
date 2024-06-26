import React from "react";
import Download from '../../Assets/images/download.svg'
import './Table.css'

function Table() {

    const handleDownloadFile = (e) => {
        // alert("download file");
       // const data="hello";
            const data ="data";
             const base64Pdf = `data:application/pdf;base64,${data}`; // Your Base64 string here
    
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


  return(
 
<div className="table-container">
        <table class="project-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Created At</th>
                <th>Processing Time</th>
                <th className="Center-item">Report</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>BlitzPermits#123</td>
                <td>Section correctness</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon" onClick={handleDownloadFile}/></a></td>
            </tr>
            <tr>
                <td>2</td>
                <td>BlitzPermits#124</td>
                <td>Substitution note</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon"/></a></td>
            </tr>
            <tr>
                <td>3</td>
                <td>BlitzPermits#125</td>
                <td>Multiple trunk trees</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon"/></a></td>
            </tr>
            <tr>
                <td>4</td>
                <td>BlitzPermits#126</td>
                <td>Township management</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon"/></a></td>
            </tr>
            <tr>
                <td>5</td>
                <td>BlitzPermits#127</td>
                <td>Range completeness</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon"/></a></td>
            </tr>
            <tr>
                <td>6</td>
                <td>BlitzPermits#128</td>
                <td>Township management</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon"/></a></td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}
 
export default Table;