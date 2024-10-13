import React, { useState, useRef } from 'react';
import HeaderApp from './header/HeaderApp.js';
import HomeApp from './HomeApp/HomeApp.js';
import AccountApp from './Account/AccountApp.js';
import CreateEventApp from './CreateEvent/CreateApp.js';
import OrganizationApp from './Organization/OrganizationApp.js';
import { accounts } from './data';

function App() {
    const [state, setState] = useState('Organization');
    const [darkenScreen, setDarkenScreen] = useState(false)
    const entireScreenRef = useRef(null);


    // Simulate the current user index (in a real-world scenario, this would come from a login or user session)
    const currentUserIndex = 1; // Set to the index of the current user's account
    const currentUserAccount = accounts[currentUserIndex]; // Get the current .user's account


    const toggleDarkenScreen = () => {
        setDarkenScreen(!darkenScreen);
    }


    let stateApp;
    switch (state) {
        case ('My Events'):
            stateApp = (
                <HomeApp
                    toggleDarkenScreen={toggleDarkenScreen}
                />
            )
            break;
        case ('Organization'):
            stateApp = (
                <OrganizationApp
                    toggleDarkenScreen={toggleDarkenScreen}
                />
            )
            break;
        case ('Account'):
            stateApp = (
                <AccountApp
                    account={currentUserAccount}
                    setState={setState}
                />
            )
            break;
        case ('Create Event'):
            stateApp = (
                <CreateEventApp 
                    currentUserAccount={currentUserAccount}
                />
            )
            break;
        default:
            console.log("your state isn't being set");
    }

    return (
        <div className='app'>
            <div
                className="entireScreen"
                ref={entireScreenRef}
                style={{ height: darkenScreen ? '100%' : '0' }}
            ></div>
            <HeaderApp
                state={state}
                setState={setState}
            //setToken={setToken}
            />
            <div className='display'>
                <div className="pageHeader">
                    <p>{state}</p>
                    <hr />
                </div>
                {stateApp}
            </div>
        </div>
    )
}

export default App;
