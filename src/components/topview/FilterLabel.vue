<template>
    <div class="filter-label-wrapper">
        <button>X</button>
        <span>{{box.name}}</span>
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