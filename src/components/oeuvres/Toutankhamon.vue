<template>
    <div class="oeuvre">

        <div class="toutankhamon">
            <h2>{{ $t('phara.titre') }}</h2>
            <div class="toutankhamon--wrapper">
                <img src="../../../public/img/phara.jpg">
                <p>{{ $t('phara.contenu') }}</p>
            </div>
        </div>
        <router-link :to="`/${$i18n.locale}/joconde`" class="oeuvreSlide prev">{{ $t('prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/liberte`" class="oeuvreSlide next">{{ $t('next') }}</router-link>

    </div>
</template>

<script>


    export default {
        name: 'Toutankhamon',

    }
</script>

<style scoped>

</style>
