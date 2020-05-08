<template>

    <div class="oeuvre--content--wrapper">
        <div class="oeuvre--image">
            <img :src="image">
        </div>

        <div class="oeuvre--content">
            <router-link :to="oeuvre" class="oeuvre--link">
                <h3>{{titre}}</h3>
                <img src="../../public/img/interface.png">
            </router-link>
        </div>

    </div>

</template>

<script>
    export default {
        name: "OeuvreSingle",
        props: {
            image: String,
            titre: String,
            oeuvre: String,
            index: Number
        },
    }
</script>

<style scoped>

</style>
