<template lang="pug">
Banner
LoginT
div.container
    img.img-fluid(alt="Login logo" src="../assets/login.png" height=400)
div.d-flex
    form#loginform(@submit.prevent="verificarLogin")
        div.mb-3
            label.form-label Ingrese su Usuario:
            input.form-control(type="text" placeholder="Usuario" v-model="usuariologin")
        div.mb-3
            label.form-label Ingrese su contraseña:
            input.form-control(type="password" placeholder="**********" v-model="contraseñalogin")
        div.mb-3
            button(type="submit").btn.btn-dark Ingresar
</template>

<script>

import LoginT from '../components/LoginT.vue'
import Banner from '../components/Banner.vue'
import {mapState} from 'vuex'

export default {
    data() {
        return {
            usuariologin: "",
            contraseñalogin: ""
            
        }
    },
    components: {
        LoginT,
        Banner
    },
    computed: {
        ...mapState(['usuarios'])
    },
    methods: {
        verificarLogin(){
            console.log("Se ha ejecutado el verificarLogin")
            if(this.usuariologin.trim() === "" || this.contraseñaStorage === ""){
                alert("Faltan campos por rellenar")
            }else{
                for (var i = 0; i <localStorage.length; i++){
                    var usuarioStorage = localStorage.key(i)
                    var contraseñaStorage = localStorage.getItem(usuarioStorage)
                    console.log("El usuario y clave revisado son: ", usuarioStorage, contraseñaStorage)
                    if(this.usuariologin === usuarioStorage && this.contraseñalogin === contraseñaStorage){
                        alert("Ha ingresado sus datos correctamente, redireccionando...")
                        console.log("El usuario ingresado ha sido: ", this.usuariologin)
                        var urlActual = window.location.href
                        console.log("La url actual es: ", urlActual)
                        //urlActual = urlActual - 'login'
                        var urlNueva = urlActual + '/' + usuarioStorage
                        console.log("La url nueva será: ", urlNueva)
                        window.location.href = urlNueva
                        break
                    }
                    
                }
                if (i === localStorage.length){
                    alert("El usuario ingresado no es válido")
                }
            }
            
            
            /*INTENTO FALLIDO CON LA STORE
            if (this.usuariologin === this.$store.state.usuarios['usuario'] && this.contraseñalogin === this.$store.state.usuarios['contraseña']){
                alert("Ha ingresado sus datos correctamente")
                console.log("El usuario ingresado ha sido: ", this.usuariologin)
                console.log("En el state se encuentra: ", this.$store.state.usuarios)
            }
            */
            
        }
    }

}
</script>

<style>
</style>