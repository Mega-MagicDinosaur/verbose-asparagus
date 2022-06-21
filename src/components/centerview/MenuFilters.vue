<template>

<div class="filter-menu">
<div>
    <TransitionGroup name="list">
        <a v-for="(filter, index) in this.filters" :key="filter" class="filter-menu-item"> 
          <FilterMenu :filter="filter" :selected="this.menus[index]" 
          @clicked_menu="clicked_menu(filter)" @toggled_box="toggled_box($event, index)" />
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
      toggled_box(filter_menu_pos, menu_pos) {
        this.$emit('toggled_box', filter_menu_pos, menu_pos)
      }
    }
}
</script>

<style lang="scss" scoped src="../../assets/css/centerview/menufilters_style.scss">

</style>