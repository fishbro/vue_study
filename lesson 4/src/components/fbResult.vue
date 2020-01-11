<template>
    <div>
        <table class="table table-bordered">
            <tr v-for="(field, key) in fields" :key="key">
                <td>{{ field.name }}</td>
                <td>{{ field.value }}</td>
            </tr>
        </table>
        <button class="btn btn-warning" type="button" @click="goBack">Go back</button>
    </div>
</template>

<script>
export default {
    props: {
        fields: Object
    },
    methods:{
        goBack(){
            this.$emit('go-back');
        }
    }
}
</script>

<style>

</style>