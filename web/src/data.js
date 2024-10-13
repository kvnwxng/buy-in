export const organizations = [
    {
        name: 'Zetes',
        groups: [
            {
                group: 'PC21',
                members: [
                    'Zachary Hume',
                    'Alexander Feldman',
                    'Luc Talens',
                    'Alex Lopansri',
                    'Justis Garcia',
                ]
            },
            {
                group: 'PC22',
                members: [
                    "Neo Vargas",
                    "Steven Wade",
                    "Musa Mcdowell",
                    "Haseeb Calhoun",
                    "Kenneth Levy",
                    "Ines Hampton",
                    "Eesa Allen",
                    "Aoife Robles",
                    "Mina Melton",
                    "Wilbur Craig",
                ]
            },
            {
                group: 'PC23',
                members: [
                    'Asa Maddox',
                    'Jake Benson',
                    'Yusuf Riggs',
                    'Frankie Wells',
                    'Johnny Wright',
                    'Blake Vincent',
                    'Keenan Bond',
                    'Kareem Johnston',
                ]
            },
            {
                group: 'PC24',
                members: [
                    'Aoife Keith',
                    'Santiago Mullins',
                    'Mae Dominguez',
                    'Leon Welch',
                    'Taha Quinn',
                    'Seren Peterson',
                    'Seth Salas',
                    'Hamish Moody',
                    'Trey Weiss',
                    'Elijah White',
                    'Samuel Singh',
                    'Abbas Molina',
                    'Kiran Landry',
                    'Anton Sloan',
                ]
            },
            {
                group: 'Unassigned',
                members: [
                    'Samir Spence',
                    'Abdur Browning',
                    'Junaid Young',
                    'Mahir Knowles',

                ]
            }
        ]
    },
    {
        name: 'TKE',
        groups: [
            {
                group: 'PC21',
                members: [
                    'Amin Stephenson',
                    'Johnny Reid',
                    'Khalil Yang',
                    'Lucian Bray',
                    'Dean Parrish',
                    'Sebastian Cobb',
                ]
            },
            {
                group: 'PC22',
                members: [
                    'Lucas Lloyd',
                    'Benjamin Villegas',
                    'Zach Conley',
                    'Saif Lopez',
                    'Clark Levine',
                    'Anthony Matthews',
                    'Rhys Hutchinson',
                    'Jan Coleman',
                    'Derek Lawrence',
                    'Clarence Fox',
                    'Steffan Herrera',
                    'Nikolas Mcintosh',
                    'Corey Cabrera',
                ]
            },
            {
                group: 'PC23',
                members: [
                    'Jack Villegas',
                    'Michael Lester',
                    'Ameer Shaw',
                    'Lewis Robbins',
                    'Woody Perry',
                    'Dan Hubbard',
                    'Sulaiman Melendez',
                    'Nicholas Davidson',
                    'Beau Bray',
                    'Robbie Ward',
                    'Cohen Morgan',
                    'Keenan Gamble',
                    'Jean Mayo',
                    'Will Riley',
                    'Max Griffin',
                    'Craig Mejia',
                ]
            },
            {
                group: 'PC24',
                members: [
                    'Adil Griffith',
                    'Julia Fernandez',
                    'Gideon Reyes',
                    'Moses Bruce',
                    'Arman Joyce',
                    'Esme Martin',
                    'Johnny Mccall',
                    'Lewis Branch',
                    'Aaron Scott',
                    'Maksymilian Molina',
                    'Brodie Garrison',
                    'Logan Macias',
                    'Wilson Spence',
                    'Dawid Arnold',
                    'Andrea Stafford',
                    'Alan Welsh',
                    'Alejandro Trujillo',
                    'Laurie Hebert',
                    'Jared Rowe',
                    'Stanley Palmer',
                ]
            },
            {
                group: 'Unassigned',
                members: [
                    'Conor Bonilla',
                    'Moshe Blackwell',
                    'Benedict Moore',
                ]
            }
        ]
    },
    {
        name: 'Alpha Delts',
        groups: [
            {
                group: 'PC21',
                members: [
                    'Nathaniel Porter',
                    'Duncan Kirk',
                    'Jasper Ford',
                    'Elijah Rowland',
                    'Riley Spencer',
                    'Silas Curtis',
                ]
            },
            {
                group: 'PC22',
                members: [
                    'Felix Tate',
                    'Isaiah Hansen',
                    'Leo Booth',
                    'Maxwell Gardner',
                    'Owen Craig',
                    'Harrison Walton',
                    'Eli Graves',
                    'Chase Chandler',
                    'Simon Carpenter',
                    'Quinn Reeves',
                    'Gabriel Baldwin',
                    'Miles Payne',
                    'Theo Sullivan',
                ]
            },
            {
                group: 'PC23',
                members: [
                    'Hunter Cunningham',
                    'Griffin Moore',
                    'Jude Newton',
                    'Henry Hawkins',
                    'Micah Lynch',
                    'Declan Riley',
                    'Jonah Bishop',
                    'Zane Perkins',
                    'Mason West',
                    'Asher Blake',
                    'Cooper Armstrong',
                    'Emmett Stevens',
                    'Wyatt Cross',
                    'Landon Murray',
                    'Caden Foster',
                    'Nolan Harper',
                ]
            },
            {
                group: 'PC24',
                members: [
                    'Beatrix Johnson',
                    'Eleanor Gray',
                    'Luna Freeman',
                    'Isla Hall',
                    'Clara White',
                    'Hazel Palmer',
                    'Violet Stone',
                    'Stella Franklin',
                    'Olivia Powell',
                    'Evelyn Collins',
                    'Ivy Ellis',
                    'Aurora Robinson',
                    'Lily Fisher',
                    'Harper Hayes',
                    'Lucy Brooks',
                    'Charlotte Hughes',
                    'Scarlett Matthews',
                    'Aria Kennedy',
                    'Sophie James',
                    'Penelope Bennett',
                ]
            },
            {
                group: 'Unassigned',
                members: [
                    'Benjamin Russell',
                    'Alexander Wells',
                    'Dominic Webster',
                ]
            }
        ]
    }
]

