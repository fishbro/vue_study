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
                    pattern: /.+/,
                    required: true,
                    valid: false
                },
                phone: {
                    name: 'Phone',
                    type: 'phone',
                    value: '',
                    pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/,
                    required: true,
                    valid: false
                },
                email: {
                    name: 'Email',
                    type: 'email',
                    value: '',
                    pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|[0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.{1,2}[-A-Za-z]{2,})$/,
                    required: true,
                    valid: false
                },
                some_field: {
                    name: 'Some field',
                    type: 'text',
                    value: '',
                    pattern: false,
                    valid: false
                },
                other_field: {
                    name: 'Other field',
                    type: 'text',
                    value: '',
                    pattern: false,
                    valid: false
                },
            },
            form_valid: false,
            form_submited: false
        },
        methods: {
            checkField(e, key){
                if(this.fields[key].pattern !== false){
                    if(this.fields[key].pattern.test(e.target.value)){
                        this.fields[key].valid = true;
                    }else{
                        this.fields[key].valid = false;
                    }
                }else if(this.fields[key].value.length > 0 || this.fields[key].required === undefined){
                    this.fields[key].valid = true;
                }else{
                    this.fields[key].valid = false;
                }
                if(!e.target.parentNode.classList.contains('validity')){
                    e.target.parentNode.classList.add('validity');
                }
            },
            submitForm(){
                this.form_submited = !this.form_submited;
            },
        },
        computed: {
            checkProgress(){
                let progress = 0,
                    validity_coefficient = 0,
                    valid_required = 0;

                for (const key in this.fields) {
                    const element = this.fields[key];
                    if(this.fields[key].valid){
                        progress++;
                        if(this.fields[key].required === true){
                            valid_required++;
                        }
                    } 
                    if(this.fields[key].required === true) validity_coefficient++;
                }
                
                this.form_valid = (valid_required === validity_coefficient);
                return {
                    width: progress * 20 + '%'
                }
            }
        }
    });
});
