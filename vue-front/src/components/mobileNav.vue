<template>
<nav id="mobileNav" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <div>
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
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriaenadministracion_nammaq.png" alt="" v-if="$store.state.carrera == 'Ejecucion en administracion' ||$store.state.carrera == 'Ejecucion en administracion continuidad'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriaagricola_rndp1x.png" alt="" v-if="$store.state.carrera == 'Ingenieria agricola'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriacomercioexterior_ispqvy.png" alt="" v-if="$store.state.carrera == 'Ingenieria en comercio exterior'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/gastronomia_x9ydv8.png" alt="" v-if="$store.state.carrera == 'Gastronomia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/analistaprogramador_wi2x00.png" alt="" v-if="$store.state.carrera == 'Analista programador'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/contabilidadgeneral_yxmigd.png" alt="" v-if="$store.state.carrera == 'Contabilidad general'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/educacionparvularia_gap34r.png" alt="" v-if="$store.state.carrera == 'Tecnico en educacion parvularia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/educacionespecial_q3leqw.png" alt="" v-if="$store.state.carrera == 'Tecnico en educacion especial'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/enfermeriagineco_wz9gpt.png" alt="" v-if="$store.state.carrera == 'Tecnico en enfermeria gineco'">
      </div>
      <h1 v-if="$store.state.logged ==true">¡Bienvenid@ {{ $store.state.usuario }}!</h1>
      <h3 id="usuarioDesconectado" v-if="$store.state.logged !=true">¡Hola tomasino! bienvenido a Encuestapp-Santotomas.</h3>

      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span  class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
           <h1>inicio:</h1>
          </li>

          <li v-if="$store.state.usuario == false" class="nav-item">
            <router-link  v-on:click="closeMobileNav()" to="/ingresar">iniciar sesion</router-link> 
          </li>
          <li  v-if="$store.state.usuario == false" class="nav-item">
            <router-link v-on:click="closeMobileNav()" to="/registrarse">registrarse</router-link>
          </li>

          <li v-if="!$store.state.usuario == false" class="nav-item">
            <router-link  v-on:click="closeMobileNav()" to="/miPerfil">Mi perfil</router-link> 
          </li>
        
          <li v-on:click="$store.commit('cerrarSesion')"  v-if="!$store.state.usuario == false" class="nav-item">
           <h1>salir</h1>
          </li>
          <li class="nav-item">
           <h1>Descubre encuestapp:</h1>
          </li>
          <li v-on:click="closeMobileNav()"   class="nav-item">
            <router-link to="/encuestas" class="enlace2" active-class="activo2" exact-active-class="exacto">Encuestas</router-link>
          </li>
          <li v-on:click="closeMobileNav()"  class="nav-item">
            <router-link to="/misVotos" class="enlace2" active-class="activo2" exact-active-class="exacto">Mis votos</router-link>
          </li>
          <li v-on:click="closeMobileNav()"  class="nav-item">
            <router-link to="/Estadisticas" class="enlace2" active-class="activo2" exact-active-class="exacto">Estadisticas</router-link>
          </li>
        
        </ul>
      </div>

    </div>
  </nav>
</template>
<script>
import axios from 'axios'
import {io} from 'socket.io-client'
import modal from '@/components/modal.vue'

export default {
      name: 'mobileNav',
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
#usuario h1,h3{
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size:20px ;
}
nav {
  padding: 30px;

}

.desktopNavDisplayerArrows{
  position: absolute;
  left: 20vw;
top: 50%;

  height: 5vh;
  width: 5vh;
}
.desktopNav div img{
      height:30vh;
      width:30vh;

    }
li h1{
  font-size: large;
}
img{
  animation: spin 8s infinite linear;
  height: 28vh;
}
#serviciosDropdown{
  font-size:3vh;
  margin-top: 3vh;
}

#desktopNav{

      position: fixed;
      top: 0;
      left: 0;
      height: 100vh;
      min-width:20vw;
      max-width:20vw;
      background-color: #000;
      
    }
    .dropdown{
      display: flex;
      justify-content: center;
      align-items: center;
      width:20vw;
    }

.nav div{

  background-color:#fff;
}
#mobileNav{
  display: none;
  width: 100vw;
  max-width: 100vw;
  
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
.whiteDiv h2
{
  color:#000
}

.nav-link{
  font-size: xx-large;
  color: #fff;
}
#desktopNav .dropdown-menu{
max-height:40vh;
overflow:scroll;
}


#desktopNav img{
max-width: 20vw;
}
.navWrapper{
  display: flex;
  flex-direction: row;
padding: 0;

justify-content: center;
align-items: center;
  background-color: #000 !important;
  width:20vw;
  height: 9vh;

}
.green-text {
  color:#004036;
}
.navWrapper li{
width: 100%;
height: 9vh;
display: flex;
justify-content: center;
align-items: center;
}


a.router-link-exact-active {
  color: #004036;
}
.nav-link{
color:#ffff;

}
.modalMensajeDelCreador{
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  position:fixed;
z-index:100;
  left:0;
  top:0;
  width:100vw;
  height:100vh;
  background-color:rgb(0,0,0,0.7);
  display:flex;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  transition:0.5s;
  text-align:center;
  font-size:3vh;
}
.advertenciaDeMensaje{
  font-weight:bold;
  font-size:5vh
}
.mensaje{
background-color:#004036;
height:60vh;
width:80vw;
overflow:scroll;
}


@keyframes spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
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
.modalMensajeDelCreador{
  display:flex;
  justify-content:center;
  flex-direction:column;
  align-items:center;
  position:fixed;
  z-index:100;
  left:0;
  top:0;
  width:100vw;
  height:100vh;
  background-color:rgb(0,0,0,0.7);
  display:flex;
  color:#fff;
  font-family: 'Poppins', sans-serif;
  transition:0.5s;
  text-align:center;
  padding:3vh;
  overflow:scroll;
}
}

</style>

