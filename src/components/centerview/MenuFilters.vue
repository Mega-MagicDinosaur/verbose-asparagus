<template>

<div class="filter-menu">
<div>
    <TransitionGroup name="list">
        <a v-for="(filter, index) in this.filters" :key="filter" class="filter-menu-item"> 
          <FilterMenu :filter="filter" :selected="this.menus[index]" 
          @clicked_menu="clicked_menu(filter)" />
        </a>
    </TransitionGroup>
</div>
</div>

</template>

<script>
import FilterMenu from './FilterMenu.vue'

export default {
    name: 'MenuFilters',
    components: { FilterMenu },
    props: { filters: Array },
    data() { 
      const s = []
      this.filters.forEach(filter => { s.push(false) })
        return {
          menus: s
    }},
    computed: {
      selected_menu() { 
        console.log('selected menu has changed.')
        for (let i=0; i<this.menus.length; i++) {
          if (this.menus[i]) { return i }
        } return null
      }
    },
    watch: {
      filters: {
        handler() {
          for (let i=0; i<this.menus.length; i++) this.menus[i] = false
    }}},
    methods: {
      clicked_menu(filter) {
        this.menus[this.selected_menu] = false
        for (let i=0; i<this.filters.length; i++) {
          if (this.filters[i] === filter) { this.menus[i] = true }
      }},
    }
}
</script>

<style lang="scss" scoped src="../../assets/css/centerview/menufilters_style.scss">

</style>