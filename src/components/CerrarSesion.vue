<template lang="pug">
div.d-flex
    div.mb-3
    
            button(type="submit" @click="redirrecionarHome").btn.btn-dark Cerrar Sesión
</template>

<script>
export default {
    methods: {
        redirrecionarHome() {
            alert("Redireccionando al home...")
            window.location.href = '/'
        }
    }
}
</script>

<style>

</style>