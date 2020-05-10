<template>
    <div class="oeuvre">

        <div class="venus">
            <h2>{{ $t('venus.titre') }}</h2>
            <div class="venus--wrapper">
                <img src="../../../public/img/venus2.png">
                <p>{{ $t('venus.contenu') }}</p>
            </div>
        </div>

        <router-link :to="`/${$i18n.locale}/dentelliere`" class="oeuvreSlide prev">{{ $t('prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/joconde`" class="oeuvreSlide next">{{ $t('next') }}</router-link>

    </div>
</template>

<script>


    export default {
        name: 'Venus',

    }
</script>

<style scoped>

</style>
