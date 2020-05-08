<template>
    <div class="oeuvre">

        <div class="scribe">
            <h2>Le Scribe accroupi</h2>
            <div class="scribe--wrapper">
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
                <img src="../../../public/img/scribe.jpg">
            </div>
        </div>

        <router-link to="/liberte" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/dentelliere" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>
<script>
    export default {
        name: "Scribe"
    }
</script>

<style scoped>

</style>
