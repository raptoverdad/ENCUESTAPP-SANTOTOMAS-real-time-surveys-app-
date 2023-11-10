<template>

<div class="locationDiv"><h1>Registrarse</h1></div>

 <form class="form" v-on:submit.prevent="registerPost()">
  <div v-if="registerSuccess ==true" class="alert alert-success" role="alert">
     <router-link to="/ingresar">¡Éxito! Haz click aquí para iniciar sesion.</router-link>
</div>


  <h1>registrarse</h1>

<label for="email">nombre de usuario:</label>
<p>(minimo 5 caracteres)</p>
<input id="email" v-model="registerUsername" type="text">

<label for="password">contraseña</label>
<p>(minimo 6 caracteres)</p>
<input id="password" v-model="registerPassword" type="password">
<label for="password2">repita la contraseña</label>
<input id="password2" v-model="registerPassword2" type="password">
<label for="password2">¿cual es tu carrera?</label>
<select id="options" v-model="registerCarrera">
      <option value="">Selecciona una opción</option>
      <option v-for="carrera in $store.state.carreras" :value="carrera" :key="carrera">{{ carrera }}</option>
    </select>
<input type="submit" style="font-family: 'Kanit', sans-serif;" class='submit' value="registrarse">


</form>



    </template>
    
    <script>
    // @ is an alias to /src
import { carreras } from '../store'
import axios from 'axios'

    export default {
      name: 'HomeView',
      components: {
      
      },data(){
        return{
          message: "el socket no ha funcionado",
          times:[],
          carreraSeleccionada: '', // Aquí almacenamos la opción seleccionada
          registerPassword:'',
          registerPassword2:'',
          registerCarrera:'',
          registerUsername:'',
          registerSuccess:false
        }
      },
      methods:
      {
        registerPost(){

      if(this.registerUsername.length > 4 && this.registerPassword.length > 5 && this.registerPassword == this.registerPassword2){
           let registerUserData={registerUsername:this.registerUsername,registerPassword:this.registerPassword,registerCarrera:this.registerCarrera}
           axios.post('http://localhost:3005/register',registerUserData)
           .then(res=>{
            console.log("respuesta del registro:",res)
           this.registerSuccess=true
           setTimeout(()=>
           {
            this.registerSuccess=false
           },10000)
           }).catch(err=>{
            console.log("error de registro:",err)
              alert("Lo sentimos, petición incorrecta :(")
           })
         }else{
          alert("credenciales de registro invalidas :(")
         }
        
}
      },
      mounted() {
    
    }
    ,computed(){
 
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
.submit{
  margin-top: 3vh;
}
.row{

}
h1{
    
}

  @media (max-width: 980px) {
  form{
   left:0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-left: 0;
   text-align: center;
   height: 82vh;
   width: 100%;
   background-color: #fff;
   color: #004036;
 }
 .locationDiv{
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