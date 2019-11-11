<template>
 <div>details</div>
</template>

<script>
export default {
    props:['id','nm'],
    data () {
        return {
        }
    },
    mounted() {
        console.log(this.id);
        console.log(this.nm);
    },
}

</script>
<style lang='' scoped>
</style>
