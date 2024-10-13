import React from 'react';
import Page from './Page.js';

import '../../public/headerstyle.css';

const pagesLeft = [
    "My Events",
    "Search",
    "Create Event",
    "Organization",
    "Account"
];

const pagesRight = [
]

export default function Header({ state, setState, setToken }) {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={'./icons/logo.png'} alt='Ignite Logo' />
            </div>
            <div className='pages'>
                {pagesLeft.map((element, index) => (
                    <Page
                        setState={setState}
                        key={index}
                        page={element}
                        active={state == element}
                    />
                ))}
            </div>
            <div className='logout'>
                {pagesRight.map((element, index) => (
                    <Page
                        setState={setState}
                        key={index}
                        page={element}
                    />
                ))}
                <Page
                    page={"Logout"}
                    setToken={setToken}
                />
            </div>
        </div>
    );
}
