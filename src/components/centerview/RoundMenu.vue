<template>
  <div class="round-menu-wrapper">
    <div class="round-menu">
      <MenuButton class="menu-button" v-for="item in this.items" :key="item" 
      :style="{ transform: 'rotate('+ turn +'deg)'}" 
      @clicked="clicked" :button="item" />
      <CenterButton class="center-button" />
    </div>
    <MenuFilters class="menu-filters" :filters="this.filters" :state="filters_state"/>
  </div>
</template>

<script>
import MenuButton from './MenuButton.vue'
import CenterButton from './CenterButton.vue'
import MenuFilters from './MenuFilters.vue'

export default {
  name: 'RoundMenu',
  components: {
    MenuButton,
    CenterButton,
    MenuFilters,
  },
  props: {
    buttons_data: Array,
    filters_data: Array
  },
  data() { 
    const b = this.buttons_data
    return {
      turn: 45,
      items: b,
      buttons: [b[0],b[1],b[2],b[3]],
      filters_state: false,
  }},
  computed: {
      first_button() { return this.buttons[0] },
      filters() { 
        if (!this.filters_state) { return undefined }
        return this.filters_data[this.first_button.id] 
      },
  },
  methods: {
    clicked(button_id) {
      let id = this.get_orientation(button_id)
      if (id == 3) { this.turn += 90 } 
      else { this.turn -= 90*id } 
      for (let i=0; i < id; i++) { this.buttons.push(this.buttons.shift()); }
      this.filters_state = true
    },
    get_orientation(button_id) {
      for (let i=0; i<this.buttons.length; i++) {
        if (this.buttons[i].id == button_id) { return i }
      } return 0
    },
  },
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/roundmenu_style.scss">
</style>
