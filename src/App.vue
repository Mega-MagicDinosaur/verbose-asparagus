<template>
  <header>
  </header>

  <main>
    <div class="view-wrapper">
      <VerticalNav class="vertical-nav" :icons="nav_icons" :primary_button="1"/>

      <div class="top-view-wrapper">
        <ViewTitle class="view-title" title="RadarView" subtitle="Move freely to find out" />
        <FiltersEditor class="filters-editor" :filters="this.filters" :buttons="this.buttons" />
      </div> 
      <div class="center-view-wrapper">
        <RoundMenu :buttons_data="this.buttons" />
      </div>
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
import RoundMenu from './components/centerview/RoundMenu.vue'

export default {
  name: 'App',
  components: {
    VerticalNav,
    FiltersEditor,
    ViewTitle,
    RoundMenu
},
  data() { return {
      buttons: buttons,
      filters: filters,
      nav_icons: nav_icons,
  }},
}
</script>

<style scoped lang="scss" src="./assets/css/generics/app_style.scss">
</style>
