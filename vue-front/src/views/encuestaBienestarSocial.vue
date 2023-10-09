<template>

    <encuesta materia="Bienestar social" ></encuesta>
  
  
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuestaBienestarSocial.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
      name: "Bienestar Social",
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
