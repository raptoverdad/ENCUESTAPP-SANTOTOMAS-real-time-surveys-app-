<template>
  <div v-if="$store.state.clicked == false" class="modalMensajeDelCreador">
    <h2 class="advertenciaDeMensaje">Mensaje del team EncuestApp</h2><br>
    <h3 class="mensaje">
      ¡Hola apreciado tomasino!<br>
      {{ mensaje }}
      <br>
      ¡Gracias por ser parte de EncuestApp!<br>
      <br>
      Atentamente,
      El equipo de EncuestApp<br>
    </h3>
    <input type="button" v-on:click="desvanecer()" value="entendido">
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
      materia: this.materia,
      conectado: false,
      // Esta parte se saca de la tabla preguntas y puntaje
      votos: [
        { votosnegativos: 10, votosneutros: 100, votospositivos: 19 },
        { votosnegativos: 10, votosneutros: 100, votospositivos: 19 },
        { votosnegativos: 10, votosneutros: 100, votospositivos: 19 },
        { votosnegativos: 10, votosneutros: 100, votospositivos: 19 },
        { votosnegativos: 10, votosneutros: 100, votospositivos: 19 }
      ],
      // Estos votos se sacan de la tabla preguntasresponddasdelosusuarios
      misVotos: [],
      preguntas: [
        "¿Te emociona asistir a las clases de este ramo?",
        "¿Cómo calificarías al docente que te enseña esta materia?",
        "¿La universidad tiene los instrumentos e infraestructura necesaria para que tengas buen desempeño en este ramo?",
        "¿Sientes que este ramo es importante para tu carrera profesional?",
        "¿Sientes que el docente explica bien esta materia?"
      ]
    };
  },
  mounted(){
  
  },
  methods: {
    desvanecer() {
      store.commit('isClicked');

    }
  }
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
    
    nav {
      padding: 30px;
    
    }
    
    .desktopNavDisplayerArrows{
      position: absolute;
      left: 20vw;
    top: 50%;
    
      height: 5vh;
      width: 5vh;
    }
    .desktopNav div img{
          height:30vh;
          width:30vh;
    
        }
    li h1{
      font-size: x-large;
    }
    img{
      animation: spin 8s infinite linear;
      height: 28vh;
    }
    
    #desktopNav{
    
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          min-width:20vw;
          max-width:20vw;
          background-color: #000;
          
        }
    
    li{
      padding:0% 2%;
    }
    .nav div{
    
      background-color:#fff;
    }
    #mobileNav{
      display: none;
      
    }
    #desktopNav ul{
      width: 100%;
      text-align: center;
    }
    
    #desktopNav div{
    max-width: 100%;
    
    }
    #desktopNav h2{
    max-width: 20vw;
    word-wrap: break-word;
    }
    .whiteDiv h2
    {
      color:#000
    }
      
    .nav-link{
      font-size: xx-large;
      color: #fff;
    }
    #desktopNav .dropdown-menu{
    max-height:40vh;
    overflow:scroll;
    }
    #desktopNav img{
    max-width: 20vw;
    }
    .navWrapper{
      display: flex;
      flex-direction: row;
    padding: 0;
    
    justify-content: center;
    align-items: center;
      background-color: #000 !important;
      width:20vw;
      height: 9vh;
    
    }
    .navWrapper li{
    width: 100%;
    height: 9vh;
    display: flex;
    justify-content: center;
    align-items: center;
    }
    
    
    a.router-link-exact-active {
      color: #004036;
    }
    .nav-link{
    color:#ffff;
    height:5vh;
    
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
      background-color:rgb(0,0,0,0.7);
      display:flex;
      color:#fff;
      font-family: 'Poppins', sans-serif;
      text-align:center;
      font-size:3vh;

    }
 



    .advertenciaDeMensaje{
      font-weight:bold;
      font-size:5vh
    }
    .mensaje{
    background-color:#004036;
    height:60vh;
    width:80vw;
    overflow:scroll;
    }
    @keyframes spin {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
    @media (max-width:1200px) {
      #mobileNav{
      display: flex;
      background-color: #fff;
    }
    #desktopNav{
      display: none;
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
      background-color:rgb(0,0,0,0.7);
      display:flex;
      color:#fff;
      font-family: 'Poppins', sans-serif;
      transition:0.5s;
      text-align:center;
      padding:3vh;
      overflow:scroll;
    }
    .mensaje{
    background-color:#004036;
    height:50vh;
    width:80vw;
    overflow:scroll;
    }
    }
    
    </style>
    