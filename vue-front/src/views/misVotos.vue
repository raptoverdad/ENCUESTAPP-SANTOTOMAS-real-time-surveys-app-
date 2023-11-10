<template>
         <modalCargando v-if='cargando == true'>
</modalCargando>
    <div class="locationDiv"><h1>Mis votos</h1></div>
    <div v-if="$store.state.logged !== false && totalVotos !== 0 && !error && cargando==false" class="surveyBody">    
        <h1>Hola {{ $store.state.usuario }}, aquí están tus votos de este mes:</h1>
        <h1 class="totalVotos">Total de votos:{{" "+totalVotos }}</h1>
        <ul>
            
                <table border="1">
                  <tr>
                    <th>Encuesta</th>
                    <th>Pregunta</th>
                    <th>Voto</th>
                  </tr>
                  <tr v-for="voto in misVotos">
                    <td>{{voto.encuesta}}</td>
                    <td>{{voto.pregunta}}</td>
                    <td>{{voto.voto}}</td>
                    <td v-on:click="anularVoto(voto.pregunta,voto.encuesta)" style="color:#f00">Anular voto</td>
                  </tr>

                </table>
        </ul>
    </div>

    <div class="notUser"  v-if="$store.state.logged == false">
      <h1>Debes iniciar sesión para ver tus votos</h1>
    </div>
    <div class="notUser"  v-if="noVotes==true && error!==true">
      <h1>No tienes ningun voto por ahora.</h1>
    </div>
    <div class="notUser"  v-if="noVotes==false && totalVotos==0">
      <h1>No tienes ningun voto por ahora.</h1>
    </div>
    <div class="notUser"  v-if="error==true">
      <h1>¡Ha habido un error! intentalo mas tarde.</h1>
    </div>
     </template>
     <script>
         // @ is an alias to /src
         import axios from 'axios';
         import {io} from 'socket.io-client'
         import modalCargando from '@/components/modalCargando.vue'
         export default {
           name: 'HomeView',
           components: {
            modalCargando
           },data(){
             return{
               message: "el socket no ha funcionado",
               totalVotos:0,
               misVotos:[],
               error:false,
               noVotes:false,
               cargando:true
             }
           },
           mounted() {
       
            if(localStorage.getItem("token")){
                try {
                this.socket = io('http://localhost:3006/', {
              withCredentials: false,
                  query: {
               "key": "skrillex",
               "materia":"misVotos",
               "token":localStorage.getItem("token")
                 }
                });
            } catch (error) {
                console.log(error)
              this.error=true
            }
 try {
    this.socket.on("respuestaMisVotos", (response) => {
        console.log("response de mis votos:",response)
        this.totalVotos=0
               this.error=false
            if(response.length > 0 && response != "no votes"){
                this.noVotes=false
                console.log(response)
              response.forEach(element => {
              this.totalVotos++
              this.misVotos.push(element)
          });
           console.log(response)
             }else{
                this.noVotes=true
                this.cargando=false
             }
             this.cargando=false
           })
                this.socket.on("misVotosError",  (response) => {
               this.error = true;
               this.cargando=false
           })
           this.socket.on("misVotosNoVotes",  (response) => {
               this.totalVotos=0
               this.error=false
               this.noVotes=true
               this.cargando=false
            })  
            this.socket.on("votoAnulado",  (response) => {
               this.eliminarVoto(response.pregunta,response.encuesta)
            })  
       
 } catch (error) {
    this.cargando=true
 }
            }else{
                this.$store.state.logged = false
                this.cargando=false
            }
       
         },
         destroyed(){
      this.socket.disconnect()
    }, 
         methods:{
            async  anularVoto(pregunta,encuesta){

                if(localStorage.getItem("token")){
                    await this.socket.emit("anularVoto",{token:localStorage.getItem("token"),pregunta:pregunta,encuesta:encuesta}) 
                }else{
                    alert("Sesión no iniciada. redirigiremos al login para ingresar nuevamente.")
                    window.location.href="https://encuestapp-santotomas.com"
                }
       
            },
            eliminarVoto(pregunta,encuesta){

            this.eliminarObjeto(this.misVotos,pregunta,encuesta) 
           } ,
               eliminarObjeto(array,valorpregunta,valorencuesta) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].pregunta === valorpregunta && array[i].encuesta === valorencuesta) {
      array.splice(i, 1);
      i--; // Decrementar el índice para evitar saltar elementos
      this.totalVotos--
    }
  }
}
            }     
     
         }
    
     </script>
     <style scoped>
     img{
      height: 30vh;
      width: 30vh;
     }
     .locationDiv{
  width: 80vw;
  height: 9vh;
  margin-left: 20vw;
  background-color:#004036 ;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
 }
    .surveyBody{
       left:20vw;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       margin-left: 20vw;
       text-align: center;
       height: 100vh;
       width:80vw;
       max-width: 80vw;
       overflow: scroll;
     }
     table{
            width:78vw;
            
        }
        table td{
          border: 2px solid black;
            
        }
     .surveyBody h1{
    padding:3vh 0vh;
    }
    .options {
    display: flex;
    justify-content: space-around;
    }
    .option{
      cursor: pointer;
    }
    .encuesta{
    margin-top: 10vh;
    }
    .notUser{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 91vh;
      width: 80vw;
      margin-left: 20vw;
    }

    @media (max-width:980px) {
        table{
            width: 98vw;
            
        }

      .surveyBody{
       left:0;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       margin-left: 0;
       text-align: center;
       height: 100vh;
       width: 100vw;
       max-width: 100vw;
     }
      .notUser{
       margin-left:0;
      display: flex;
      justify-content: center;
      align-items: center;
      height:vh;
      width: 100vw;
    }
  form{
   left:0;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   margin-left: 0;
   text-align: center;
   height:80vh;
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