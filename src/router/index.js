import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Oeuvre from '../components/Oeuvre.vue'
import Joconde from '../components/oeuvres/Joconde.vue'
import Liberte from '../components/oeuvres/Liberte.vue'
import Toutankhamon from '../components/oeuvres/Toutankhamon.vue'
import Venus from '../components/oeuvres/Venus.vue'
import Scribe from '../components/oeuvres/Scribe.vue'
import Dentelliere from '../components/oeuvres/Dentelliere.vue'
import Plan from "../components/Plan";
import i18n from "../i18n";
import Musees from "../components/Musees";
import Lens from "../components/Lens";
import Ad from "../components/Ad";
import Audioguide from "../components/Audioguide";
import AudioG from "../components/guide/AudioG";
import Video from "../components/guide/Video";
import Appli from "../components/guide/Appli";


Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: `/${i18n.locale}`
        },
        {
            path: '/:lang',
            component: {
                render(c) {
                    return c('router-view')
                }
            },
            children:
                [
                    {
                        path: '/',
                        name: 'Home',
                        component: Home
                    },
                    {
                        path: 'oeuvre',
                        name: 'Oeuvre',
                        component: Oeuvre
                    },
                    {
                        path: 'joconde',
                        name: 'Joconde',
                        component: Joconde
                    },
                    {
                        path: 'liberte',
                        name: 'Liberte',
                        component: Liberte
                    },
                    {
                        path: 'toutankhamon',
                        name: 'Toutankhamon',
                        component: Toutankhamon
                    },
                    {
                        path: 'venus',
                        name: 'Venus',
                        component: Venus
                    },
                    {
                        path: 'scribe',
                        name: 'Scribe',
                        component: Scribe
                    },
                    {
                        path: 'dentelliere',
                        name: 'Dentelliere',
                        component: Dentelliere
                    },
                    {
                        path: 'plan',
                        name: 'Plan',
                        component: Plan
                    },
                    {
                        path: 'musees',
                        name: 'Musees',
                        component: Musees
                    },
                    {
                        path: 'lens',
                        name: 'Lens',
                        component: Lens
                    },
                    {
                        path: 'ad',
                        name: 'Ad',
                        component: Ad
                    },
                    {
                        path: 'audioguide',
                        name: 'Audioguide',
                        component: Audioguide
                    },
                    {
                        path: 'audio',
                        name: 'AudioG',
                        component: AudioG
                    },
                    {
                        path: 'video',
                        name: 'Video',
                        component: Video
                    },
                    {
                        path: 'appli',
                        name: 'Appli',
                        component: Appli
                    }
                ]
        }
    ]
})



