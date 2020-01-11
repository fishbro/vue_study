<template>
    <div>
        <div v-if="!submited">
            <fb-progress :value="progress" :max="getLength"></fb-progress>
            <form action="" class="mt-3" @submit.prevent="formSubmit">
                <fb-input   v-for="(field, key) in fields" 
                            :key="key"
                            :id="key"
                            :name="field.name"
                            :value="field.value"
                            :pattern="field.pattern"
                            @input="onInput($event)"
                >
                </fb-input>
                <button class="btn btn-primary" type="submit" :disabled="!valid">Send data!</button>
            </form>
        </div>
        <fb-result v-else :fields="fields" @go-back="formSubmit"></fb-result>
    </div>
</template>

<script>
import fbInput from './fbInput';
import fbProgress from './fbProgress';
import fbResult from './fbResult';

export default {
    data() {
        return {
            fields: {
                name: {
                    name: 'Name',
                    value: '',
                    pattern: /.+/
                },
                phone: {
                    name: 'Phone',
                    value: '',
                    pattern: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
                },
                email: {
                    name: 'Email',
                    value: '',
                    pattern: /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|[0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.{1,2}[-A-Za-z]{2,})$/
                },
                some_field: {
                    name: 'Some field',
                    value: '',
                    pattern: false
                },
                other_field: {
                    name: 'Other field',
                    value: '',
                    pattern: false
                },
            },
            valid: false,
            submited: false,
            progress: 0
        }
    },
    methods:{
        onInput(e){
            let field = this.fields[e.key];

            field.value = e.value;
            field.valid = e.valid;

            this.validateForm();
        },
        validateForm(){
            let progress = 0;
            let fieldsValid = 0;
            for (const key in this.fields) {
                const element = this.fields[key];
                    
                if(element.valid !== undefined && element.valid === true && element.value !== '') progress++;
                if(element.pattern && element.valid) fieldsValid++;
            }
            this.progress = progress;
            this.valid = (this.required == fieldsValid);
        },
        formSubmit(){
            this.submited = !this.submited;
        }
    },
    computed:{
        getLength(){
            return Object.keys(this.fields).length;
        }
    },
    components: {
        'fb-input': fbInput,
        'fb-progress': fbProgress,
        'fb-result': fbResult,
    },
    mounted(){
        let req = 0;
        for (const key in this.fields) {
            const element = this.fields[key];
                
            if(element.pattern) req++;
        }
        this.required = req;
        
        this.validateForm();
    }
}
</script>

<style>

</style>