import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import Sidebar from '../Layout/Sidebar';
import Searchbar from '../Layout/Searchbar';
import Upload from '../Layout/Upload';
import Footer from '../Layout/Footer';
import Logout from '../../Assets/images/logout.svg';
import Notification from '../../Assets/images/notification.svg';
import Profile from '../../Assets/images/profile.png';
import HamOpen from '../../Assets/images/ham-open.svg';

function Home() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // State to manage sidebar visibility
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  // Function to toggle sidebar visibility
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  
  const userDataInfo = localStorage.getItem("UserInfo");
  const userDetails = JSON.parse(userDataInfo);
  const capitalizeFirstLetter=(Name)=>  {return Name.charAt(0).toUpperCase() + Name.slice(1);
  }

  return (
    <>
      <div className="sidebar-right-sec-home">
        {/* Hamburger menu icon for mobile */}
        <div className="mobile-menu" onClick={toggleSidebar}>
        <img src={HamOpen}  alt="Hamburger" />
        </div>
        
        {/* Sidebar (conditionally rendered for mobile) */}
        <div className={`sidebar-mobile ${isSidebarOpen ? 'open' : ''}`}>
          <Sidebar />
        </div>

        <div className="container">
          <div className="main-head-home">
            <Searchbar />

            <div className="sec-header-row">
              <Link to="" className="profile-div">
                <img src={Profile} className="profile-img" alt="profile" />
                <p className="profile-name" style={{ color: '#000000' }}>
                {userDetails !== null
                    ?capitalizeFirstLetter(userDetails?.firstName) + " " + capitalizeFirstLetter(userDetails?.surname)
                    : "Taylor Blitz"}
                </p>
              </Link>

              <div className="header-icon-div">
                <Link to="/">
                  <img src={Logout} alt="logout" />
                </Link>

                <Link to="/">
                  <img src={Notification} alt="Notification" />
                </Link>
              </div>
            </div>
          </div>

          <p className="breadcrum-div">
            <span style={{ color: '#543CA1' }}>DASHBOARD&nbsp;</span> <span>&gt; &nbsp;</span>
          </p>
          <p className="date-div" style={{ color: '#7D7D7D' }}>
            {currentDate}
          </p>
          <Upload />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
