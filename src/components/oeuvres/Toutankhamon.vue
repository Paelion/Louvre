<template>
    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>

        <div class="toutankhamon">
            <h2>Le pharaon Toutankhâmon</h2>
            <div class="toutankhamon--wrapper">
                <img src="https://www.pauline-aelion.fr/img/siteVue/phara.jpg">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem consequuntur facilis
                    magnam
                    placeat possimus similique vel voluptatem voluptatibus! Autem cumque cupiditate molestias mollitia optio
                    perspiciatis, sunt tenetur voluptas!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem consequuntur facilis
                    magnam
                    placeat possimus similique vel voluptatem voluptatibus! Autem cumque cupiditate molestias mollitia optio
                    perspiciatis, sunt tenetur voluptas!
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem consequuntur facilis
                    magnam<br><br>
                    placeat possimus similique vel voluptatem voluptatibus! Autem cumque cupiditate molestias mollitia optio
                    perspiciatis, sunt tenetur voluptas!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur autem consequuntur facilis
                    magnam
                    placeat possimus similique vel voluptatem voluptatibus! Autem cumque cupiditate molestias mollitia optio
                    perspiciatis, sunt tenetur voluptas!</p>
            </div>
        </div>
        <router-link to="/venus" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/liberte" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>

<script>
    import Menu from "../Menu";

    export default {
        name: 'Toutankhamon',
        components: {
            Menu
        },
    }
</script>

<style scoped>

</style>
