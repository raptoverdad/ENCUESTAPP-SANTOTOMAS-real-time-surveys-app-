<template>
  <div class="locationDiv"><h1>inicio</h1></div>
    <form class="form" v-on:submit.prevent="$store.commit('registerPost')">

   <h1  >&#10084; Ayudanos a mejorar la educacion de santotomas y responde las encuestas de tu carrera 
    cada mes para asegurar una buena educacion y aprendizaje a todos &#10084;</h1>
 <a href="https://encuestapp-santotomas.com/encuestas">    &#11088;click aqui para ir a las encuestas &#11088;</a>
 </form>
 

 
 
     </template>
     
     <script>
     // @ is an alias to /src

     import store from '../store/index'

     export default {
       name: 'HomeView',
       components: {
     
       },data(){
         return{
           message: "el socket no ha funcionado",
           times:[]
         }
       },
       mounted() {
     
     }
     }
     </script>
 <style scoped>
 .locationDiv{
  width: 80vw;
  height: 9vh;
  margin-left: 20vw;
  background-color:#fff ;
  color: #004036;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 form{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color:#004036 ; 
 color: #000;
 height: 91vh;
 max-height: 91vh;
width: 80vw;
 text-align: center;
 justify-content: center;
 margin-left: 20vw;
 overflow: hidden;
 background: linear-gradient(45deg, #004036, #ffffff, #004036); /* Colores de fondo */
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
 }
 @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
 .row{
   display: flex;
 }
 form input{
 width: 20vw;
 }

 .row{
 
 }
 h1{
     
 }
 
   @media (max-width: 1200px) {
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
   background: linear-gradient(45deg, #004036, #ffffff, #004036); /* Colores de fondo */
  background-size: 200% 200%;
  animation: gradientAnimation 15s ease infinite;
   color: #004036;
 }
  .locationDiv{
    width: 100%;

  height: 9vh;
  margin-left: 0;
  background-color: #004036;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#fff;
 }

  }
 
 </style>
