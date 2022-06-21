<template>
    <div class="nav-button-wrapper">
        <a class="nav-button-link" :href="icon.url">
            <GoogleIcon :icon="icon.icon" class="nav-button-icon"
            :class="(primary_button == 'true')?'primary-button' : ''"/>
        </a>
    </div>
</template>

<script>
import GoogleIcon from '../generics/GoogleIcon.vue'

export default {
    name: 'NavButton',
    components: {
        GoogleIcon
    },
    props: {
        icon: Object,
        primary_button: String,
    },
}

</script>

<style scoped lang="scss" src="../../assets/css/navbar/navbutton_style.scss">
</style>