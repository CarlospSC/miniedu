<template lang="pug">
Banner
div.home
  HomeT
  div.container
    img.img-fluid(alt="Home logo" src="../assets/home.png" height=535)
</template>


<script>

import HomeT from '../components/HomeT.vue'
import Banner from '../components/Banner.vue'

export default {
  name: 'Home',

  components: {
    HomeT,
    Banner
  }
  
}
</script>