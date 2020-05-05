<template>
    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>

        <img :src="image">
        <h2>{{titre}}</h2>
        <p>{{description}}</p>

        <a>Oeuvre pécédente</a>
        <a>Oeuvre suivante</a>

    </div>
</template>

<script>
    import Menu from "../Menu";

    export default {
        name: 'Venus',
        components: {
            Menu
        },
    }
</script>

<style scoped>

</style>
