<template lang="pug">
Banner
RegistroT
div.container
    img.img-fluid(alt="Home logo" src="../assets/registro.png" height=400)
div.d-flex
    form#registroform(@submit.prevent="procesarRegistro")
        div.mb-3
            label.form-label Ingrese su nombre:
            input.form-control(type="text" placeholder="Nombre" v-model="datosRegistro.nombre")

        div.mb-3
            label.form-label Ingrese su nombre de usuario:
            input.form-control.my-2(type="text" placeholder="Usuario" v-model="datosRegistro.usuario")
        
        div.mb-3
            label.form-label Ingrese su correo electrónico:
            input.form-control.my-2(type="email" placeholder="micorreo@algomail.sas" v-model="datosRegistro.correo")
            div.form-text Nunca compartiremos su correo electrónico con nadie
        
        div.mb-3
            label.form-label Cree una contraseña: 
            input.form-control.my-2(type="password" placeholder="***********" v-model="datosRegistro.contraseña")
        
        div.mb-3
            label.form-label Repita la contraseña anterior: 
            input.form-control.my-2(type="password" placeholder="***********" v-model="datosRegistro.contraseña2")

        div.mb-3
            button(type="submit").btn.btn-dark(:disabled = false) Registrar

<!--p {{ datosRegistro }} -->
</template>

<script>

import RegistroT from '../components/RegistroT.vue'
import Banner from '../components/Banner.vue'
import {mapState, mapActions} from 'vuex'

export default {
    components: {
        RegistroT,
        Banner
    },

    data() {
        return {
            datosRegistro: {
                nombre: '',
                usuario: '',
                correo: '',
                contraseña: '',
                contraseña2: ''
            }
        }
    },

    methods: {
        ...mapActions(['accioncrearUsuario']),

        procesarRegistro(){
                if (this.datosRegistro.nombre === "" || this.datosRegistro.usuario === "" || this.datosRegistro.correo === "" || this.datosRegistro.contraseña === ""){
                    alert("Faltan campos por rellenar")
                }else{
                    if (this.datosRegistro.contraseña !== this.datosRegistro.contraseña2){
                        alert("Las contraseñas no coinciden")
                    }else{
                        console.log(this.datosRegistro)
                        alert("Usuario registrado satisfactoriamente")
                        console.log("El state antes de guardar el registro: ", this.$store.state.usuarios)
                        this.accioncrearUsuario(this.datosRegistro)
                        localStorage.setItem(this.datosRegistro['usuario'], this.datosRegistro['contraseña'])
                        //window.location.href = "localhost:8080/login";
                        this.datosRegistro = {
                        nombre: '',
                        usuario: '',
                        correo: '',
                        contraseña: ''
                        }
                        console.log("El state quedó de la siguiente manera: ", this.$store.state.usuarios)
                        
                    }
                    
                }
            },
        
        },

    computed: {
        bloquear(){
            return (this.datosRegistro.nombre === "" || this.datosRegistro.usuario === "" || this.datosRegistro.correo === "" || this.datosRegistro.contraseña === "") ? true : false
        },
        ...mapState(['usuarios'])
    }
    
}
</script>

<style>
</style>