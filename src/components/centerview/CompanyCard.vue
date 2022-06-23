<template>
    <div class="company-card-wrapper">
        <p>{{card}}</p>
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