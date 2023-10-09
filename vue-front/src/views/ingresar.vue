<template>

<div class="locationDiv" v-if="!$store.state.logged"><h1>Ingresar</h1></div>
  <form class="form" v-if="!$store.state.logged" v-on:submit.prevent="loginPost">



    <h1 >Iniciar sesion</h1>

 <label for="email">nombre de usuario</label>
 <input id="email" v-model="loginUsername" type="text">
 <label for="password">contraseña</label>
 <input id="password" v-model="loginPassword" type="password">

 <input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="ingresar">
 
 
 </form>
 

 <div class="notUser" v-if="$store.state.logged">
      <h1>Iniciaste sesión correctamente,{{ $store.state.usuario }}.</h1>
    </div>
     </template>
     
     <script>
     import axios from 'axios'
     import { mapGetters, mapActions } from 'vuex';
     // @ is an alias to /src
     export default {
       name: 'HomeView',
       components: {
     
       },data(){
         return{
           message: "el socket no ha funcionado",
           times:[],
           loginUsername:"",
           loginPassword:""
         }
       },
       mounted() {
     
     },methods:{
      loginPost() {
  let loginUserData = {
    loginUsername: this.loginUsername,
    loginPassword: this.loginPassword
  };

  console.log("datos enviados:", this.loginUsername, "password:", this.loginPassword);

  fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json' // Especifica el tipo de contenido como JSON
    },
    body: JSON.stringify(loginUserData) // Convierte el objeto a JSON
  })
  .then(response => response.json()) // Parsea la respuesta como JSON
  .then(data => {
    console.log(data);
    this.$store.dispatch("setData", { token: data.token, usuario: data.usuario , carrera: data.carrera});
    
  })
  .catch(error => {
    console.log("ERROR:", error);
    localStorage.clear()
    alert("Lo sentimos, petición incorrecta :(");
  });
}
     }
     }
     </script>
 <style scoped> 
.locationDiv{
  width: 80vw;
  height: 9vh;
  margin-left: 20vw;
  background-color:#fff ;
  color: #004036;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 form{
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background-color:#004036 ;
 color: #fff;
 height: 91vh;
 max-height: 100vh;
width: 80vw;
 text-align: center;
 justify-content: center;
 margin-left: 20vw;
 overflow: hidden;
 }
 .row{
   display: flex;
 }
 form input{
 width: 20vw;
 }

.encuesta{
margin-top: 10vh;
}
label img{
  width: 6vh;
  height: 6vh;
}
.notUser{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 80vw;
      margin-left: 20vw;
    }

 @media (max-width:980px) {
  form{
   left:0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-left: 0;
   text-align: center;
   height: 80vh;
   width: 100%;
   background-color: #fff;
   color: #004036;
 }

 .notUser{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 80vh;
      width: 100vw;
      margin-left: 0vw;
    } .locationDiv{
    width: 100%;

  height: 9vh;
  margin-left: 0;
  background-color:#004036 ;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
 }
 }
 </style>
