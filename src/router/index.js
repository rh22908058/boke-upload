import Vue from 'vue'
import Router from 'vue-router'
import mainContent from '@/components/mainContent'
import detailArtical from '@/components/detailArtical'
import about from '@/components/about'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        component: mainContent
    }, {
        path: '/detail',
        component: detailArtical
    }, {
        path: '/about',
        component: about
    }],
    linkActiveClass: 'active'
})