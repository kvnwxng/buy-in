import React, { useState } from "react";
import GroupContent from "./GroupContent";
import { tempOrg } from "../data";
import Filter from "./Filter";

import '../../public/organizationapp.css';

export default function OrganizationApp() {
    const [sortFilter, setSortFilter] = useState("AZ");
    const [nameFilter, setNameFilter] = useState("");


    return (
        <div className="organizationApp">
            <div className="organizationAppContent">
                <div className="orgFilterBar">
                    <Filter
                        sortFilter={sortFilter}
                        setSortFilter={setSortFilter}
                        setNameFilter={setNameFilter}
                    />
                </div>
                <div className="orgContainer">
                    {orgAppHelper(tempOrg, sortFilter, nameFilter)}
                </div>
            </div>
        </div>
    )
}

function orgAppHelper(tempOrg, sortFilter, nameFilter) {
    if (sortFilter == "AZ") {
        let members = [];
        tempOrg.map((group, index) => {
            members = [...members, ...group.members];
        })

        const sortedStudents = members.slice().sort((a, b) => {
            if (a && b) {
                return a.localeCompare(b);
            } else if (a) {
                return -1;
            } else if (b) {
                return 1;
            } else {
                return 0;
            }
        });

        const filteredAndSortedStudents = sortedStudents.filter(student =>
            student.toLowerCase().includes(nameFilter.toLowerCase())
        );

        return (
            <div className="orgGroupMembersContainer">
                {filteredAndSortedStudents.map((member, index) => {
                    return (
                        <div key={index} className="orgGroupMember">
                            <div className="orgGroupMemberLeft">
                                <div className="orgGroupMemberLeftPFP">
                                    {member.substring(0, 1)}
                                </div>
                                <p>{member}</p>
                            </div>
                            <button>Manage</button>
                        </div>
                    )
                })}
            </div>
        )
    } else if (sortFilter == "ZA") {
        let members = [];
        tempOrg.map((group, index) => {
            members = [...members, ...group.members];
        })

        const sortedStudents = members.slice().sort((b, a) => {
            if (a && b) {
                return a.localeCompare(b);
            } else if (a) {
                return -1;
            } else if (b) {
                return 1;
            } else {
                return 0;
            }
        });

        const filteredAndSortedStudents = sortedStudents.filter(student =>
            student.toLowerCase().includes(nameFilter.toLowerCase())
        );

        return (
            <div className="orgGroupMembersContainer">
                {filteredAndSortedStudents.map((member, index) => {
                    return (
                        <div key={index} className="orgGroupMember">
                            <div className="orgGroupMemberLeft">
                                <div className="orgGroupMemberLeftPFP">
                                    {member.substring(0, 1)}
                                </div>
                                <p>{member}</p>
                            </div>
                            <button>Manage</button>
                        </div>
                    )
                })}
            </div>
        )
    } else if (sortFilter == "Group") {
        return tempOrg.map((group, index) => (
            <GroupContent
                group={group}
                nameFilter={nameFilter}
                key={index}
            />
        ));
    } else {
        console.log('yo filter is again cooked by brotha');
    }
}

function GroupContentTest({ group, sortFilter, nameFilter }) {
    console.log('cp1');

    // const [isCollapsed, setIsCollapsed] = useState(true);
    // const membersRef = useRef(null);

    // console.log('cp1');

    // const toggleCollapsed = () => {
    //     setIsCollapsed(!isCollapsed);
    // };

    // return (
    //     <>
    //         <div className="orgGroupContainer">
    //             <div 
    //                 className="orgGroupContainerTop"
    //                 onClick={toggleCollapsed}
    //             >
    //                 <p>{group.group}</p>
    //                 <div className="orgGroupContainerDetails">
    //                     <div className="orgGroupContainerDetailsPeople">
    //                         <p>{group.members.length}</p>
    //                         <img src={'./icons/user.png'} alt="user icon" />
    //                     </div>
    //                     <img
    //                         src={isCollapsed ? './icons/dropdowndown.png' : './icons/dropdownup.png'}
    //                         alt="toggle icon"
    //                         onClick={toggleCollapsed}
    //                     />
    //                 </div>
    //             </div>
    //             <div
    //                 className="orgGroupMembersContainer"
    //                 ref={membersRef}
    //                 style={{
    //                     height: isCollapsed ? '0px' : `${membersRef.current?.scrollHeight + 10}px`,
    //                     paddingBottom: isCollapsed ? '0px' : '15px',
    //                 }}
    //             >
    //                 {group.members.map((member, idx) => (
    //                     <div key={idx} className="orgGroupMember">
    //                         <div className="orgGroupMemberLeft">
    //                             <div className="orgGroupMemberLeftPFP">
    //                                 {member.substring(0, 1)}
    //                             </div>
    //                             <p>{member}</p>
    //                         </div>
    //                         <button>Manage</button>
    //                     </div>
    //                 ))}
    //             </div>
    //         </div>
    //     </>
    // );
}
