import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
    routes:[{
        path:'/',
        component:()=>import('../page/Home.vue'),
        //在路由中保存一份数据
        meta:{title:"京东"}
    },{
        path:'/classify',
        component:()=>import('../page/Classify.vue'),
        meta:{title:"分类页"}
    },{
        path:'/parmas/:title',
        component:()=>import('../components/parmas.vue'),
        meta:{title:"功能页"}
    },{
        path:'/cart',
        component:()=>import('../page/Cart.vue'),
        meta:{title:"购物车"}
    },{
        path:'/me',
        component:()=>import('../page/me.vue'),
        meta:{title:"我的"}
    },]
})

export default router

router.beforeEach((to, from, next) => {
    //console.log(from);
    //console.log(to.meta.title);
    let title = to.meta.title
    document.title = title
    next()
})