import React from "react";
import Download from '../../Assets/images/download.svg'
import './Table.css'

function Table({Projectsdata}) {
    
    // const formatDate = (dateString) =>{
    //     try{
    //         return dateString.toLocaleDateString('en-US');
    //     } catch (error) {
    //         console.log("error",error);
    //       }
    //       return dateString;

    // };
    // const updatedProjects = Projectsdata.map((project) => {
        
    //     return {...project,  timeStamp:formatDate(formatDate)};
    //    });
    // const updatedProjects = Projectsdata.map((project) => {
    //     if (project.projectId === 1) {  
    //       return { ...project,county_id: 36 };  
    //     };

    //     if (project.projectId === 2) {  
    //         return { ...project,county_id: 14 };  
    //       };

    //       if (project.projectId === 3) {  
    //         return { ...project,county_id: 25 };  
    //       };


    //     return project; // Keep other projects unchanged
    //   });


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

      if (!Projectsdata) {
        return <div>Loading...</div>;
      }

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
        {Projectsdata.map((project) => (
            <tr key={project.projectId}>
                <td>{project.projectId}</td>
                <td>BlitzPermits {project.projectId}</td>
                <td>{project.siteAddress}</td>
                <td>{project.timeStamp}</td>
                <td>25 Seconds</td>
                <td className="Center-item"><a href="#"><img src={Download} alt="Download Report" className="icon" onClick={handleDownloadFile} /></a></td>
            </tr>
             ))}
        </tbody>
   
    </table>
    </div>
  )
}
 
export default Table;