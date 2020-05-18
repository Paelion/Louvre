<template>
    <div id="app">
        <div id="nav">

            <div class="burger">
                <div class="animP"></div>
            </div>

            <div id="menu-overlay" class="menu--wrapper">
                <ul>
                    <li class="menuItem">
                        <router-link :to="`/${$i18n.locale}/`" class="menu--link">{{ $t('nav.accueil') }}</router-link>
                    </li>
                    <li class="menuItem2">
                        <router-link :to="`/${$i18n.locale}/oeuvre`" class="menu--link"> {{ $t('nav.galerie') }}
                        </router-link>
                    </li>
                    <li class="menuItem3">
                        <router-link :to="`/${$i18n.locale}/audioguide`" class="menu--link"> {{ $t('nav.audioguide')
                            }}
                        </router-link>
                    </li>
                    <li class="menuItem4">
                        <router-link :to="`/${$i18n.locale}/plan`" class="menu--link">{{ $t('nav.esplanade') }}
                        </router-link>
                    </li>
                    <li class="menuItem5">
                        <router-link :to="`/${$i18n.locale}/musees`" class="menu--link">{{ $t('nav.musees') }}
                        </router-link>
                    </li>
                </ul>
            </div>

            <Langague/>

        </div>
        <transition name="router-anim">
            <router-view/>
        </transition>
    </div>
</template>


<script>

    import Langague from "./components/Language";


    export default {
        name: 'App',
        components: {
            Langague
        }
    }
</script>



