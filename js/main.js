console.log('hello', Vue);

var app = new Vue({
    el: '#app',
    data: {
        //
        activeMenu: 0,
        // Array Menu Nav Bar
        sections: [
            {
                name: 'Home',
                link: '#',
                subMenu: [
                    'Home - Alternate',
                ],
                isActive: false,
            },
            {
                name: 'Shop',
                link: '#',
                subMenu: [
                        'Shop no sidebar',
                        'Shop single sidebar',
                        'Shop dual sidebar',
                ],
                isActive: false,
            },
            {
                name: 'About',
                link: '#',
                subMenu: [],
            },
            {
                name: 'Blog',
                link: '#',
                subMenu: [],
            },
            {
                name: 'Contact',
                link: '#',
                subMenu: [],
            },
            {
                name: 'Shop by brand',
                link: '#',
                subMenu: [
                            'Frozen',
                            'Kibble',
                            'Moist',
                ],
                isActive: false,
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
        isSubscribed: false,
    }, // <<< end Data
    methods: {
        // Navigate nav top menu
        toggleNav(index){
                // Check which is the menu open
                this.sections[index].isActive = !this.sections[index].isActive;
                // Check bolder for active menu
                this.activeMenu = index;
                // Close all the other menu
                if (this.sections[index].isActive === true){
                    for (i = 0; i < this.sections.length; i++){
                        if (i !== index){
                            this.sections[i].isActive = false;
                        };
                    };
                };
        },
        // subscribe to newsletter
        subEmail(){
            // alert('Email inviata al seguente indirizzo: ' + this.subscribe);
            this.isSubscribed = true;
        },
        // Scroll to top page
        scrolltoTop() {
            window.scrollTo(0, 0);
        }
    }

    
});