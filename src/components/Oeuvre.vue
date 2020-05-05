<template>


    <div class="oeuvre">
        <h2>Nos oeuvrs phares</h2>
        <hr>
        <div class="oeuvre--wrapper">
            <OeuvreSingle v-for="(content, index) in contents" :image="content.image" :titre="content.titre"
                          :legende="content.legende" :key="index"
                          :index="index"/>
        </div>

    </div>
</template>

<script>
    import OeuvreSingle from "./OeuvreSingle";

    export default {
        name: "Oeuvre",
        components: {OeuvreSingle},
        data() {
            return {
                contents: [
                    {
                        image: "",
                        titre: "La Joconde",
                        legende: "testtesttest ",
                    },
                    {
                        image: "",
                        titre: "La Venus de Milo",
                        legende: "testtesttest ",
                    },
                    {
                        image: "",
                        titre: "Toutânkhamon",
                        legende: "testtesttest ",
                    },
                    {
                        image: "",
                        titre: "La liberté guidant le peuple",
                        legende: "testtesttest ",
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>
