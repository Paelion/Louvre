<template>
    <div class="oeuvre">

        <div class="liberte">
            <h2>{{ $t('liberte.titre') }}</h2>
            <div class="liberte--wrapper">
                <p>{{ $t('liberte.contenu') }}</p>
                <img src="../../../public/img/liberte.jpg">
            </div>
        </div>

        <router-link :to="`/${$i18n.locale}/toutankhamon`" class="oeuvreSlide prev">{{ $t('prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/scribe`" class="oeuvreSlide next">{{ $t('next') }}</router-link>

    </div>
</template>

<script>


    export default {
        name: 'Liberte',

    }
</script>

<style scoped>

</style>
