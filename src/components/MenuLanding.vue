<template>
    <div class="menu--wrapper">
        <img src="../../public/img/cross.png" class="cross">
        <h2 class="menuLanding--title">Menu</h2>
        <hr>
        <div class="menuLanding--wrapper">
            <ul class="menuLanding">
                <router-link to="/home" class="menu--link">
                    <li>Accueil</li>
                </router-link>
                <router-link to="/oeuvre" class="menu--link">
                    <li>Exposition</li>
                </router-link>
                <router-link to="/plan" class="menu--link">
                    <li>Plan du musée</li>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuLanding"
    }
</script>

<style scoped>

</style>
