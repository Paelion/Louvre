<template>
    <div class="oeuvre">

        <div class="venus">
            <h2>La Vénus de Milo</h2>
            <div class="venus--wrapper">
                <img src="../../../public/img/venus2.png">
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

        <router-link to="/dentelliere" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/joconde" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>

<script>


    export default {
        name: 'Venus',

    }
</script>

<style scoped>

</style>
