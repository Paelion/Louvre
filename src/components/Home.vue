<template>
    <div class="home">
        <div class="cursor"></div>
        <div class="homeTop">
            <h1 class="titleHome">Musée du Louvre</h1>
            <Menu/>
        </div>
        <p class="txt1Home">Au total, plus de 35 000 œuvres !<br>
            En huit siècles d’existence, le Louvre
            a été marqué par de nombreux
            courants architecturaux,
            de la forteresse médiévale du XIIe
            siècle à la pyramide de verre de
            Pei.</p>
        <Pyramide/>
        <p class="txt2Home">Chaque passage dans la capitale
            mérite une visite du Louvre, tant
            le plus grand musée de Paris
            recèle de trésors. Chaque salle
            dévoile des chefs-d’oeuvres :
            La Joconde,
            le Radeau de la Méduse,
            la Vénus de Milo…
        </p>
        <div class="scrollDown">
            <p>Scroll Down</p>
            <img class="arrowDown" src="../../public/img/down-arrow.png">
        </div>
    </div>
</template>


<script>
    import Menu from "./Menu";
    import Pyramide from "./Pyramide";


    export default {
        name: 'Home',
        components: {
            Menu,
            Pyramide
        }
    }
</script>
<style scoped>

</style>
