<template>
  <div>
    <ul>
      <!-- <router-link tag="li" :to="`/movie/detail/${movie.id}/${movie.nm}`" v-for="movie in list" v-bind:key="movie.id">{{movie.nm}}</router-link> -->
      <li @click="handleclick(movie.id,movie.nm)" v-for="movie in list" v-bind:key="movie.id">{{movie.nm}}</li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[]
    }
  },
  mounted() {
    fetch('/ajax/movieOnInfoList?token=')
    .then(response=>response.json())
    .then(data=>{
        this.list=data.movieList
    })
  },
  methods: {
    handleclick(id,nm){
      if(this.$route.params.nm!==nm){
        this.$router.push({name:'moviedetail',params:{id,nm}});
      }
    }
  },
};
</script>
<style lang='stylus' scoped></style>
