<template>
    <div class="oeuvre">

        <div class="dentelliere">
            <h2>La Dentellière</h2>
            <div class="dentelliere--wrapper">
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
                <img src="../../../public/img/dentelliere.jpg">
            </div>
        </div>

        <router-link to="/scribe" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/venus" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>
<script>
    export default {
        name: "Dentelliere"
    }
</script>

<style scoped>

</style>
