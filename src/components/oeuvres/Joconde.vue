<template>
    <div class="oeuvre">

        <div class="joconde">
            <h2>{{ $t('joconde.titre') }}</h2>
            <div class="joconde--wrapper">
                <p>{{ $t('joconde.contenu') }}</p>
                <img src="../../../public/img/joconde.png">
            </div>
        </div>

        <router-link :to="`/${$i18n.locale}/venus`" class="oeuvreSlide prev">{{ $t('prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/toutankhamon`" class="oeuvreSlide next">{{ $t('next') }}</router-link>

    </div>
</template>

<script>


    export default {
        name: 'Joconde',

    }
</script>

<style scoped>

</style>
