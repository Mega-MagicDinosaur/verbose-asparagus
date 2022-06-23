<template>
<div class="menu-cards-wrapper">
  <TransitionGroup name="card-ring">
    <CardRing v-for="(ring) in this.rings" :key="ring" :ring="ring" class="size-3"/>
  </TransitionGroup>
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

<style scoped lang="scss" src="../../assets/css/centerview/menucards_style.scss">
</style>
