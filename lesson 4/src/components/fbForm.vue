<template>
    <div>
        <fb-progress></fb-progress>
        <form action="">
            <fb-input   v-for="(field, key) in fields" 
                        :key="key"
                        :id="key"
                        :name="field.name"
                        :value="field.value"
                        :pattern="field.pattern"
                        @input="onInput($event)"
            >
            </fb-input>
        </form>
        <fb-result :fields="fields"></fb-result>
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
            progress: 0,
            submited: false
        }
    },
    methods:{
        onInput(e){
            this.fields[e.key].value = e.val;
        }
    },
    computed:{

    },
    components: {
        'fb-input': fbInput,
        'fb-progress': fbProgress,
        'fb-result': fbResult,
    }
}
</script>

<style>

</style>