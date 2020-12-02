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