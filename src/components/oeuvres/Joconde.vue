<template>
    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>

        <div class="joconde">
            <h2>La Joconde</h2>
            <div class="joconde--wrapper">
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
                <img src="https://www.pauline-aelion.fr/img/siteVue/joconde.jpg">
            </div>
        </div>

        <router-link to="/liberte" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/venus" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>

<script>
    import Menu from "../Menu";

    export default {
        name: 'Joconde',
        components: {
            Menu
        },
    }
</script>

<style scoped>

</style>
