<template>
  <div>TV</div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter');
    // console.log(123);
    // console.log(this);
    // next((vm)=>{
    //   console.log(vm);
    // })
    next()
  },
  beforeRouteUpdate(to, from, next) {
    console.log('beforeRouteUpdate');
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave');
    next()
  },
  mounted() {
    console.log('mounted');
  }
}

</script>
<style lang='' scoped>
</style>
