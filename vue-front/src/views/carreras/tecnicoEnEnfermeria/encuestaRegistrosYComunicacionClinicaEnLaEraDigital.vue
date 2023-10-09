<template>
    <encuesta materia="Registros y comunicacion clinica en la era digital" ></encuesta>
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuesta.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
       name:"Registros y comunicacion clinica en la era digital" ,
       components: {
    encuesta
  },data(){
         return{
           message: "el socket no ha funcionado",
           votosOpcion1Pregunta1Tics:0,
          votosOpcion2Pregunta1Tics:0,
          votosOpcion1Pregunta2Tics:0,
          votosOpcion2Pregunta2Tics:0,
          
         }
       }, 
       mounted() {
     
     }
     }
  </script>
  <style scoped>
  
  </style>
