<template>
    <div class="oeuvre">

        <div class="dentelliere">
            <h2>{{ $t('dentelliere.titre') }}</h2>
            <div class="dentelliere--wrapper">
                <p>{{ $t('dentelliere.contenu') }}</p>
                <img src="../../../public/img/dentelliere.jpg">
            </div>
        </div>

        <router-link :to="`/${$i18n.locale}/scribe`" class="oeuvreSlide prev">{{ $t('prev') }}</router-link>
        <router-link :to="`/${$i18n.locale}/venus`" class="oeuvreSlide next">{{ $t('next') }}</router-link>

    </div>
</template>
<script>
    export default {
        name: "Dentelliere"
    }
</script>

<style scoped>

</style>
