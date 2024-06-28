import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import './Home.css';
import Sidebar from '../Layout/Sidebar';
import Searchbar from '../Layout/Searchbar';
import Upload from '../Layout/Upload';
import Footer from '../Layout/Footer';
import Logout from '../../Assets/images/logout-white.svg';
import Notification from '../../Assets/images/notification-white.svg'
import Profile from '../../Assets/images/profile.png';
import Table from '../Layout/Table';
import HamOpen from '../../Assets/images/ham-open.svg';


function Compliance() {


  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

const [currentPage, setCurrentPage] = useState('Project Information');
const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {

    setSidebarOpen(!isSidebarOpen);
    
  };


  return(
    <>
  <div className='sidebar-right-sec'>                                        
  <div className="mobile-menu" onClick={toggleSidebar}>
        <img src={HamOpen}  alt="Hamburger" />
        </div>
        
        {/* Sidebar (conditionally rendered for mobile) */}
        <div className={`sidebar-mobile ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar />
        </div>
    <div className='container'>
    <div className='top-sec-background'>
    <div className='main-head-home'>
    <Searchbar/>

    <div className='sec-header-row'>
    <Link to='' className='profile-div'>
      <img src={Profile} className='profile-img' />
      <p className='profile-name' style={{ color: '#ffffff' }}>Taylor Blitz</p>
    </Link>

    <div className='header-icon-div'>
    <Link to='/'>
    <img src={Logout} alt='logout'/>
    </Link>
    
    <Link to='/'>
    <img src={Notification} alt='Notification'/>
    </Link>
    </div>
    </div>

    </div>
    <p className='breadcrum-div' style={{color: '#ffffff'}}><span style={{color: '#ffffff'}}>DASHBOARD&nbsp;</span> &gt; &nbsp;{currentPage}</p>
    <p className='date-div' style={{color: '#ffffff'}}>{currentDate}</p>
    <h1 className='heading-1 mg-top'>Compliance Report Generation</h1>
    </div>
    <Table/>
</div>

  </div>
  
  <Footer/>
    </>
  )
}


export default Compliance;

