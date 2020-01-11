<template>
    <div class="progress">
        <div class="progress-bar bg-primary" role="progressbar" :style="getWidth" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">Progress</div>
    </div>
</template>

<script>
export default {
    props: {
        value: Number,
        max: Number,
    },
    computed: {
        getWidth(){
            return {width: 100/this.max * this.value + '%'};
        }
    }
}
</script>

<style>

</style>