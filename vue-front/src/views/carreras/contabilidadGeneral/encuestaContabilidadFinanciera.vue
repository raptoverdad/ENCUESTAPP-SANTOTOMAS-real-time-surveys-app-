<template>

    <encuesta materia="Contabilidad financiera" ></encuesta>
  
  
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuesta.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
      name:"Contabilidad financiera" ,
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
  