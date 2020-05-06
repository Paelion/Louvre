import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Oeuvre from '../components/Oeuvre.vue'
import Joconde from '../components/oeuvres/Joconde.vue'
import Liberte from '../components/oeuvres/Liberte.vue'
import Toutankhamon from '../components/oeuvres/Toutankhamon.vue'
import Venus from '../components/oeuvres/Venus.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/oeuvre',
      name: 'Oeuvre',
      component: Oeuvre
    },
    {
      path: '/joconde',
      name: 'Joconde',
      component: Joconde
    },
    {
      path: '/liberte',
      name: 'Liberte',
      component: Liberte
    },
    {
      path: '/toutankhamon',
      name: 'Toutankhamon',
      component: Toutankhamon
    },
    {
      path: '/venus',
      name: 'Venus',
      component: Venus
    }
  ]
})



