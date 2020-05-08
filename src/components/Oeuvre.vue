<template>
    <div class="oeuvre--bc">
        <div class="oeuvre">
            <section class="parallax">
                <img src="../../public/img/cielHalo.png" id="ciel"/>
                <img src="../../public/img/notredame.png" id="notreDame"/>
                <img src="../../public/img/bat2V.png" id="bat"/>
                <img src="../../public/img/pyramideV.png" id="pyra"/>
                <img src="../../public/img/solV.png" id="sol"/>
                <h2 id="text">Galerie</h2>
            </section>
            <div class="oeuvre--wrapper">
                <OeuvreSingle v-for="(content, index) in contents" :image="content.image" :titre="content.titre"
                              :oeuvre="content.oeuvre" :key="index"
                              :index="index"/>
            </div>

        </div>
    </div>
</template>

<script>
    import OeuvreSingle from "./OeuvreSingle";

    export default {
        name: "Oeuvre",
        components: {
            OeuvreSingle
        },
        data() {
            return {
                contents: [
                    {
                        image: "https://www.pauline-aelion.fr/img/siteVue/joconde.jpg",
                        titre: "La Joconde",
                        oeuvre: "joconde"
                    },
                    {
                        image: "https://www.pauline-aelion.fr/img/siteVue/venus1.jpg",
                        titre: "La Venus de Milo",
                        oeuvre: "venus"
                    },
                    {
                        image: "https://www.pauline-aelion.fr/img/siteVue/phara.jpg",
                        titre: "Toutânkhamon",
                        oeuvre: "toutankhamon"
                    },
                    {
                        image: "https://www.pauline-aelion.fr/img/siteVue/liberte.jpg",
                        titre: "La liberté guidant le peuple",
                        oeuvre: "liberte"
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
