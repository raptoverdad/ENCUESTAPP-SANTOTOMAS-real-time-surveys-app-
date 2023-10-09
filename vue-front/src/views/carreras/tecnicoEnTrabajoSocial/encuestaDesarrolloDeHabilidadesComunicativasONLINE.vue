<template>
    <encuesta materia="Desarrollo de habilidades comunicativas" ></encuesta>
  </template>
  <script>
     // @ is an alias to /src
     import encuesta from '@/components/encuesta.vue'

     export default {
       name: "Desarrollo de habilidades comunicativas",
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