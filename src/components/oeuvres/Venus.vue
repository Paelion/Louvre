<template>
    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>

        <div class="venus">
            <h2>La Vénus de Milo</h2>
            <div class="venus--wrapper">
                <img src="https://www.pauline-aelion.fr/img/siteVue/venus2.jpg">
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

        <router-link to="/joconde" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/toutankhamon" class="oeuvreSlide next">Oeuvre suivante</router-link>

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
