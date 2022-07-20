<template>
    <h2>{{ cheese.name }}</h2>
</template>

<script>
    export default {
        data() {
            return {
                cheese: []
            }
        },
        mounted () {
            let url = "https://europe-west3-cheese-84me216.cloudfunctions.net/api/cheese/" + this.$route.params.id;
            this.$axios.get(url).then(response => {
                this.cheese = response.data;
                console.log(this.cheese);
            })
        }
    }

</script>

<style lang="scss" scoped>

</style>
