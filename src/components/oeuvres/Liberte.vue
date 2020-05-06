<template>
    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>

        <div class="liberte">
            <h2>La Liberté guidant le peuple</h2>
            <div class="liberte--wrapper">
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
                    magnam!</p>
                <img src="https://www.pauline-aelion.fr/img/siteVue/liberte.jpg">
            </div>
        </div>

        <router-link to="/toutankhamon" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/joconde" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>

<script>
    import Menu from "../Menu";

    export default {
        name: 'Liberte',
        components: {
            Menu
        },
    }
</script>

<style scoped>

</style>
