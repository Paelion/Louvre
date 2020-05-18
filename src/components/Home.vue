<template>
    <div class="home">
        <div class="homeTop">
            <h1 class="titleHome">{{ $t('home.titre') }}</h1>
        </div>
        <p class="txt1Home">{{ $t('home.txt1') }}</p>
        <Pyramide class="pyramide--wrapper"/>
        <PyramideResponsive class="pyramide--responsive--wrapper"/>
        <p class="txt2Home">{{ $t('home.txt2') }}</p>

        <div class="arrow">
            <router-link :to="`/${$i18n.locale}/oeuvre`" class="home--link">
                <p>{{ $t('home.link') }}</p>
                <img class="arrowRight" src="../../public/img/right-arrow.png">
            </router-link>

        </div>
    </div>
</template>


<script>
    //import Menu from "./Menu";
    import Pyramide from "./Pyramide";
    import PyramideResponsive from "./PyramideResponsive";


    export default {
        name: 'Home',
        components: {
            PyramideResponsive,
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
