<template>
  <modalCargando v-if='cargando == true'>
</modalCargando>
  <div class="surveyBody">
    <h1>{{ materia }}</h1>
    <h3 v-if="encuestaCompleta>4 ">(¡Completaste la encuesta!)</h3> 
    <p>se abrió el 1 de agosto del 2023</p>
    <p>se cierra el 31 de agosto del 2023</p>

    <div v-for="(pregunta) in preguntasyvotos" class="preguntaYopciones">
      <h1 class="pregunta">{{ pregunta.pregunta }}</h1>
      <div class="votado">
         <h1 v-if="pregunta.voto=='votonegativo'">---votaste "NO"---</h1>
         <h1 v-if="pregunta.voto=='votopositivo'">---votaste "SI"---</h1>
         <h1 v-if="pregunta.voto==null">---no has votado todavia---</h1>
      </div>
      <div class="options">
        <div class="vote">
          <span v-if="bloqueoVotos==false" v-on:click="sendNewVote(pregunta.pregunta,'votopositivo')" id="opcionpositiva" class="option">Si</span>
          <span v-if="bloqueoVotos==true"  id="opcionpositiva" class="option">Si</span>
          {{ pregunta.votospositivos +" "+"votos"}}
        </div>

        <div class="vote">
          <span v-if="bloqueoVotos==false" v-on:click="sendNewVote(pregunta.pregunta,'votonegativo')" id="opcionnegativa" class="option">No</span>
          <span v-if="bloqueoVotos==true"  id="opcionnegativa" class="option">No</span>
          {{ pregunta.votosnegativos +" "+"votos"}}
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
  
  import axios from 'axios'
  import store from '../store/index'
  import {io} from 'socket.io-client'
