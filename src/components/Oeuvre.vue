<template>

    <div class="oeuvre">
        <Menu class="menuPyramideOeuvre"/>
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
