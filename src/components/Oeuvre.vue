<template>
    <div class="oeuvre">

        <div class="oeuvre--wrapper">
            <h2>{{ $t('galerie') }}</h2>
            <div class="oeuvre--content--wrapper">
                <router-link :to="`/${$i18n.locale}/liberte`" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" liberteIMG" src="http://www.front-2.devlab-devinci.fr/img/liberte.jpg">
                        </div>
                    </div>
                </router-link>
                <router-link :to="`/${$i18n.locale}/scribe`" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" scribeIMG" src="../../public/img/scribe.jpg">
                        </div>
                    </div>
                </router-link>
                <router-link :to="`/${$i18n.locale}/dentelliere`" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" dentelliereIMG" src="../../public/img/dentelliere.jpg">
                        </div>
                    </div>
                </router-link>
                <router-link :to="`/${$i18n.locale}/venus`" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" venusIMG" src="../../public/img/venus2.png">
                        </div>
                    </div>
                </router-link>
                <router-link :to="`/${$i18n.locale}/joconde`" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" jocondeIMG" src="../../public/img/joconde.png">
                        </div>
                    </div>
                </router-link>
                <router-link  :to="`/${$i18n.locale}/toutankhamon`" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" pharaIMG" src="../../public/img/phara.jpg">
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: "Oeuvre"
    }
</script>

<style scoped>

</style>
