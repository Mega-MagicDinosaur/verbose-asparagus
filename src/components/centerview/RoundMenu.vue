<template>
  <div class="menu-container">
    <div class="round-menu">
      <MenuButton v-for="item in this.items" :key="item" 
      class="menu-button" :style="{ transform: 'rotate('+ turn +'deg)'}" 
      @clicked="clicked" :button="item" />
      <CenterButton class="center-button" />
    </div>
    <MenuFilters :filters="this.filters" @toggled_box="toggled_box"/>
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
  methods: {
    clicked(clicked_item) {
      let id = this.get_orientation(clicked_item)
      let first = this.first_button.id

      if (id == 3) { this.turn += 90 } 
      else { this.turn -= 90*id } 
      for (let i=0; i < id; i++) { this.buttons.push(this.buttons.shift()); }

      first = this.first_button.id
      console.log(this.filters)
    },
    get_orientation(name) {
      for (let i=0; i<this.buttons.length; i++) {
        if (this.buttons[i].id == name) { return i }
      } return 0
    },
    /* toggled_box(filter_menu_pos, menu_pos) {
      this.items.forEach(item => {
        if (item.is_first) {
          let filter = item.filters[menu_pos]
          let box = filter.boxes[filter_menu_pos]
          box.checked = !box.checked
        }
      });
    }, */
  },
}
</script>

<style scoped>
@import '../../assets/css/centerview/roundmenu_style.css';
</style>
