import React, { useState } from 'react';

export default function Card(props) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const { event, attending, togglePopup } = props;

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    }

    return (
        <div className="eventCard">
            {eventCardMain(event, attending, toggleCollapse)}
            {event.invited && event.invited.length > 0 &&
                eventCardInvite(event, isCollapsed, togglePopup)
            }
        </div>
    );
}

function eventCardMain(event, attending, toggleCollapse) {
    return (
        <div className="eventCardMain">
            <div className="cardTopContent">
                <div className="cardTitle">
                    <p>{event.name}</p>
                </div>
                <div className="cardDetails">
                    <p>{event.date}</p>
                    <p>{event.start} - {event.end}</p>
                </div>
            </div>
            <div className="cardBottomContent">
                <p>{event.address}</p>
                <div className="cardBottomBar">
                    <p>{event.guests} Guests</p>
                    <>
                        {attending ?
                            <>
                                <button>Assign Guests</button>
                                <button>Guest List</button>
                            </> : <button onClick={toggleCollapse}>Invite</button>}
                    </>
                </div>
            </div>
        </div>
    )
}

function eventCardInvite(event, isCollapsed, togglePopup) {
    return (
        <div
            className="eventCardInvited"
            style={{
                width: isCollapsed ? '0px' : '100%',
                padding: isCollapsed ? '0' : '0 10px',
            }}
        >
            {event.invited.map((group, index) => (
                <div key={index} className='invitedContainer'>
                    <div className="invitedMemberContainer">
                        <p>{group.name}</p>
                        <div className="invitedMemberContainerDetails">
                            <p>38 Guests</p>
                            <button onClick={() => togglePopup(group)}>Edit</button>
                        </div>
                    </div>
                </div>
            ))}
            <div className='invitedContainer'>
                <div className="invitedMemberContainer" style={{ borderBottomStyle: 'none' }}>
                    <div style={{ display: "flex", flexDirection: "row", gap: "8px" }}>
                        <img src={'./icons/plus_circle.png'} alt="+"></img>
                        <p>Add Organizations</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