// Accounts Data Structure
export const accounts = [
    {
        accountType: 'individual',
        username: 'john_doe',
        email: 'john@example.com',
        bio: 'Brother at TKE Fraternity, loves to party!',
        organization: 'TKE', // Organization the individual belongs to
        group: 'PC21' // Specific group/PC within the organization
    },
    {
        accountType: 'organization',
        name: 'TKE',
        email: 'contact@tke.org',
        description: 'TKE Fraternity focuses on leadership and brotherhood.',
        foundedYear: 1899,
        banner: 'https://www.greekrank.com/images/articles/article20151108/bestfratpartiesimage.jpg', // Banner for organization account
    },
    {
        accountType: 'individual',
        username: 'alex_smith',
        email: 'alex@example.com',
        bio: 'Future frat president, engineering major.',
        organization: 'TKE', // Organization the individual belongs to
        group: 'PC22' // Specific group/PC within the organization
    },
    {
        accountType: 'organization',
        name: 'Alpha Delts',
        email: 'contact@alphadelts.org',
        description: 'Alpha Delta Fraternity is built on tradition and academic success.',
        foundedYear: 1859,
        banner: 'https://www.greekrank.com/images/articles/article20151108/bestfratpartiesimage.jpg', // Banner for organization account
    },
];

export const tempOrg = [
    {
        group: 'PC21',
        members: [
            'Zachary Hume',
            'Alexander Feldman',
            'Luc Talens',
            'Alex Lopansri',
            'Justis Garcia',
        ]
    },
    {
        group: 'PC22',
        members: [
            "Neo Vargas",
            "Steven Wade",
            "Musa Mcdowell",
            "Haseeb Calhoun",
            "Kenneth Levy",
            "Ines Hampton",
            "Eesa Allen",
            "Aoife Robles",
            "Mina Melton",
            "Wilbur Craig",
        ]
    },
    {
        group: 'PC23',
        members: [
            'Asa Maddox',
            'Jake Benson',
            'Yusuf Riggs',
            'Frankie Wells',
            'Johnny Wright',
            'Blake Vincent',
            'Keenan Bond',
            'Kareem Johnston',
        ]
    },
    {
        group: 'PC24',
        members: [
            'Aoife Keith',
            'Santiago Mullins',
            'Mae Dominguez',
            'Leon Welch',
            'Taha Quinn',
            'Seren Peterson',
            'Seth Salas',
            'Hamish Moody',
            'Trey Weiss',
            'Elijah White',
            'Samuel Singh',
            'Abbas Molina',
            'Kiran Landry',
            'Anton Sloan',
        ]
    },
    {
        group: 'Unassigned',
        members: [
            'Samir Spence',
            'Abdur Browning',
            'Junaid Young',
            'Mahir Knowles',

        ]
    }
]