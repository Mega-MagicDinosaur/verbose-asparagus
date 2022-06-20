<template>
    <div class="submit-button-wrapper">
        <button type="button" class="btn btn-primary submit-button">{{text}}</button>
    </div>
</template>

<script>
export default {
    name: 'SubmitButton',
    props: {
        text: String,
    },
}
</script>

<style scoped>
</style>