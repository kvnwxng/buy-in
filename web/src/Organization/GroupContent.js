import React, { useState, useRef } from "react";

export default function GroupContent({ group, nameFilter }) {
    const [isCollapsed, setIsCollapsed] = useState(true);
    const membersRef = useRef(null);

    // Function to toggle collapse
    const toggleCollapsed = () => {
        setIsCollapsed(!isCollapsed);
    };

    const members = [...group.members];

    // Sorting members in ascending order (A-Z)
    const sortedStudents = members.slice().sort((a, b) => {
        return a.localeCompare(b);  // Ascending order
    });

    // Filter and sort members based on nameFilter
    const filteredAndSortedStudents = sortedStudents.filter(student =>
        student.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return (
        <div className="orgGroupContainer">
            <div 
                className="orgGroupContainerTop"
                onClick={toggleCollapsed}
            >
                <p>{group.group}</p>
                <div className="orgGroupContainerDetails">
                    <div className="orgGroupContainerDetailsPeople">
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
                className="orgGroupMembersContainer"
                ref={membersRef}
                style={{
                    height: isCollapsed ? '0px' : `${membersRef.current?.scrollHeight + 10}px`,
                    paddingBottom: isCollapsed ? '0px' : '15px',
                }}
            >
                {filteredAndSortedStudents.map((member, idx) => (
                    <div key={idx} className="orgGroupMember">
                        <div className="orgGroupMemberLeft">
                            <div className="orgGroupMemberLeftPFP">
                                {member.substring(0, 1)}
                            </div>
                            <p>{member}</p>
                        </div>
                        <button>Manage</button>
                    </div>
                ))}
            </div>
        </div>
    );
}
