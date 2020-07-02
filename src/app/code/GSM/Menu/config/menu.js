var mainMenu = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Menu',
        path: '#',
        items: [
            {
                name: 'Sub Menu',
                path: '#',
                items: [
                    {
                        name: 'About',
                        path: '/about'
                    },
                    {
                        name: 'Users',
                        path: '/users'
                    }
                ]
            }
        ]
    }
];

export default {
    mainMenu: mainMenu
};