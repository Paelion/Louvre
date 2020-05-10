<template>
    <div class="musees">
        <h3>{{ $t('musees.titre') }}</h3>
        <div class="musees--wraper">
            <router-link :to="`/${$i18n.locale}/lens`" class="home--link">
                <div class="lens--wrapper">
                    <img src="../../public/img/louvreLens2.jpg" class="lens">
                    <h4 class="lens--title">{{ $t('musees.lens') }}</h4>
                </div>
            </router-link>
            <router-link :to="`/${$i18n.locale}/ad`" class="home--link">
                <div class="ad--wrapper">
                    <img src="../../public/img/louvreAD2.jpg" class="ad">
                    <h4 class="ad--title">{{ $t('musees.ad') }}</h4>
                </div>
            </router-link>
        </div>
    </div>
</template>


<script>


    export default {
        name: "Musees"
    }


</script>

<style scoped>

</style>
