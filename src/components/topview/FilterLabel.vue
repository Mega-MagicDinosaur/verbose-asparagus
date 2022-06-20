<template>
    <div class="filter-label-wrapper">
        <button class="delete-button" @click="this.box.checked = false">X</button>
        <span class="label-text">{{box.text}}</span>
    </div>
</template>

<script>
export default {
    name: 'FilterLabel',
    components: {},
    props: {
        box: Object,
    },
}
</script>

<style scoped>
</style>