<template>
    <encuesta materia="Legislacion laboral" ></encuesta>
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuesta.vue'
     import {io} from 'socket.io-client'
  import axios from 'axios'
  
     export default {
      name:"Legislacion laboral",
       components: {
    encuesta
  },data(){
         return{
           message: "el socket no ha funcionado",

          
         }
       }, 
       mounted() {
     
     }
     }
  </script>
  <style scoped>
  
  </style>
  