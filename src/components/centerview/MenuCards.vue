<template>
<div class="menu-cards-wrapper">
  <CardRing v-for="(ring) in this.rings" :key="ring" :ring="ring" />
</div>
</template>

<script>
import CardRing from './CardRing.vue';

export default {
    name: "MenuCards",
    components: { CardRing },
    props: {
        rings: Array
    },
}
</script>

<style scoped lang="scss" src="">

</style>
