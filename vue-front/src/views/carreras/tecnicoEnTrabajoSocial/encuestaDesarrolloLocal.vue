<template>
    <encuesta materia="Desarrollo local" ></encuesta>
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuesta.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
       name: "Desarrollo local",
       components: {
    encuesta
  },data(){
      
       }, 
       mounted() {
     
     }
     }
  </script>
  <style scoped>
  
  </style>