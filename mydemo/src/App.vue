<template>
  <div>
    <ul>
      <router-link tag="li" to="/movie" active-class='active'>电影</router-link>
      <router-link tag="li" to="/game" active-class='active'>游戏</router-link>
      <router-link tag="li" :to="{name:'TV',query:{type:'1'}}">TV</router-link>
    </ul>
    <router-view></router-view>
    <router-view name='Game1'></router-view>
    <router-view name='Game2'></router-view>
  </div>
</template>


<style lang='css' scoped>
  ul li{
    list-style: none;
    font-size: 30px;
    display: inline-block;
    margin-right: 10px;
  }
  ul li.active{
    color: yellowgreen;
    background: #0ff;
  }

</style>
