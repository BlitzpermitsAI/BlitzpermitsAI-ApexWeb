import React, { useState } from 'react';
// import { useLocation } from "react-router-dom";
import './Sidebar.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";

import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faHouseChimney } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
// import { faLandmarkFlag } from "@fortawesome/free-solid-svg-icons";
// import { faMountainSun } from "@fortawesome/free-solid-svg-icons";
// import { faSitemap } from "@fortawesome/free-solid-svg-icons";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
// import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

 
 
 
const Sidebar = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [showResourcesSubMenu, setShowResourcesSubMenu] = useState(false);
 
//   const toggleCollapse = () => {
//     setCollapsed(!collapsed);
//     if (showResourcesSubMenu) {
//       setShowResourcesSubMenu(false);
//     }
//   };
//   const location = useLocation();
 
  // const toggleResourcesSubMenu = () => {
  //   setShowResourcesSubMenu(!showResourcesSubMenu);
  // };
 
  return (
    <div className="sidebar">
      <div className='sidebar-parent'>
        <div className='ham-icon'>
          <FontAwesomeIcon icon={faBars} style={{ color: "#CEEA49" }} className='ham-icon-main'/>
        </div>
        <Link to="/user-home" className={`sidebar-child`}>
          <div><FontAwesomeIcon icon={faHouseChimney}/></div>
           <div>Home</div>
        </Link>
        <div>
        <Link to="/project-summary" className={`sidebar-child`}>
          <div><FontAwesomeIcon icon={faListCheck} /></div>
       <div>Projects</div>
          </Link></div>
        <Link to="/user-reports" className={`sidebar-child`}>
          <div><FontAwesomeIcon icon={faChartPie}/></div>
         <div>Data Reports</div>
        </Link>
        {/* <div className='sidebar-child'>
          <div><FontAwesomeIcon icon={faCircleNotch} style={{ color: "#ffffff" }} /></div>
          {!collapsed && <div>Community</div>}
        </div>
        <div className={`sidebar-child ${showResourcesSubMenu ? 'open' : ''}`} onClick={toggleResourcesSubMenu}>
          <div><FontAwesomeIcon icon={faLayerGroup} style={{ color: "#ffffff" }} /></div>
          {!collapsed && <div>Resources  &nbsp;<FontAwesomeIcon icon={faCaretDown} style={{color: "#ffffff", transform: `rotate(${showResourcesSubMenu ? '270deg' : '0deg'})`}} /></div>}
        </div>
        {showResourcesSubMenu && !collapsed && (
          <div className='sidebar-submenu'>
            <div>
            <Link className='sidebar-child' to="/project-land-uses">
              <div><FontAwesomeIcon icon={faLandmarkFlag} style={{color: "#ffffff",}} /></div>
              <div>Project Land Use Review</div>
              </Link>
            </div>
            <div>
            <Link className='sidebar-child' to="/landscape-review">
              <div><FontAwesomeIcon icon={faMountainSun} style={{color: "#ffffff",}} /></div>
              <div>Landscape Review</div>
              </Link>
            </div>
            <div className='sidebar-child'>
              <div><FontAwesomeIcon icon={faSitemap} style={{color: "#ffffff",}} /></div>
              <div>Site Summary</div>
            </div>
          </div>
        )} */}
        <Link to='/training-manual' className={`sidebar-child`}>
          <div><FontAwesomeIcon icon={faBook} /></div>
           <div>Training Manual</div>
        </Link>
      </div>
    </div>
  );
};
 
export default Sidebar;