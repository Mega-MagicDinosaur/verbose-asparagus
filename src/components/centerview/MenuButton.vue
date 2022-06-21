<template>
  <a class="button" @click.prevent="this.$emit('clicked', this.button.id)">
    <GoogleIcon class="menu-icon" :icon="this.button.icon" />
    <!--maybe add-> :style= "[this.button.is_first ? {'opacity': '1'} : {'opacity': '0.2'}]" -->
  </a>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
// import MenuFilters from './MenuFilters.vue'

export default {
  name: 'MenuButton',
  components: {
    GoogleIcon,
  },
  props: {
    button: Object
  },
  
}
</script>

<style scoped src="../../assets/css/centerview/menubutton_style.css">
</style>