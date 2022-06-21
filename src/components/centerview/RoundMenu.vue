<template>
  <div class="menu-container">
    <div class="round-menu">
      <MenuButton v-for="item in this.items" :key="item" 
      class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}" 
      @clicked="clicked" :button="item" />
      <CenterButton class="center-button" />
    </div>
    <MenuFilters :filters="this.filters"/>
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
      items:   b,
      buttons: [b[0],b[1],b[2],b[3]],
  }},
  computed: {
      first_button() { return this.buttons[0] },
      filters() { return this.filters_data[this.first_button.id] },
  },
  watch: {
    filters: { deep: true,
      handler() { console.log('filters has changed!')}
    }
  },
  methods: {
    clicked(button_id) {
      let id = this.get_orientation(button_id)

      if (id == 3) { this.turn += 90 } 
      else { this.turn -= 90*id } 
      for (let i=0; i < id; i++) { this.buttons.push(this.buttons.shift()); }
    },
    get_orientation(button_id) {
      for (let i=0; i<this.buttons.length; i++) {
        if (this.buttons[i].id == button_id) { return i }
      } return 0
    },
  },
}
</script>

<style scoped>
@import '../../assets/css/centerview/roundmenu_style.css';
</style>