import modalCargando from '@/components/modalCargando.vue'


  localStorage.removeItem("usuario", "amaro");
  localStorage.setItem("usuario", "amaro");
  
  export default {
    name: 'encuesta',
    props: {
      materia: String
    },components:{modalCargando},
    data(){
      return{
        materia:this.materia,
        conectado:false,
        //esta parte se saca de la tabla preguntas y puntaje
        preguntasyvotos:[{pregunta:"¿En general, los profesores valoran y toman en cuenta las opiniones y necesidades de los alumnos?",votosnegativos:0,votospositivos:0,voto:null},
        {pregunta:"¿En general, los profesores fomentan la creatividad y el pensamiento crítico en las actividades académicas?",votosnegativos:0,votospositivos:0,voto:null},
        {pregunta:"¿En general, los profesores se preocupan por el bienestar emocional y mental de los alumnos?",votosnegativos:0,votospositivos:0,voto:null},
        {pregunta:"En general, ¿consideras que los profesores están suficientemente capacitados para lidiar con las necesidades educativas especiales de los alumnos?",votosnegativos:0,votospositivos:0,voto:null},
        {pregunta:"En general, ¿crees que los profesores están lo suficientemente actualizados en los avances y desarrollos de su área de conocimiento?",votosnegativos:0,votospositivos:0,voto:null}],
        //estos votos se sacan de la tabla preguntasresponddasdelosusuarios
        misVotos:[],
        preguntas:
        [],
        socketId:null,
        bloqueoVotos:false,
        cargando:true,
        encuestaCompleta:0
      }
    },
    created() {
   
  },
  async mounted() {
    try {
  let materia=await this.materia
 console.log("la encuesta para el servidor:",materia)
 this.socket = io('http://localhost:3006/', {
  withCredentials: false,
  query: {
    "key": "skrillex",
    "materia":materia
  }
});

} catch (error) {
  console.error("Error al establecer la conexión del socket:", error);

}
try {
  this.socket.on("surveyvotes", async (votos) => {
    this.encuestaCompleta=0
    //ponerle diseño a los votos del usuario
  let usuario=await this.$store.state.usuario
  console.log("el usuario conectado:",usuario)
  this.preguntasyvotos[0].votosnegativos=0
  this.preguntasyvotos[0].votospositivos=0
  this.preguntasyvotos[0].voto=null

  this.preguntasyvotos[1].votosnegativos=0
  this.preguntasyvotos[1].votospositivos=0
  this.preguntasyvotos[1].voto=null

  this.preguntasyvotos[2].votosnegativos=0
  this.preguntasyvotos[2].votospositivos=0
  this.preguntasyvotos[2].voto=null

  this.preguntasyvotos[3].votosnegativos=0
  this.preguntasyvotos[3].votospositivos=0
  this.preguntasyvotos[3].voto=null

  this.preguntasyvotos[4].votosnegativos=0
  this.preguntasyvotos[4].votospositivos=0
  this.preguntasyvotos[4].voto=null
  
  console.log(votos);
  let encuesta = votos.encuesta;
  let votosjson = votos.preguntasyrespuestas;
  if (encuesta === this.materia && votosjson.length > 0) {
    for (let i = 0; i < votosjson.length; i++) {
  const element = votosjson[i];
  if (element.usuario == usuario) {

    this.misVotos.push(element);
   
  }
}
    for (let index = 0; index < votosjson.length; index++) {
      
      if (votosjson[index].pregunta == this.preguntasyvotos[0].pregunta) 
      {
        if (votosjson[index].voto == "votonegativo") 
          {
            this.preguntasyvotos[0].votosnegativos++
          }
        else if(votosjson[index].voto == "votopositivo"){
          this.preguntasyvotos[0].votospositivos++
        }
      
      }else if(votosjson[index].pregunta == this.preguntasyvotos[1].pregunta){
        if (votosjson[index].voto == "votonegativo") 
          {
            this.preguntasyvotos[1].votosnegativos++
          }
        else if(votosjson[index].voto == "votopositivo"){
          this.preguntasyvotos[1].votospositivos++
        }
    
      }else if(votosjson[index].pregunta == this.preguntasyvotos[2].pregunta){
        if (votosjson[index].voto == "votonegativo") 
          {
            this.preguntasyvotos[2].votosnegativos++
          }
        else if(votosjson[index].voto == "votopositivo"){
          this.preguntasyvotos[2].votospositivos++
        }
     
      }else if(votosjson[index].pregunta == this.preguntasyvotos[3].pregunta){
        if (votosjson[index].voto == "votonegativo") 
          {
            this.preguntasyvotos[3].votosnegativos++
          }
        else if(votosjson[index].voto == "votopositivo"){
          this.preguntasyvotos[3].votospositivos++
        }
      
      }else if(votosjson[index].pregunta == this.preguntasyvotos[4].pregunta){
        if (votosjson[index].voto == "votonegativo") 
          {
            this.preguntasyvotos[4].votosnegativos++
          }
        else if(votosjson[index].voto == "votopositivo"){
          this.preguntasyvotos[4].votospositivos++
        }
       
      }


    }
 
  }


  for (let index = 0; index < this.misVotos.length; index++) {
      const element = this.misVotos[index];
    
      if(element.pregunta == this.preguntasyvotos[0].pregunta){  
        this.encuestaCompleta++
         if(element.voto == "votopositivo"){
           this.preguntasyvotos[0].voto="votopositivo"
         }else if(element.voto == "votonegativo"){
          this.preguntasyvotos[0].voto="votonegativo"
         }
      }else if(element.pregunta == this.preguntasyvotos[1].pregunta){
        this.encuestaCompleta++
        if(element.voto == "votopositivo"){
           this.preguntasyvotos[1].voto="votopositivo"
        }else if(element.voto == "votonegativo"){
          this.preguntasyvotos[1].voto="votonegativo"
        }
      }
      else if(element.pregunta == this.preguntasyvotos[2].pregunta){
        this.encuestaCompleta++
        if(element.voto == "votopositivo"){
           this.preguntasyvotos[2].voto="votopositivo"
        }else if(element.voto == "votonegativo"){
          this.preguntasyvotos[2].voto="votonegativo"
        }
      }else if(element.pregunta == this.preguntasyvotos[3].pregunta){
        this.encuestaCompleta++
        if(element.voto == "votopositivo"){
           this.preguntasyvotos[3].voto="votopositivo"
        }else if(element.voto == "votonegativo"){
          this.preguntasyvotos[3].voto="votonegativo"
        }
      }
      else if(element.pregunta == this.preguntasyvotos[4].pregunta){
        this.encuestaCompleta++
        if(element.voto == "votopositivo"){
           this.preguntasyvotos[4].voto="votopositivo"
        }else if(element.voto == "votonegativo"){
          this.preguntasyvotos[4].voto="votonegativo"
        }
      }

    }
      this.cargando=false
});
} catch (error) {
  console.log("error del socket:",error )
  this.cargando=false
}
  this.socket.on("notValidToken", async (votos) => {
   alert("Debes iniciar sesion para poder votar")
  });
  
},
    destroyed(){
  
    },
    methods:{
   async  sendNewVote(pregunta,voto){
    this.bloqueoVotos=true
     await this.socket.emit("newvote",{"token":localStorage.getItem("token"),"encuesta":this.materia,"pregunta":pregunta,"voto":voto}) 
  
     setTimeout(()=>{
      this.bloqueoVotos=false
     },1000)
     }
    }
  
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

 .surveyBody h1{
padding: 3vh;
}
.options {
display: flex;
justify-content: space-around;
}
.option{
  cursor: pointer;
}
.preguntaYopciones{
margin-top: 10vh;
}
label img{
  width: 6vh;
  height: 6vh;
}





  .surveyBody{
    display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-left: 20vw;
text-align: center;
height: min-content;
background: linear-gradient(45deg, #004036, #ffffff, #004036); /* Colores de fondo */
background-size: 200% 200%;
animation: gradientAnimation 6s ease infinite;
 }

.vote{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
}
@media (max-width: 980px) {
  .surveyBody{
    display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
margin-left: 0;
text-align: center;
height: min-content;
background: linear-gradient(45deg, #004036, #ffffff, #004036); /* Colores de fondo */
background-size: 200% 200%;
animation: gradientAnimation 6s ease infinite;
 }
}


.title {
  font-size: 2rem;
  color: #333;
  margin-bottom: 20px;
}

.pregunta {
  font-size: 1.5rem;
  color: #555;
  margin-bottom: 10px;
}

.options {
  display: flex;
  justify-content: space-around;
}

.vote {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.option {
  cursor: pointer;
  font-size: 2rem;
  margin: 5px;
  transition: transform 0.2s ease-in-out;
}

.option:hover {
  transform: scale(1.2);
}

.thumbsUp {
  color: #00aa00;
}

.thumbsDown {
  color: #aa0000;
}

.voteCount {
  font-size: 0.8rem;
  color: #777;
  margin-top: 5px;
}

@keyframes gradientAnimation {
   0% {
     background-position: 0% 50%;
   }
   50% {
     background-position: 100% 50%;
   }
   100% {
     background-position: 0% 50%;
   }
  }
</style>
