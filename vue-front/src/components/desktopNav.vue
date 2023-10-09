<template>
<div id="desktopNav">
  <div v-if="$store.state.logged == false" class="navOptions1">
<div class="optionsBox1">
  <router-link to="/ingresar" class="enlace" active-class="activo1" exact-active-class="exacto">ingresar</router-link>
  <router-link to="/registrarse" class="enlace" active-class="activo1" exact-active-class="exacto">registrarse</router-link>
</div>
 </div>
 <div v-if="$store.state.logged == true" class="navOptions1">
<div class="optionsBox1">
  <router-link to="/miPerfil" class="enlace" active-class="activo1" exact-active-class="exacto">Mi perfil</router-link>
  <a class="enlace" v-on:click="$store.commit('cerrarSesion')">Cerrar sesión</a>
</div>


 
 </div>
 <div class="userData">
  <img v-if="$store.state.carrera == false" src="../assets/ENCUESTAPPLOGOSINFONDO.png" alt="">
  <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696019/tecnicorrhh_slhrqo.png" alt="" v-if="$store.state.carrera == 'Tecnico en recursos humanos'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicoturismo_w1im2d.png" alt="" v-if="$store.state.carrera == 'Tecnico en hoteleria y turismo'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicotrabajosocial_abrjiz.png" alt="" v-if="$store.state.carrera == 'Tecnico en trabajo social'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicolaboratorioclinico_ufpu1t.png" alt="" v-if="$store.state.carrera == 'Tecnico en laboratorio clinico'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicojuridicopng_bmlpmu.png" alt="" v-if="$store.state.carrera == 'Tecnico juridico'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicoenlogistica_gesjrb.png" alt="" v-if="$store.state.carrera == 'Tecnico en administracion logistica'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicoenveterinaria_ynfqvs.png" alt="" v-if="$store.state.carrera == 'Tecnico en veterinaria'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicoenodontologia_c7i9to.png" alt="" v-if="$store.state.carrera == 'Tecnico en odontologia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696018/tecnicoenenfermeria_wfvv2f.png" alt="" v-if="$store.state.carrera == 'Tecnico en enfermeria'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/tecnicoagricola_xptub4.png" alt="" v-if="$store.state.carrera == 'Tecnico agricola'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/tecnicocomex_so2oii.png" alt="" v-if="$store.state.carrera == 'Tecnico en comercio exterior'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/tecnicoadministracion_y2nabf.png" alt="" v-if="$store.state.carrera == 'Tecnico en administracion'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/serviciosocial_cdw2nz.png" alt="" v-if="$store.state.carrera == 'Servicio social'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/psicopedagogia_r3zslx.png" alt="" v-if="$store.state.carrera == 'Psicopedagogia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/serviciosaerocomerciales_xlln8a.png" alt="" v-if="$store.state.carrera == 'Servicios aerocomerciales y transportes'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/laboratoristadental_my18bh.png" alt="" v-if="$store.state.carrera == 'Tecnico laboratorista dental'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696017/ingenieriarrhh_mc2wpz.png" alt="" v-if="$store.state.carrera == 'Ingenieria en recursos humanos'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenierialogistica_leibs6.png" alt="" v-if="$store.state.carrera == 'Ingenieria en logistica'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriainformatica_wbsc2n.png" alt="" v-if="$store.state.carrera == 'Ingenieria en informatica'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriaenadministracion_nammaq.png" alt="" v-if="$store.state.carrera == 'Ejecucion en administracion' || $store.state.carrera =='Ejecucion en administracion continuidad'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriaagricola_rndp1x.png" alt="" v-if="$store.state.carrera == 'Ingenieria agricola'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriacomercioexterior_ispqvy.png" alt="" v-if="$store.state.carrera == 'Ingenieria en comercio exterior'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/gastronomia_x9ydv8.png" alt="" v-if="$store.state.carrera == 'Gastronomia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/analistaprogramador_wi2x00.png" alt="" v-if="$store.state.carrera == 'Analista programador'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/contabilidadgeneral_yxmigd.png" alt="" v-if="$store.state.carrera == 'Contabilidad general'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/educacionparvularia_gap34r.png" alt="" v-if="$store.state.carrera == 'Tecnico en educacion parvularia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/educacionespecial_q3leqw.png" alt="" v-if="$store.state.carrera == 'Tecnico en educacion especial'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/enfermeriagineco_wz9gpt.png" alt="" v-if="$store.state.carrera == 'Tecnico en enfermeria gineco'">
  <div  id="usuario">
      <h3 id="usuarioDesconectado" v-if="$store.state.logged !=true">¡Hola tomasino! bienvenido a Encuestapp-Santotomas.</h3>
  </div>

 </div>
 <div class="navOptions2">

  <router-link to="/encuestas" class="enlace2" active-class="activo2" exact-active-class="exacto">Encuestas</router-link>
  <router-link to="/Estadisticas" class="enlace2" active-class="activo2" exact-active-class="exacto">Estadisticas</router-link>
  <router-link to="/misVotos" v-if="$store.state.logged==true" class="enlace2" active-class="activo2" exact-active-class="exacto">Mis votos</router-link>

  

 
 </div>
