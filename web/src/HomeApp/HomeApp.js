import React, { useState } from 'react';
import Card from './Card.js';
import PopupContentGroup from './PopupContentGroup.js';
import { organizations } from '../data.js';

import '../../public/homeappstyle.css';

export default function HomeApp(props) {
    const [popup, setPopup] = useState();

    const togglePopup = (data) => {
        props.toggleDarkenScreen();
        setPopup(data);
    }

    const hosting = [
        {
            name: 'Patriots',
            date: 'September 5',
            start: '9:30PM',
            end: '12:00AM',
            address: '123 Innovation Drive, Seattle, WA 98101',
            guests: 38,
            invited: [
                organizations[0],
                organizations[1],
                organizations[2],
            ]
        },
        {
            name: 'Patriots',
            date: 'September 5',
            start: '9:30PM',
            end: '12:00AM',
            address: '123 Innovation Drive, Seattle, WA 98101',
            guests: 38,
            invited: [
                organizations[0],
                organizations[1],
                organizations[2],
            ]
        },
    ]

    const attending = [
        {
            name: 'House Party',
            date: 'October 20',
            start: '7:00PM',
            end: '10:00PM',
            address: '3451 17th Ave NE, Seattle, WA 98105',
            guests: 65,
        },
        {
            name: 'Halloween Party',
            date: 'October 31',
            start: '10:00PM',
            end: '2:00AM',
            address: '8392 33rd St, Renton, WA 98101',
            guests: 32,
        },
        {
            name: "Aaron's Birthday",
            date: 'November 312',
            start: '3:00PM',
            end: '6:00PM',
            address: '9543 12th Ave NE, Seattle, WA 98105',
            guests: 18,
        },

    ]

    return (
        <div className="homeApp">
            <div className="homeAppContent">
                {eventGroupContainer(hosting, "Hosting", props, togglePopup, popup)}
                {eventGroupContainer(attending, "Attending", props, togglePopup, popup)}
            </div>
        </div>
    )
}

function eventGroupContainer(events, title, props, togglePopup, popup) {
    return (
        <>
            <div
                className="eventCardInvitedPopup"
                style={{ height: popup ? '40em' : 0 }}

            >
                {popup && popupContent(popup, togglePopup)}

            </div>
            <div className='eventGroupContainer'>
                <p className="homeAppH1">{title}</p>
                <div className="eventCardContainer">
                    {events.length > 0 ?
                        events.map((event, index) =>
                        (<Card
                            event={event}
                            key={index}
                            attending={title == 'Attending'}
                            togglePopup={togglePopup}
                            {...props}
                        />)
                        )
                        :
                        <p className="emptyEvents">Doesn't look like you've got anything planned :(</p>}
                </div>
            </div>
        </>

    )
}

function popupContent(popup, togglePopup) {
    return (
        <>
            <div className="eventCardPopupTopContainer">
                <p>Invite from {popup.name}</p>
                <img
                    src={'./icons/close.png'}
                    className="eventCardPopupClose"
                    onClick={() => togglePopup(null)}
                />
            </div>
            <div className='inviteOrgContainer'>
                {popup.groups.map((group, index) => (
                    <PopupContentGroup
                        group={group}
                        index={index}
                        key={index}
                    />
                ))}
            </div>
        </>

    )
}