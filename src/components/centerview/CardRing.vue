<template>
<div class="card-ring-wrapper">
    <TransitionGroup v-for="(card) in rings" :key="card" name="ring">
        <CompanyCard />
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

<style scoped lang="scss"></style>