let form;

document.addEventListener("DOMContentLoaded", () => {
    form = new Vue({
        el: ".vue-agreement",
        data: {
            showControls: false,
            controls: {
                agree: {
                    label: 'I agree this text',
                    type: 'checkbox',
                    value: false
                },
                spam: {
                    label: 'Send me spam',
                    type: 'checkbox',
                    value: false,
                    subcontrols: {
                        type: 'radio',
                        values: {
                            email: 'Send me spam on email',
                            phone: 'Send me spam on phone'
                        },
                        value: 'email'
                    }
                }
            },
            formSubmited: false
        },
        methods: {
            sendData(){
                this.formSubmited = !this.formSubmited;
            }
        },
        mounted(){
            let license = this.$el.querySelectorAll('.alert')[0];
            let scrollHandler = (e) => {
                
                if(e.target.scrollTop >= (license.scrollHeight - license.offsetHeight)){
                    this.showControls = true;
                    license.removeEventListener('scroll', scrollHandler);
                }
            };
            license.addEventListener('scroll', scrollHandler);
        }
    });
});
