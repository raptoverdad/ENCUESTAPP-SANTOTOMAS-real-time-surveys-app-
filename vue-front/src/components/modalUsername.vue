<template>
  <div v-if="$store.state.clicked == false" class="modalMensajeDelCreador">
    <h1>Ingresa tu nuevo nombre de usuario:</h1>
    <p>(minimo 5 caracteres)</p>
     <input type="text"  v-model="newUsername">
    <div class="buttons">
      <input type="button" v-on:click="changeUsarname(newUsername)" value="Cambiar nombre">
      <input type="button" v-on:click="salir()" value="Salir">
    </div>  
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
  methods: {
    changeUsarname(nombre){
            //crear microservicio
            axios.post('https://escuestapp-http-server-production.up.railway.app/cambiarNombre',{nombre:nombre,token:localStorage.getItem("token")})
           .then(res=>{
            console.log(res)
            this.$store.dispatch("setData", {token:res.data.token,usuario:res.data.usuario,carrera:this.$store.state.carrera });
            alert("¡cambiaste tu nombre de usuario exitosamente!")     
            }).catch(err=>{
            alert("Hubo un error. porfavor, intentalo mas tarde!")
            })
           },salir(){
            this.$store.state.usernameModalClicked=false
           },
       
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
    
.buttons{
  display: flex;
  width: 100%;
  max-width: 100%;
}
.buttons input{
  width: 50%;
  max-width: 50%;
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
 

    @keyframes spin {
      0% { transform: rotateY(0deg); }
      100% { transform: rotateY(360deg); }
    }
    @media (max-width:1000px) {
      .buttons{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
}
    }


    </style>
    