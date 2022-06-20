<template>
    <div class="filters-box-wrapper">
        <FilterBox v-for="(filter) in this.active_filters" 
        :key="filter" :active_filter="filter"/>
    </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
export default {
    name: 'FiltersBox',
    components: { FilterBox },
    props: {
        active_filters: Array,
    },
}
</script>

<style scoped>
</style>