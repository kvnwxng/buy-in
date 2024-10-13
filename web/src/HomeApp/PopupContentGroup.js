import React, { useState, useRef } from "react";

export default function PopupContentGroup({ group, index }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const membersRef = useRef(null);

    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <>
            <div className="inviteOrgGroupContainer">
                <div className="inviteOrgGroupContainerTop">
                    <p>{group.group}</p>
                    <div className="inviteOrgGroupContainerDetails">
                        <div className="inviteOrgGroupContainerDetailsPeople">
                            <p>{group.members.length}</p>
                            <img src={'./icons/user.png'} alt="user icon" />
                        </div>
                        <img
                            src={isCollapsed ? './icons/dropdowndown.png' : './icons/dropdownup.png'}
                            alt="toggle icon"
                            onClick={toggleCollapsed}
                        />
                    </div>
                </div>
                <div
                    className="inviteOrgGroupMembersContainer"
                    ref={membersRef}
                    style={{
                        height: isCollapsed ? '0px' : `${membersRef.current?.scrollHeight + 10}px`,
                        paddingBottom: isCollapsed ? '0px' : '15px',
                    }}
                >
                    {group.members.map((member, idx) => (
                        <div key={idx} className="inviteOrgGroupMember">
                            <p>{member}</p>
                            {Math.random() > 0.5 ? (
                                <button style={{ backgroundColor: '#219EBC', color: '#000' }}>
                                    Invited
                                </button>
                            ) : (
                                <button>Invite</button>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
