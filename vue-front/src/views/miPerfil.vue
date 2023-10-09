<template>
    <div class="locationDiv"><h1>Mi perfil</h1></div>
    <div v-if="$store.state.logged !== false" class="surveyBody">    
        <h1>
            carrera: {{" " + $store.state.carrera }}
        </h1>
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
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriaenadministracion_nammaq.png" alt="" v-if="$store.state.carrera == 'ejecucion en administracion' ||$store.state.carrera== 'ejecucion en administracion continuidad'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriaagricola_rndp1x.png" alt="" v-if="$store.state.carrera == 'Ingenieria agricola'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/ingenieriacomercioexterior_ispqvy.png" alt="" v-if="$store.state.carrera == 'Ingenieria en comercio exterior'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696016/gastronomia_x9ydv8.png" alt="" v-if="$store.state.carrera == 'Gastronomia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/analistaprogramador_wi2x00.png" alt="" v-if="$store.state.carrera == 'Analista programador'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/contabilidadgeneral_yxmigd.png" alt="" v-if="$store.state.carrera == 'Contabilidad general'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/educacionparvularia_gap34r.png" alt="" v-if="$store.state.carrera == 'Tecnico en educacion parvularia'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/educacionespecial_q3leqw.png" alt="" v-if="$store.state.carrera == 'Tecnico en educacion especial'">
        <img src="https://res.cloudinary.com/debvhmcid/image/upload/v1691696015/enfermeriagineco_wz9gpt.png" alt="" v-if="$store.state.carrera == 'Tecnico en enfermeria gineco'">

        <h1>
            nombre del usuario:
        </h1>
        <h2>
            {{$store.state.usuario}}
        </h2>
        <input type="button" value="Cambiar nombre de usuario" v-on:click="cambiarNombreDeUsuario">
        <modalUsername v-if='$store.state.usernameModalClicked == true'>
</modalUsername>
    </div>

    <div class="notUser"  v-if="$store.state.logged == false">
      <h1>Debes iniciar sesión para ver tu perfil</h1>
    </div>
     </template>
     <script>
         // @ is an alias to /src
         import axios from 'axios';
         import modalUsername from '@/components/modalUsername.vue'
         
         export default {
           name: 'HomeView',
           components: {  
            modalUsername,
           },data(){
             return{
               message: "el socket no ha funcionado",
             }
           },
           mounted() {
         
         },methods:{
          async cambiarNombreDeUsuario(){
             this.$store.state.usernameModalClicked=true
          },
        
         }
         }
     </script>
     <style scoped>
     img{
      height: 30vh;
      width: 30vh;
     }
     .locationDiv{
  width: 80vw;
  height: 9vh;
  margin-left: 20vw;
  background-color:#004036 ;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
 }
    .surveyBody{
       left:20vw;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       margin-left: 20vw;
       text-align: center;
       height: 100vh;
     }
     .surveyBody h1{
    padding: 3vh;
    }
    .options {
    display: flex;
    justify-content: space-around;
    }
    .option{
      cursor: pointer;
    }
    .encuesta{
    margin-top: 10vh;
    }
    .notUser{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 80vw;
      margin-left: 20vw;
    }

    @media (max-width:980px) {
      .surveyBody{
       left:0;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       margin-left: 0;
       text-align: center;
       height: 100vh;
       
     }
      .notUser{
       margin-left:0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
    }
  form{
   left:0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-left: 0;
   text-align: center;
   height: 100vh;
   width: 100%;
   background-color: #fff;
   color: #004036;
 }
 .locationDiv{
    width: 100%;

  height: 9vh;
  margin-left: 0;
  background-color:#004036 ;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 }
     </style>