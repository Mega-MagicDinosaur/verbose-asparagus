<template>
<div class="card-ring-wrapper">
    <TransitionGroup name="ring">
        <CompanyCard v-for="(card) in this.ring" :key="card" :card="card"/>
    </TransitionGroup>
</div>
</template>

<script>
import CompanyCard from './CompanyCard.vue';

export default {
    name: "CardRing",
    components: { CompanyCard },
    props: {
        ring: Array
    },
}
</script>

<style scoped lang="scss" src="../../assets/css/centerview/cardring_style.scss"></style>
