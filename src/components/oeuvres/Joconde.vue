<template>
    <div class="oeuvre">

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
                <img src="../../../public/img/joconde.jpg">
            </div>
        </div>

        <router-link to="/venus" class="oeuvreSlide prev">Oeuvre pécédente</router-link>
        <router-link to="/toutankhamon" class="oeuvreSlide next">Oeuvre suivante</router-link>

    </div>
</template>

<script>


    export default {
        name: 'Joconde',

    }
</script>

<style scoped>

</style>
