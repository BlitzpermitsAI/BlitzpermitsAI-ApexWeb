import React from 'react';

function Searchbar(){

return (
    <div className='search-bar-div'>
        <svg className='search-icon' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 18C14.6421 18 18 14.6421 18 10.5C18 6.35786 14.6421 3 10.5 3C6.35786 3 3 6.35786 3 10.5C3 14.6421 6.35786 18 10.5 18Z" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M21 21L15.8 15.8" stroke="#7D7D7D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
        <input
        className='searchbar'
        type="search"
        placeholder="Search"
    />
    </div>
)
}
export default Searchbar;