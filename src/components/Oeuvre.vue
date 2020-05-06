<template>

    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>
        <h2>Nos oeuvrs phares</h2>
        <hr>
        <div class="oeuvre--wrapper">
            <OeuvreSingle v-for="(content, index) in contents" :image="content.image" :titre="content.titre"
                          :oeuvre="content.oeuvre" :key="index"
                          :index="index"/>
        </div>

    </div>
</template>

<script>
    import OeuvreSingle from "./OeuvreSingle";
    import Menu from "./Menu";

    export default {
        name: "Oeuvre",
        components: {
            OeuvreSingle,
            Menu
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
