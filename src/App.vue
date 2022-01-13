<template lang="pug">

Navbar

div.container 
  router-view 

Footer 
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 15px;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  padding:15px;
}

form {
    text-align: left;
    padding: 3px;
    font-size: 15px;
    margin: 10px;
      }

footer {
    background-color: #42b983;
    position: static;
    bottom: 0;
    width: 100%;
    height: 30px;
    color: black;
  }
</style>
