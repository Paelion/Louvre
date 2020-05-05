<template>
    <div class="oeuvre--content--wrapper">
        <img :src="image" style="height: 200px; width: 400px;">
        <div class="oeuvre--content">
            <h3>{{titre}}</h3>
            <p>{{legende}}</p>
            <button>{{voir}}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "OeuvreSingle",
        props: {
            image: String,
            titre: String,
            legende: String,
            index: Number,
            voir: String

        },
    }
</script>

<style scoped>

</style>
