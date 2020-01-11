<template>
    <div class="form-group">
        <label :for="id">
            {{ name }} 
            <i v-if="inited" :class="isValid"></i>
        </label>
        <input type="text" class="form-control" name="" :id="id" :value="value" @input="onInput($event)">
    </div>
</template>

<script>
export default {
    props:{
        id: String,
        name: String,
        value: String,
        pattern: [RegExp, Boolean]
    },
    data(){
        return {
            valid: false,
            inited: this.value !== ''
        }
    },
    methods:{
        onInput(e){
            if(!this.inited) this.inited = true; // hide/show valid icon

            this.validateInput(e.target.value); // validate field

            this.$emit('input', { // send event to parent component
                key: this.id, 
                value: e.target.value,
                valid: this.valid
            });
        },
        validateInput(val){
            if(this.pattern && this.pattern.test(val)){ 
                this.valid = true;
            }else if(!this.pattern){
                this.valid = true;
            }else{
                this.valid = false;
            }
        }
    },
    computed:{
        isValid(){ // validate classes
            return this.valid ? "fas fa-check-circle text-success" : "fas fa-times-circle text-danger";
        }
    },
    mounted(){
        this.validateInput(this.value);
    }
}
</script>

<style>

</style>