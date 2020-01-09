<template>
    <div class="form-group">
        <label :for="id">{{ name }}</label>
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
        return {}
    },
    methods:{
        onInput(e){
            if(this.pattern.test(e.target.value)){
                this.$emit('input', {key: this.id, val: e.target.value})
            }
        }
    },
    computed:{

    }
}
</script>

<style>

</style>