<!-- icons+text here are going to be static, since they don't matter very much -->
<template>
    <div class="search-box-wrapper">
        <IconButton class="icon-button" icon="tune"/>
        <div class="active-filters-label">
            <span>Active Filters</span>
            <h3>{{active_filters.length}}/{{this.button_filters.length}}</h3> <!-- Change!! -->
        </div>
        <FiltersBox class="filters-box" :active_filters="this.active_filters" />
        <SubmitButton class="ssubmit-button" text="Save Search" />
        <IconButton class="icon-button" icon="domain"/>
        <div class="found-companies-label"> <!-- Radicaly change -->
            <span>Found</span> <br>
            <span>loading...</span>
        </div>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
import IconButton from '../generics/IconButton.vue'
import FiltersBox from './FiltersBox.vue'
import SubmitButton from '../generics/SubmitButton.vue'

export default {
    name: 'SearchBox',
    components: {
        GoogleIcon,
        IconButton,
        FiltersBox,
        SubmitButton
    },
    props: {
        button_filters: Array,
    },
    computed: {
        active_filters() {
            return this.button_filters.filter(filter => filter.getBoxesChecked() > 0)
        }
    }
}
</script>

<style scoped>
</style>