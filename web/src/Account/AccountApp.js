import React, { useState } from 'react';
import { accounts } from '../data';

import '../../public/account.css';

export default function AccountApp({ account, setState }) {
    return (
        <div className="accountApp">
            {profileSection(account)}
            {account.accountType === 'individual' ? (
                <div className="accountSections">
                    <AccountSection title="Account Settings">
                        <p>Update your username, email, or password here.</p>
                        <StyledButton text="Edit Settings" />
                    </AccountSection>
                    <AccountSection title="Notification">
                        <p>Manage how you receive notifications from the app.</p>
                        <StyledButton text="Edit Notifications" />
                    </AccountSection>
                    <AccountSection title="Security">
                        <p>Update two-factor authentication or password settings.</p>
                        <StyledButton text="Edit Security" />
                    </AccountSection>
                    <AccountSection title="Hosting History">
                        <p>View events you have hosted in the past.</p>
                    </AccountSection>
                    <AccountSection title="Attendance History">
                        <p>See events you've attended.</p>
                    </AccountSection>
                </div>
            ) : (
                <div className="accountSections">
                    <AccountSection title="Organization Information">
                        <p>{account.description}</p>
                    </AccountSection>
                    <AccountSection title="Membership Management">
                        <p>View and manage the members of your organization here.</p>
                        <StyledButton 
                            text="Manage Members" 
                            onClick={() => setState('Organization')}  // Wrap setState in an arrow function
                        />                    </AccountSection>
                    <AccountSection title="Event Management">
                        <p>View and manage events hosted by your organization.</p>
                        <StyledButton text="Manage Events" />
                    </AccountSection>
                    <AccountSection title="Branding">
                        <p>Update the banner image, logo, and organization details to align with your branding.</p>
                        <StyledButton text="Edit Branding" />
                    </AccountSection>
                    <AccountSection title="Contact Details">
                        <p>Email: {account.email}</p>
                        <p>Founded Year: {account.foundedYear}</p>
                        <StyledButton text="Edit Contact Information" />
                    </AccountSection>
                </div>
            )}
        </div>
    );
}

function profileSection(account) {
    // Determine the banner image for individual or organization
    const bannerImage = account.accountType === 'individual'
        ? getOrganizationBanner(account.organization) || 'assets/default_banner.jpg' // If individual, get the organization banner if available
        : account.banner || getOrganizationBanner(account.name) || 'assets/default_banner.jpg'; // If organization, get its specific banner or default

    return (
        <div className="profileSection">
            <div 
                className="bannerImage"
                style={{ backgroundImage: `url(${bannerImage})` }}
            />
            <div className="profileDetails">
                {account.accountType === 'individual' ? (
                    <>
                        <h1 className="profileName">{account.name || account.username}</h1>
                        <p className="profileUsername">@{account.username}</p>
                        <p className="profileBio">{account.bio ? account.bio : 'Add bio'}</p>
                        <p className="profileAffiliation">
                            {account.organization && `${account.organization}, ${account.group}`}
                        </p>
                    </>
                ) : (
                    <>
                        <h1 className="profileName">{account.name}</h1>
                        <p className="profileDescription">{account.description}</p>
                    </>
                )}
            </div>
        </div>
    );
}

function AccountSection({ title, children }) {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="accountSection">
            <div className="accountSectionHeader" onClick={toggleCollapse}>
                <h2>{title}</h2>
                <button>{isCollapsed ? '▼' : '▲'}</button>
            </div>
            <div className="accountSectionContent" style={{ display: isCollapsed ? 'none' : 'block' }}>
                {children}
            </div>
        </div>
    );
}

function StyledButton({ text }) {
    return (
        <button className="styledButton">
            {text}
        </button>
    );
}

function getOrganizationBanner(organizationName) {
    const organization = accounts.find(org => org.name === organizationName);
    return organization ? organization.banner : 'assets/default_banner.jpg';
}