import React from 'react';

export default function Filter(props) {

    return (
        <div className='orgFilter'>
            <Sort {...props} />
            <SearchBar {...props} />
        </div>
    )
}


function SearchBar(props) {

    const handleSearchChange = (e) => {
        props.setNameFilter(e.target.value);
    };

    return (
        <div className='orgSearchBar'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
            >
                <path d="M771.69-134.92 531.46-375.16q-30 21.77-70.29 33.77-40.29 12-79.37 12-103.58 0-176.11-72.51-72.53-72.51-72.53-176.04 0-103.52 72.51-176.1 72.51-72.57 176.04-72.57 103.52 0 176.1 72.53 72.57 72.53 72.57 176.11 0 40.23-11.38 78.02-11.39 37.8-33.39 68.64l241.23 241.23-55.15 55.16ZM381.77-407.38q72.31 0 121.46-49.16 49.16-49.15 49.16-121.46t-49.16-121.46q-49.15-49.16-121.46-49.16t-121.46 49.16Q211.15-650.31 211.15-578t49.16 121.46q49.15 49.16 121.46 49.16Z" />
            </svg>
            <input
                type="text"
                onChange={handleSearchChange}
                placeholder="search"
            />
        </div>
    );
}

function Sort(props) {
    const handleSelect = (e) => {
        props.setSortFilter(e.target.value);
    }
    
    return (
        <select onChange={handleSelect}>
            <option value="AZ">Sort By: A-Z</option>
            <option value="ZA">Sort By: Z-A</option>
            <option value="Group">Sort By: Groups</option>
        </select>
    )

}