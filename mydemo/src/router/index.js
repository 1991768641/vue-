import Vue from 'vue';
import Router from 'vue-router';
import Movie from '../components/movie';
import Game from '../components/game';
import Game1 from '../components/game1';
import Game2 from '../components/game2';
import detail from '../components/detail';
import gamedetail from '../components/gamedetail';
// import page404 from '../components/page404';

Vue.use(Router);

const routes = [
  {
    path:'/',
    redirect: '/movie'
  },
  {
    name:'movie',
    path: '/movie',
    alias: '/movie2',
    component: Movie,
    children: [{
      name:'moviedetail',
      path: 'detail/:id/:nm',
      component: detail,
    }]
  },
  {
    name:'game',
    path: '/game',
    components:{
      default:Game,
      Game1,
      Game2,
    }
  },
  {
    path:'/gamedetail/:id',
    component:gamedetail,
    // props: true
    // props:{nm:123}
    props:(routes)=>{
      return {nm:routes.params.id}
    }
  },
  {
    path:'/tv',
    name:'TV',
    component:()=>import('../components/TV.vue'),
    beforeEnter: (to, from, next) => {
      console.log(0)
      next()
    }
  },
  {
    path:'*',
    component:()=>import('../components/page404.vue')
  }
]

const router = new Router({
  mode:'history',
  routes
})

router.beforeEach((to,from,next)=>{
  /* if(to.name!=='TV'){
    next()
  } */
  // if(from.name=='TV'){
  //   if(confirm('狗比')){
  //     next()
  //   }
  // }else{
  //   next()
  // }
  next()
})

router.afterEach((to,from,next)=>{
  // console.log(0)
})

export default router