console.log('hello', Vue);

var app = new Vue({
    el: '#app',
    data: {
        sections: [
            {
                name: 'Home',
                subMenu: [
                    {
                        nameMenu: 'lorem'

                    },
                ],
            },
            {
                name: 'Shop',
                subMenu: [
                    {
                        nameMenu: 'lorem'

                    },
                ],
            },
            {
                name: 'About',
                link: 'https://www.google.com/'
            },
            {
                name: 'Blog',
                link: 'https://www.google.com/'
            },
            {
                name: 'Contact',
                link: 'https://www.google.com/'
            },
            {
                name: 'Shop by brand',
                subMenu: [
                    {
                        nameMenu: 'lorem'

                    },
                ],
            },

        ]
    }
    
})