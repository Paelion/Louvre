<template>
    <div class="audioguide">
        <h3>{{ $t('nav.audioguide') }}</h3>
        <div class="container--audioguide">
            <router-link :to="`/${$i18n.locale}/audio`" class="guide--link">
                <div class="box box-1">
                    <div class="cover"><img src="../../public/img/audio.png" alt="" class="img--audioguide"></div>
                    <button class="btn--audioguide">
                        <div></div>
                    </button>
                </div>
            </router-link>
            <router-link :to="`/${$i18n.locale}/video`" class="guide--link">
                <div class="box box-2">
                    <div class="cover"><img src="../../public/img/video.png" alt="" class="img--audioguide"></div>
                    <button class="btn--audioguide">
                        <div></div>
                    </button>
                </div>
            </router-link>
            <router-link :to="`/${$i18n.locale}/appli`" class="guide--link">
                <div class="box box-3">
                    <div class="cover"><img src="../../public/img/tel.png" alt="" class="img--audioguide"></div>
                    <button class="btn--audioguide">
                        <div></div>
                    </button>
                </div>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Audioguide"
    }
</script>

<style scoped>

</style>
