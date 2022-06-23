<template>
    <div class="company-card-wrapper">
        <div class="company-card">
            <p>{{this.card.name}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CompanyCard',
    props: {
        card: Object
    }
}
</script>

<style scoped lang="scss">
</style>