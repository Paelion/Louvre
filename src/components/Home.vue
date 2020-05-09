<template>
    <div class="home">
        <div class="homeTop">
            <div class="homeTop--wrapper">
                <div class="title--wrapper">
                    <h1 class="titleHome">{{ $t('home.titre') }}</h1>
                </div>

            </div>
        </div>
        <p class="txt1Home">{{ $t('home.txt1') }}</p>
        <Pyramide/>
        <p class="txt2Home">{{ $t('home.txt2') }}</p>

        <div class="arrow">
            <router-link to="/oeuvre" class="home--link">
                <p>{{ $t('home.link') }}</p>
                <img class="arrowRight" src="../../public/img/right-arrow.png">
            </router-link>

        </div>
    </div>
</template>


<script>
    //import Menu from "./Menu";
    import Pyramide from "./Pyramide";


    export default {
        name: 'Home',
        components: {
            //Menu,
            Pyramide
        },
        data() {
            return {}
        }
    }
</script>
<style scoped>

</style>
