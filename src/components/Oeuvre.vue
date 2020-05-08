<template>
    <div class="oeuvre">

        <div class="oeuvre--wrapper">
            <OeuvreSingle v-for="(content, index) in contents" :image="content.image" :titre="content.titre"
                          :oeuvre="content.oeuvre" :key="index"
                          :index="index"/>
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
                        image: "http://www.front-2.devlab-devinci.fr/img/joconde.jpg",
                        titre: "La Joconde",
                        oeuvre: "joconde"
                    },
                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/venus1.jpg",
                        titre: "La Venus de Milo",
                        oeuvre: "venus"
                    },
                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/phara.jpg",
                        titre: "Toutânkhamon",
                        oeuvre: "toutankhamon"
                    },
                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/liberte.jpg",
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
