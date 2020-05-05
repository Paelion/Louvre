<template>
    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>

        <img :src="image">
        <h2>La Joconde</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem consequuntur facilis magnam
            placeat possimus similique vel voluptatem voluptatibus! Autem cumque cupiditate molestias mollitia optio
            perspiciatis, sunt tenetur voluptas!</p>

        <a>Oeuvre pécédente</a>
        <a>Oeuvre suivante</a>

    </div>
</template>

<script>
    import Menu from "../Menu";

    export default {
        name: "Joconde",
        components: {
            Menu
        },
    }
</script>

<style scoped>

</style>
