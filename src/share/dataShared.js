import Vue from 'vue';

export default Vue.observable({
    navBar: [
        {
            name: 'Home',
            drop: false,
            html: false
        },
        {
            name: 'About Me',
            drop: false,
            html: false
        },
        {
            name: 'Testimonials',
            drop: false,
            html: false
        },
        {
            name: 'My Blog',
            drop: false,
            html: false
        },
        {
            name: 'Meetups',
            drop: false,
            html: false
        },
        {
            name: 'Shop',
            drop: true,
            html: false,
            option1: 'Simple Product',
            option2: 'Variable Product'
        },
        {
            name: 'Contact Me',
            drop: false,
            html: false
        },
        {
            name: '',
            drop: false,
            html: true,
            class: `fas fa-shopping-cart`
        }
    ],
    links: [
        {
            text: 'Latest Books',
            link: '#',
        },
        {
            text: 'Upcoming Events',
            link: '#',
        },
        {
            text: 'Recent Articles',
            link: '#',
        },
        {
            text: 'Business Enquiries',
            link: '#',
        },
        {
            text: 'Visit My Foundation',
            link: '#',
        }
    ],
});