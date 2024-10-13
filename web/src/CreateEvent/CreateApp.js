import React, { useState, useRef, useEffect } from 'react';
import '../../public/createevent.css';
import { organizations, accounts } from '../data';

export default function CreateEventApp({ currentUserAccount }) {
    if (currentUserAccount.accountType !== 'organization') {
        return (
            <div className="error-container">
                <h2>Oops! You can't create an event</h2>
                <p>Only organization accounts are allowed to create events.</p>
                <p>If you believe this is a mistake, please contact support.</p>
            </div>
        );
    }

    const [eventName, setEventName] = useState('');
    const [eventImage, setEventImage] = useState(null);
    const [date, setDate] = useState('');
    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [address, setAddress] = useState('');
    const [description, setDescription] = useState('');
    const [invitedOrganizations, setInvitedOrganizations] = useState([]);
    const [selectedOrg, setSelectedOrg] = useState(null);
    
    const inviteSelectRef = useRef(null);

    const handleEventCreate = () => {
        console.log('Event Created:', { 
            eventName, date, startTime, endTime, address, description, invitedOrganizations 
        });
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEventImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddOrganization = (orgName) => {
        if (!invitedOrganizations.some(org => org.name === orgName) && orgName !== '') {
            setInvitedOrganizations([...invitedOrganizations, { name: orgName, groups: [], members: [] }]);
            if (inviteSelectRef.current) {
                inviteSelectRef.current.value = '';
            }
        }
    };

    const handleRemoveOrganization = (orgName) => {
        setInvitedOrganizations(invitedOrganizations.filter(org => org.name !== orgName));
    };

    const handleSelectOrganization = (orgName) => {
        setSelectedOrg(orgName);
    };

    const handleToggleGroup = (groupName) => {
        const org = organizations.find(o => o.name === selectedOrg);
        const groupMembers = org?.groups.find(g => g.group === groupName)?.members || [];

        setInvitedOrganizations(invitedOrganizations.map(org => 
            org.name === selectedOrg
                ? { 
                    ...org, 
                    groups: org.groups.includes(groupName)
                        ? org.groups.filter(g => g !== groupName)
                        : [...org.groups, groupName],
                    members: org.groups.includes(groupName)
                        ? org.members.filter(m => !groupMembers.includes(m))
                        : [...new Set([...org.members, ...groupMembers])]
                  }
                : org
        ));
    };

    const handleToggleMember = (memberName) => {
        setInvitedOrganizations(invitedOrganizations.map(org => 
            org.name === selectedOrg
                ? { 
                    ...org, 
                    members: org.members.includes(memberName)
                        ? org.members.filter(m => m !== memberName)
                        : [...org.members, memberName]
                  }
                : org
        ));
    };

    const isGroupPartiallySelected = (orgName, groupName) => {
        const org = invitedOrganizations.find(o => o.name === orgName);
        const groupMembers = organizations.find(o => o.name === orgName)?.groups.find(g => g.group === groupName)?.members || [];
        return org.members.some(m => groupMembers.includes(m)) && !org.groups.includes(groupName);
    };

    const isGroupFullySelected = (orgName, groupName) => {
        const org = invitedOrganizations.find(o => o.name === orgName);
        return org.groups.includes(groupName);
    };

    useEffect(() => {
        if (selectedOrg) {
            const updatedOrg = { ...invitedOrganizations.find(org => org.name === selectedOrg) };
            const orgData = organizations.find(org => org.name === selectedOrg);

            orgData.groups.forEach(group => {
                const allMembersSelected = group.members.every(member => updatedOrg.members.includes(member));
                if (allMembersSelected && !updatedOrg.groups.includes(group.group)) {
                    updatedOrg.groups.push(group.group);
                } else if (!allMembersSelected && updatedOrg.groups.includes(group.group)) {
                    updatedOrg.groups = updatedOrg.groups.filter(g => g !== group.group);
                }
            });

            setInvitedOrganizations(invitedOrganizations.map(org => 
                org.name === selectedOrg ? updatedOrg : org
            ));
        }
    }, [invitedOrganizations, selectedOrg]);

    return (
        <div className="createEventApp">
            <div className="eventForm card">
                <div className="formBanner">
                    <div className="bannerUpload">
                        {eventImage ? (
                            <img src={eventImage} alt="Event Banner" className="bannerImage" />
                        ) : (
                            <div className="bannerPlaceholder">
                                <label htmlFor="bannerUploadInput" className="bannerUploadButton">
                                    <span>+</span>
                                    <p>Upload Image</p>
                                </label>
                                <input
                                    id="bannerUploadInput"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                    style={{ display: 'none' }}
                                />
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="formContainer">
                    <div className="formField hostField">
                        <label>Host Organization</label>
                        <div className="hostContainer">
                            <div className="host">
                                <img
                                    src={currentUserAccount.banner || `https://via.placeholder.com/40?text=${currentUserAccount.name.charAt(0)}`}
                                    alt={currentUserAccount.name}
                                    className="hostAvatar"
                                />
                                <span>{currentUserAccount.name}</span>
                            </div>
                        </div>
                    </div>

                    <div className="formField">
                        <label>Event Name</label>
                        <input
                            type="text"
                            value={eventName}
                            onChange={(e) => setEventName(e.target.value)}
                            placeholder="Event Name"
                        />
                    </div>

                    <div className="formField">
                        <label>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="formField timeField">
                        <label>Start Time</label>
                        <input
                            type="time"
                            value={startTime}
                            onChange={(e) => setStartTime(e.target.value)}
                        />
                    </div>

                    <div className="formField timeField">
                        <label>End Time</label>
                        <input
                            type="time"
                            value={endTime}
                            onChange={(e) => setEndTime(e.target.value)}
                        />
                    </div>

                    <div className="formField">
                        <label>Address</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            placeholder="Address"
                        />
                    </div>

                    <div className="formField">
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            placeholder="Event Description"
                        />
                    </div>

                    <div className="formField inviteField">
                        <label>Invite Organizations</label>
                        <select 
                            onChange={(e) => handleAddOrganization(e.target.value)}
                            ref={inviteSelectRef}
                        >
                            <option value="">Select an Organization</option>
                            {organizations
                                .filter(org => org.name !== currentUserAccount.name && !invitedOrganizations.some(invited => invited.name === org.name))
                                .map((org, index) => (
                                    <option key={index} value={org.name}>
                                        {org.name}
                                    </option>
                                ))
                            }
                        </select>
                        <div className="invitedOrgsContainer">
                            {invitedOrganizations.map((org, index) => (
                                <div key={index} className="invitedOrgTag">
                                    <span>{org.name}</span>
                                    <button className="removeButton" onClick={() => handleRemoveOrganization(org.name)}>×</button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {invitedOrganizations.length > 0 && (
                        <div className="formField detailSelection">
                            <label>Select Groups/Members</label>
                            <select onChange={(e) => handleSelectOrganization(e.target.value)}>
                                <option value="">Select an Organization</option>
                                {invitedOrganizations.map((org, index) => (
                                    <option key={index} value={org.name}>
                                        {org.name}
                                    </option>
                                ))}
                            </select>
                            {selectedOrg && (
                                <div className="selectionContainer">
                                    <div className="groupSelection">
                                        <h4>Groups</h4>
                                        {organizations.find(org => org.name === selectedOrg)?.groups.map((groupData, idx) => (
                                            <div key={idx} className="groupCheckbox">
                                                <input
                                                    type="checkbox"
                                                    id={`${selectedOrg}-${groupData.group}`}
                                                    checked={isGroupFullySelected(selectedOrg, groupData.group)}
                                                    onChange={() => handleToggleGroup(groupData.group)}
                                                />
                                                <label htmlFor={`${selectedOrg}-${groupData.group}`}>
                                                    {groupData.group}
                                                    {isGroupPartiallySelected(selectedOrg, groupData.group) && (
                                                        <span className="partialSelection"> (Partial)</span>
                                                    )}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="memberSelection">
                                        <h4>Members</h4>
                                        {organizations.find(org => org.name === selectedOrg)?.groups.flatMap(group => group.members).map((member, idx) => (
                                            <div key={idx} className="memberCheckbox">
                                                <input
                                                    type="checkbox"
                                                    id={`${selectedOrg}-${member}`}
                                                    checked={invitedOrganizations.find(org => org.name === selectedOrg).members.includes(member)}
                                                    onChange={() => handleToggleMember(member)}
                                                />
                                                <label htmlFor={`${selectedOrg}-${member}`}>{member}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="buttonsContainer">
                        <button className="styledButton createButton" onClick={handleEventCreate}>Create Event</button>
                    </div>
                </div>
            </div>
        </div>
    );
}