<template lang="pug">
h1 Bienvenid@, {{ $route.params.perfil }} 
CerrarSesion
</template>

<script>

import CerrarSesion from '../components/CerrarSesion.vue'

export default {
    components: {
        CerrarSesion
    }
}
</script>

<style>

</style>