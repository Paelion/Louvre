<template>
    <div class="oeuvre">

        <div class="oeuvre--wrapper">
            <h2>Galerie</h2>
            <div class="oeuvre--content--wrapper">
                <router-link to="/liberte" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" liberteIMG" src="http://www.front-2.devlab-devinci.fr/img/liberte.jpg">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
                <router-link to="/scribe" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" scribeIMG" src="../../public/img/scribe.jpg">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
                <router-link to="/dentelliere" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" dentelliereIMG" src="../../public/img/dentelliere.jpg">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
                <router-link to="venus" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" venusIMG" src="../../public/img/venus2.jpg">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
                <router-link to="/joconde" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" jocondeIMG" src="../../public/img/joconde.jpg">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
                <router-link to="/toutankhamon" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" pharaIMG" src="../../public/img/phara.jpg">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>


        <div class="overlay-image">
            <a href="URL_LIEN">
                <img class="image" src="IMAGE" alt="Alt text"/>
                <div class="normal">
                    <div class="text">Image + texte
                        NORMAL
                    </div>
                </div>
                <div class="hover">
                    <div class="text">Background + texte
                        HOVER
                    </div>
                </div>
            </a>
        </div>


    </div>
</template>

<script>
    //import OeuvreSingle from "./OeuvreSingle";

    export default {
        name: "Oeuvre",
        components: {
            //OeuvreSingle
        },
        data() {
            return {
                contents: [
                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/liberte.jpg",
                        titre: "La liberté guidant le peuple",
                        oeuvre: "liberte"
                    },

                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/scribe.jpg",
                        titre: "Scribe",
                        oeuvre: "scribe"
                    },
                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/denteliere.jpg",
                        titre: "La Dentelière",
                        oeuvre: "denteliere"
                    },

                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/venus2.jpg",
                        titre: "La Venus de Milo",
                        oeuvre: "venus"
                    },

                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/joconde.jpg",
                        titre: "La Joconde",
                        oeuvre: "joconde"
                    },
                    {
                        image: "http://www.front-2.devlab-devinci.fr/img/phara.jpg",
                        titre: "Toutânkhamon",
                        oeuvre: "toutankhamon"
                    },

                ]
            }
        }
    }
</script>

<style scoped>

</style>
