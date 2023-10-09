<template>

    <encuesta materia="Profesores" ></encuesta>
  
  
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuestaProfesores.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
      name: "Profesores",
       components: {
         encuesta
  },data(){
         return{
           
         }
       },
       mounted() {
     
     }
     }
  </script>
  <style scoped>
  
  </style>
