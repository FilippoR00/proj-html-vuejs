import Vue from 'vue';

export default Vue.observable({
    navBar: [
        {
            name: 'Home'
        },
        {
            name: 'About Me'
        },
        {
            name: 'Testimonials'
        },
        {
            name: 'My Blog'
        },
        {
            name: 'Meetups'
        },
        {
            name: 'Shop',
            option1: 'Simple Product',
            option2: 'Variable Product'
        },
        {
            name: 'Contact Me'
        },
        {
            name: '<i class="fas fa-shopping-cart"></i>'
        }
    ]
});