<template>
    <div class="locationDiv">
      <h1>Estadisticas</h1>
    </div>
    <modalCargando v-if='cargando == true'>
</modalCargando>
    <div class="surveyBody"  v-if="error !==true">
        <h1>Estadisticas generales:</h1>
      <p>
        INFO: ¿consideras pertinente hacer un reclamo o simplemente necesitas que te escuchen? en encuestapp estamos para
        ti. envianos un correo a encuestapp-santotomas@outlook.com y haremos todo lo posible para escuchar tu caso y
        ayudarte.
      </p>
         <section>
       
        <div><h3>Total de votos (todas las encuestas): {{ totalDeVotos + " " }}</h3></div>
        <div>
          <h3>Moral de los alumnos:</h3>
          <h3 v-if="moralAlta">ALTA 	&#128512 (la mayoria de votos son POSITIVOS)</h3>
          <h3 v-if="moralBaja">BAJA &#128532 (la mayoria de votos son NEGATIVOS)</h3>
        </div>
        <div v-if="!encuestaMasVotadaEsRamo">
          <h3>Encuesta más votada: {{ encuestaMasVotada + " " }}</h3>
        </div>
        <div v-else>
          <h3>Encuesta más votada: {{ encuestaMasVotada + " " + seEncuentraEn() }}</h3>
        </div>
        <div v-if="!encuestaMasVotosPositivosEsRamo">
          <h3>Encuesta con más votos positivos: {{ encuestaMasVotosPositivos + " " }}</h3>
        </div>
        <div v-if="!encuestaMasVotosNegativosEsRamo">
          <h3>Encuesta con más votos negativos: {{ encuestaMasVotosNegativos + " " }}</h3>
        </div>
        <div v-if="encuestaMasVotosPositivosEsRamo">
          <h3>
            Encuesta con más votos positivos:
            {{ encuestaMasVotosPositivos}}
          </h3>
        </div>
        <div v-if="encuestaMasVotosNegativosEsRamo">
          <h3>
            Encuesta con más votos negativos:
            {{ encuestaMasVotosNegativos + " " + "(se encuentra en: " + encuestaMasVotosNegativosEsRamo + ")" }}
          </h3>
        </div>
      </section>
    </div>
    <div class="notUser"  v-if="error==true">
      <h1>Hubo un error cargando las estadisticas. porfavor, intentalo mas tarde.</h1>
    </div>
    <div class="notUser"  v-if="noVotes==true">
      <h1>Hubo un error cargando las estadisticas. porfavor, intentalo mas tarde.</h1>
    </div>
  </template>
  
  <script>
      import modalCargando from '@/components/modalCargando.vue'
  import axios from 'axios';
  import {io} from 'socket.io-client'
  export default {
    name: 'HomeView',
    components:
    {
        modalCargando
    },
    data() {
      return {
        totalDeVotos: 0,
        noVotes:false,
        votosNegativosTotales: 0,
        votosPositivosTotales: 0,
        moralAlta: false,
        moralBaja: false,
        error: false,
        totalVotos: '',
        encuestaMasVotada: '',
        encuestaMasVotadaEsRamo: false,
        encuestaMasVotosPositivosEsRamo: false,
        encuestaMasVotosPositivos: '',
        encuestaMasVotosNegativosEsRamo: false,
        encuestaMasVotosNegativos: '',
        cargando:true
      };
    },
    mounted() {
        try {
this.socket = io('http://localhost:3006/', {
  withCredentials: false,
  query: {
    "key": "skrillex",
    "materia":"estadisticas"
  }
});

} catch (error) {
    this.cargando=false
    this.error=false
}
try {
    this.socket.on("estadisticas", async (response) => {
        this.totalDeVotos=0
        this.error=false
        this.noVotes=false
            const datos = response.data;
  
            const conteoVotosPorEncuesta = {};
            const conteoVotosPositivosPorEncuesta = {};
            const conteoVotosNegativosPorEncuesta = {};
  
            let encuesta;
  
            response.forEach(element => {
              encuesta = element.encuesta;
  
              if (!conteoVotosPorEncuesta[encuesta]) {
                conteoVotosPorEncuesta[encuesta] = 0;
              }
  
              conteoVotosPorEncuesta[encuesta]++;
  
              if (element.voto === 'votopositivo') {
                if (!conteoVotosPositivosPorEncuesta[encuesta]) {
                  conteoVotosPositivosPorEncuesta[encuesta] = 0;
                }
                conteoVotosPositivosPorEncuesta[encuesta]++;
              } else if (element.voto === 'votonegativo') {
                if (!conteoVotosNegativosPorEncuesta[encuesta]) {
                  conteoVotosNegativosPorEncuesta[encuesta] = 0;
                }
                conteoVotosNegativosPorEncuesta[encuesta]++;
              }
  
              this.totalDeVotos++;
              if (element.voto === 'votonegativo') {
                this.votosNegativosTotales++;
              }else{
                this.votosPositivosTotales++;
              }
            });
  
            for (const encuesta in conteoVotosPositivosPorEncuesta) {
              if (
                !this.encuestaMasVotosPositivos ||
                conteoVotosPositivosPorEncuesta[encuesta] > conteoVotosPositivosPorEncuesta[this.encuestaMasVotosPositivos]
              ) {
                this.encuestaMasVotosPositivos = encuesta;
              }
            }
  
            for (const encuesta in conteoVotosNegativosPorEncuesta) {
              if (
                !this.encuestaMasVotosNegativos ||
                conteoVotosNegativosPorEncuesta[encuesta] > conteoVotosNegativosPorEncuesta[this.encuestaMasVotosNegativos]
              ) {
                this.encuestaMasVotosNegativos = encuesta;
              }
            }
  
            if (this.votosNegativosTotales > this.votosPositivosTotales) {
              this.moralAlta = false;
              this.moralBaja = true;
            } else {
              this.moralBaja = false;
              this.moralAlta = true;
            }
            for (const encuesta in conteoVotosPorEncuesta) {
            if (
              !this.encuestaMasVotada ||
              conteoVotosPorEncuesta[encuesta] > conteoVotosPorEncuesta[this.encuestaMasVotada]
            ) {
              this.encuestaMasVotada = encuesta;
            }
        }
        this.cargando=false
    })
    this.socket.on("estadisticasError", async (response) => {
        this.error = true;
        this.cargando=false
    })
    this.socket.on("estadisticasNoVotes", async (response) => {
        this.error=false
        this.noVotes=true
        this.cargando=false
    })
} catch (error) {
    this.cargando=false

}
    },
    destroyed(){
      this.socket.disconnect()
    }, 
    methods: {
      seEncuentraEn() {
        // Lógica para obtener la información de seEncuentraEn
      },
    },
  };
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
     }
     .surveyBody div{
    
       display: flex;
       justify-content: center;
       align-items: center;
       border:2px solid #004036;
       height:min-content
     }
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
    .encuesta{
    margin-top: 10vh;
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
      .surveyBody{
       left:0;
       display: flex;
       flex-direction: column;
       justify-content: flex-start;
       align-items: center;
       margin-left: 0;
       text-align: center;
       height: 100vh;
       
     }
      .notUser{
       margin-left:0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
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
   height: 100vh;
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
