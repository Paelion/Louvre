<template>
    <div class="appliPage">
        <h3>{{ $t('appli.titre') }}</h3>

        <div class="appli--txt">
            <div class="appli--wrapper">
                <p>{{ $t('appli.contenu') }}</p>
                <h4>{{ $t('appli.prix') }} : 4 €</h4>
            </div>

            <img src="../../../public/img/tel.png" class="appli--img">
        </div>
        <router-link :to="`/${$i18n.locale}/video`" class="appliSlide prev">{{ $t('appli.prev') }}</router-link>

    </div>
</template>

<script>
    export default {
        name: "Appli"
    }
</script>

<style scoped>

</style>
