<template>
    <div class="modalMensajeDelCreador">
        <img src="../assets/ENCUESTAPPLOGOSINFONDO.png" alt="">
       <h1>Cargando información...</h1> 
    </div>
  </template>
  
  <script>
  import axios from 'axios'
  import store from '../store/index'
  
  export default {
    name: 'modal',
    props: {
      mensaje: String
    },
    data() {
      return {
        newUsername:''
      };
    },
    mounted(){
    
    },

  }
  </script>
      
      <!-- Add "scoped" attribute to limit CSS to this component only -->
      <style scoped>
      /* 
      ESTILOS:
      font-family: 'Lexend Peta', sans-serif;
      font-family: 'Poppins', sans-serif;
      font-family: 'Russo One', sans-serif;
      */
  
  
  
  
  
      #app{
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
      }
      
      img{
  animation: spin 8s infinite linear;
  height: 28vh;
}
@keyframes spin {
  0% { transform: rotateY(0deg); }
  100% { transform: rotateY(360deg); }
}
    
      .modalMensajeDelCreador{
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        position:fixed;
        z-index:100;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:#fff;
        display:flex;
        color:#fff;
        font-family: 'Poppins', sans-serif;
        text-align:center;
        font-size:3vh;
  
      }
   
  
      @keyframes spin {
        0% { transform: rotateY(0deg); }
        100% { transform: rotateY(360deg); }
      }
h1{
color: #004036;
}
  
      </style>
      