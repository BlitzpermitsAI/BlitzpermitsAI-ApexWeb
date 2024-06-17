import React from 'react';
import './Sidebar.css';
import { Link,useLocation } from 'react-router-dom';
function Sidebar(){
    const location = useLocation();
return (
    <>
       <div className='sidebar-main'>
       <div className='sidebar-blitz-logo'>
        <img src={require('../../Assets/images/purple_logo.png')} className='blitz-logo'/>
        <img src={require('../../Assets/images/blitz-logo.png')} className='blitz-name' />
       </div>

       <div className='sidebar-menu-items'>

        <Link to='/' className={`icon-text ${location.pathname === '/' ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.2036 2.86559C12.8732 2.56875 12.4447 2.40454 12.0006 2.40454C11.5564 2.40454 11.128 2.56875 10.7976 2.86559L4.19758 8.79599C4.0097 8.96463 3.85941 9.17091 3.75645 9.40142C3.6535 9.63194 3.60018 9.88153 3.59998 10.134V18.6C3.59998 19.0774 3.78962 19.5352 4.12718 19.8728C4.46475 20.2103 4.92259 20.4 5.39998 20.4H7.79998C8.27737 20.4 8.7352 20.2103 9.07277 19.8728C9.41033 19.5352 9.59998 19.0774 9.59998 18.6V13.8C9.59998 13.6409 9.66319 13.4882 9.77571 13.3757C9.88823 13.2632 10.0408 13.2 10.2 13.2H13.8C13.9591 13.2 14.1117 13.2632 14.2242 13.3757C14.3368 13.4882 14.4 13.6409 14.4 13.8V18.6C14.4 19.0774 14.5896 19.5352 14.9272 19.8728C15.2647 20.2103 15.7226 20.4 16.2 20.4H18.6C19.0774 20.4 19.5352 20.2103 19.8728 19.8728C20.2103 19.5352 20.4 19.0774 20.4 18.6V10.134C20.3999 9.88162 20.3468 9.63208 20.244 9.40157C20.1413 9.17107 19.9912 8.96474 19.8036 8.79599L13.2036 2.86559Z" fill="black"/>
        </svg>
        <p className='menu-item'>Home</p>
        </Link>
        

        <Link to='/compliance' className={`icon-text ${location.pathname === '/compliance' ? 'active' : ''}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <g clip-path="url(#clip0_1_69)">
        <path d="M15 14H9V12H15V14ZM21 7V24H3V3C3 2.20435 3.31607 1.44129 3.87868 0.87868C4.44129 0.31607 5.20435 0 6 0L14 0V7H21ZM17 18H7V20H17V18ZM17 10H7V16H17V10ZM19.828 3.414L17.586 1.172C17.1391 0.734745 16.5959 0.408346 16 0.219V5H20.785C20.5956 4.40325 20.2676 3.85979 19.828 3.414Z" fill="black"/>
        </g>
        <defs>
        <clipPath id="clip0_1_69">
        <rect width="24" height="24" fill="white"/>
        </clipPath>
        </defs>
        </svg>

        <p className='menu-item'>Compliance Report</p>
        </Link>

       </div>
       </div>
    </>

)
}
export default Sidebar;