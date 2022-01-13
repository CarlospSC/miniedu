<template lang="pug">
div#nav.navbar.navbar-dark.bg-dark.navbar-expand-lg
  router-link(to="/").navbar-brand  Home  
    img(alt="Home logo" src="../assets/home.png" height=20)
  router-link(to="/registro").navbar-brand  Registro  
    img(alt="Home logo" src="../assets/registro.png" height=20)
  router-link(to="/login").navbar-brand  Login  
    img(alt="Login logo" src="../assets/login.png" height=20) 

</template>

<script>
export default {

}
</script>

<style>
</style>