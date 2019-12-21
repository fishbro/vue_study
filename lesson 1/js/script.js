let form;

document.addEventListener("DOMContentLoaded", () => {
    form = new Vue({
        el: ".vue-form",
        data: {
            fields: {
                email: {
                    name: 'Email',
                    value: ''
                },
                fName: {
                    name: 'First name',
                    value: ''
                },
                lName: {
                    name: 'Last name',
                    value: ''
                },
                phone: {
                    name: 'Phone',
                    value: ''
                },
                guests: {
                    name: 'Guests',
                    value: []
                }
            },
            complete: false
        },
        methods: {
            addGuest(e){
                e.preventDefault();

                this.fields.guests.value.push('');
            },
            removeGuest(e, key){
                this.fields.guests.value.splice(key, 1);
            },
            processForm(e){
                e.preventDefault();

                this.complete = !this.complete;
            },
            sendForm(e){
                e.preventDefault();

                console.log(this.fields);
            }
        }
    });
});