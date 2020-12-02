console.log('hello', Vue);

var app = new Vue({
    el: '#app',
    data: {
        // Array Menu Nav Bar
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

        ],
        // Shop by brand Links
        shops: [
            {
                name: 'Bed',
                link: '#'
            },
            {
                name: 'Food',
                link: '#'
            },
            {
                name: 'Toys',
                link: '#'
            },
            {
                name: 'Transport',
                link: '#'
            },
        ],
        // Useful links
        links: [
            {
                name: 'My account',
                link: '#'
            },
            {
                name: 'orders',
                link: '#'
            },
            {
                name: 'Checkout',
                link: '#'
            },
            {
                name: 'Cart',
                link: '#'
            },
        ],
        // Section Footer
        footerNavs: [
            {
                name: 'Home',
                link: '#'
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
                name: 'Shop',
                link: '#'
            },
        ],
        // Social Link
        socials: [
            {
                name: 'Facebook',
                link: 'https://it-it.facebook.com/',
                icon: 'fab fa-facebook-f'
            }, 
            {
                name: 'Twitter',
                link: 'https://twitter.com/login?lang=it',
                icon: 'fab fa-twitter',
            },
            {
                name: 'Instagram',
                link: 'https://www.instagram.com/',
                icon: 'fab fa-instagram',
            },
            {
                name: 'Youtube',
                link: 'https://www.youtube.com/',
                icon: 'fab fa-youtube',
            },
        ],
        // Data email for newsletter
        subscribe: '',
    }, // <<< end Data
    methods: {
        // subscribe to newsletter
        subEmail(){
            alert('Email inviata al seguente indirizzo: ' + this.subscribe)
        }
    }

    
})