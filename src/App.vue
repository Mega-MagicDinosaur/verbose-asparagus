<template>
  <header>
  </header>

  <main>
    <VerticalNav class="vertical-nav" :icons="nav_icons" :primary_button="1"/>

    <div class="top-view-wrapper">
      <ViewTitle class="view-title" title="RadarView" subtitle="Move freely to find out" />
      <FiltersEditor class="filters-editor" :filters="this.filters" :buttons="this.buttons" />
    </div>
  </main>
</template>

<script>
import ViewTitle from './components/topview/ViewTitle.vue'
import FiltersEditor from './components/topview/FiltersEditor.vue'
import VerticalNav from './components/navbar/VerticalNav.vue'

import { buttons } from './assets/js/staticdata.js'
import { nav_icons } from './assets/js/staticdata.js'

import { filters } from './assets/js/dinamicdata.js'

export default {
  name: 'App',
  components: {
    VerticalNav,
    FiltersEditor,
    ViewTitle
},
  data() { return {
      buttons: buttons,
      filters: filters,
      nav_icons: nav_icons,
  }},
}
</script>

<style scoped>
</style>
