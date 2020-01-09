<template>
    <table>
        <tr v-for="(field, key) in fields" :key="key">
            <td>{{ field.name }}</td>
            <td>{{ field.value }}</td>
        </tr>
    </table>
</template>

<script>
export default {
    props: {
        fields: Object
    }
}
</script>

<style>

</style>