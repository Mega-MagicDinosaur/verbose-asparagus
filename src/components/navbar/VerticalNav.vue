<template>
    <div class="vertical-nav-wrapper">
        <img src="image-path" class="navbar-logo">

        <NavButton class="nav-button" v-for="(icon, index) in this.icons" :key="icon" 
        :icon="this.icons[index]" 
        :primary_button="(index == primary_button-1)?'true' : 'false'" />

        <button class="options-button"><GoogleIcon icon="options-icon" /></button> <!-- options button -->
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'
import NavButton from './NavButton.vue'

export default {
    name: 'VerticalNav',
    data() { return {
        options_icon: {
            icon: 'options-icon',
            url: '#'
        },
    } },
    components: {
        NavButton,
        GoogleIcon,
    },
    props: {
        icons: Array,
        primary_button: Number
    }
}
</script>

<style scoped>
</style>