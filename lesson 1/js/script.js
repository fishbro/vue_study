let form;

document.addEventListener("DOMContentLoaded", () => {
    form = new Vue({
        el: ".vue-form",
        data: {
            fields: {
                name: {
                    name: 'Name',
                    type: 'text',
                    value: '',
                    pattern: ''
                },
                phone: {
                    name: 'Phone',
                    type: 'phone',
                    value: '',
                    pattern: ''
                },
                email: {
                    name: 'Email',
                    type: 'email',
                    value: '',
                    pattern: ''
                },
                some_field: {
                    name: 'Some field',
                    type: 'text',
                    value: '',
                    pattern: ''
                },
                other_field: {
                    name: 'Other field',
                    type: 'text',
                    value: '',
                    pattern: ''
                },
            }
        },
        methods: {
            
        }
    });
});