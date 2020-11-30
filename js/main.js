console.log('hello', Vue);

var app = new Vue({
    el: '#app',
    data: {
        sections: [
            {
                name: 'Home',
                link: '#',
                subMenu: [
                    {
                        nameMenu: 'lorem'

                    },
                ],
            },
            {
                name: 'Shop',
                link: '#',
                subMenu: [
                    {
                        nameMenu: 'lorem'

                    },
                ],
            },
            {
                name: 'About',
                link: '#'
            },
            {
                name: 'Blog',
                link: '#'
            },
            {
                name: 'Contact',
                link: '#'
            },
            {
                name: 'Shop by brand',
                link: '#',
                subMenu: [
                    {
                        nameMenu: 'lorem'

                    },
                ],
            },

        ]
    }
    
})