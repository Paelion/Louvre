<template>
    <div id="app">
        <div id="nav">
            <div class="burger">
                <div class="animP"></div>
            </div>

            <div id="menu-overlay" class="menu--wrapper">
                <ul>
                    <li class="menuItem">
                        <router-link to="/" class="menu--link"> Accueil</router-link>
                    </li>
                    <li class="menuItem2">
                        <router-link to="/oeuvre" class="menu--link"> Galerie</router-link>
                    </li>
                    <li class="menuItem3">
                        <router-link to="/plan" class="menu--link"> L'Esplanade</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view/>
    </div>
</template>




