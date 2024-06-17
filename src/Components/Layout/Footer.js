import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
        <>
        <div className='copyright-text'>
            <p>&copy; {currentYear} BlitzPermits.AI. All rights reserved.</p>
        </div>
        </>
    )
}

export default Footer;