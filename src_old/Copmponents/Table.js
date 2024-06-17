import Reac,{useState} from "react";
import './Table.css'
import { handleDownloadFile } from "./DownloadFile";

function Table({tableData}) {
    const [allprojectList, setAllprojectList] = useState([]);
    console.log("TableData",tableData);
  
  return(
 
    <table class="project-table">
        <thead>
            <tr>
                <th>#</th>
                <th>Project ID</th>
                <th>Project Name</th>
                <th>Created At</th>
                <th>Processing Time</th>
                <th>Report</th>
            </tr>
        </thead>
        <tbody>
        {tableData && tableData.map((item,key)=>
            // alert(key)
                (<tr key={key}>
                <td>1</td>
                <td>{item?.projectId}</td>
                <td>Section correctness</td>
                <td>June 7, 2024, 2:04 PM</td>
                <td>0 Minutes 25 Seconds</td>
                <td onClick={handleDownloadFile}><a href="#"><img src="download-icon.png" alt="Download Report" class="icon"/></a></td>
            </tr>))}
        </tbody>
    </table>

  )
}

export default Table;

