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
                            <img class=" venusIMG" src="../../public/img/venus2.png">
                            <h3 class="titleGallerie">Voir l'oeuvre</h3>
                        </div>
                    </div>
                </router-link>
                <router-link to="/joconde" class="oeuvre--link">
                    <div class="textEffect">
                        <div class="imgGallerie">
                            <img class=" jocondeIMG" src="../../public/img/joconde.png">
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
    </div>
</template>

<script>

    export default {
        name: "Oeuvre"
    }
</script>

<style scoped>

</style>