</div>

</template>
<script>
import axios from 'axios'
import {io} from 'socket.io-client'

import modal from '@/components/modal.vue'



export default {
      name: 'desktopNav',
      components: {
       modal
  },
  data(){
        return{
          message: "el socket no ha funcionado",
          times:[],
          encuestasRespondidas:0,
          usuario:localStorage.getItem("usuario") || false,
          token:localStorage.getItem("token") || false,
        }
      },
  mounted() {
//hacer validacion de la data del localstorage
  },
  beforeDestroy() {
    
  },methods:{
  closeMobileNav:()=>{
    document.querySelector("#navbarNav").classList.toggle("show")
    },

      
    }


     }
</script>
<style scoped>
/* 
ESTILOS:
font-family: 'Lexend Peta', sans-serif;
font-family: 'Poppins', sans-serif;
font-family: 'Russo One', sans-serif;
*/

#app{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

}


li h1{
  font-size: large;
}
img{
  animation: spin 8s infinite linear;
  height: 28vh;
}
@keyframes spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
#serviciosDropdown{
  font-size:3vh;
  margin-top: 3vh;
}

#desktopNav{
      position: fixed;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      top: 0;
      left: 0;
      height: 100vh;
      min-width:20vw;
      max-width:20vw;
      background-color: #fff; 
    }
    .dropdown{
      display: flex;
      justify-content: center;
      align-items: center;
      width:20vw;
    }
.userData img{
  margin:2vh
}
.nav div{

  background-color:#fff;
}
#mobileNav{
  display: none;
  
}
#desktopNav ul{
  width: 100%;
  text-align: center;
}

#desktopNav div{
max-width: 100%;

}
#desktopNav h2{
max-width: 20vw;
word-wrap: break-word;
}


#desktopNav img{
max-width: 20vw;
}

.enlace{
color: #fff;
font-size: 2vh;
text-decoration: none;
cursor: pointer;
}
.enlace2{
  cursor: pointer;
color: #fff;
font-size: 5vh;
text-decoration: none;
}
.userData{
  height: 50vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20vw;
  
}
.userData img{
  height: 30vh;
  width: 30vh;
}
div a{
  width: 20vw;
}
.userData h1{
font-size: x-large;
text-align: center;
}
.navOptions2{
  height: 50vh; 

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.navOptions1{
  height: min-content; 
  background-color: #004036;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
flex-wrap: wrap;
  align-items: center;
  font-size:4vh;
}
.navOptions1 .enlace{
  height: min-content; 
  background-color: #004036;
  display: flex;
  flex-direction: row;
  justify-content:center;
  margin:2vh ;
flex-wrap: wrap;
  align-items: center;
  font-size:2vh;
}
.navOptions1 div {
  height: 9vh; 
overflow: hidden;
}

.activo1{
  font-size:2vh;
  color: #fff;
  background-color: #004036;
  text-decoration:underline;
}
.activo2{
  font-size: 5vh;
  color: #fff;
  background-color: #004036;

animation:apear 2s ease-in-out;
}
.optionsBox1{
  height: 9vh; 
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  border: 3px solid  #004036;
  background-color: #004036;
  color: #fff;
}

.optionsBox2{
  height: 50vh; 
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 20vw;
  background-color: transparent;
  color: #fff;
}

@keyframes apear {
  0% {opacity: 0; }
  100% {opacity: 2;  }
}
/*subirlo de 980 haria tener problemas al mobilenav*/
@media (max-width:980px) {
  #mobileNav{
  display: flex;
  background-color: #fff;
}
#desktopNav{
  display: none;
}

}
#usuario h1,h3{
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size:20px ;
}

.mensaje{
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size:20px ;
}
</style>

