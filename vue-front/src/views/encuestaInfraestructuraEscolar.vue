<template>

    <encuesta materia="Infraestructura" ></encuesta>
  
  
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuesta.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
      name: "Infraestructura",
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
