<template>
    
    <div class="locationDiv"><h1>Encuestas por ramo</h1></div>
    <div class="menu">
        <h1>selecciona tu carrera y escoge la encuesta del ramo que quieras:</h1>
        <div class="ramos" v-if="navDisplayed == false">  <li v-on:click="navDisplayed=true">VER CARRERAS</li></div>
        <div class="ramos" v-if="navDisplayed == true" v-on:click="navDisplayed = false">
            <li v-on:click="$store.state.carreraDesktopNav='analista programador'">Analista programador</li>
            <li v-on:click="$store.state.carreraDesktopNav='contabilidad general'">Contabilidad general</li>
            <li v-on:click="$store.state.carreraDesktopNav='gastronomia'">Gastronomia</li>
            <li v-on:click="$store.state.carreraDesktopNav='ingenieria agricola CONTINUIDAD'">Ingenieria agricola - Continuidad</li>
            <li v-on:click="$store.state.carreraDesktopNav='ejecucion en administracion'">Ingenieria de ejecucion en administracion</li>
            <li v-on:click="$store.state.carreraDesktopNav='ejecucion en administracion CONTINUIDAD'">Ingenieria de ejecucion en administracion - Continuidad</li>
            <li v-on:click="$store.state.carreraDesktopNav='administracion de recursos humanos'">administracion de recursos humanos</li>
            <li v-on:click="$store.state.carreraDesktopNav='Comercio exterior'">Comercio exterior</li>
            <li v-on:click="$store.state.carreraDesktopNav='ingenieria en informatica'">ingenieria en informatica </li>
            <li v-on:click="$store.state.carreraDesktopNav='ingenieria en logistica'">Ingenieria en logistica</li>
            <li v-on:click="$store.state.carreraDesktopNav='psicopedagogia'">Psicopedagogia</li>
            <li v-on:click="$store.state.carreraDesktopNav='servicios aerocomerciales y transportes turisticos'">Servicios aerocomerciales y transportes turisticos</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en administracion'">Tecnico en administracion</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico agricola'">Tecnico agricola</li>
            <li v-on:click="$store.state.carreraDesktopNav='servicio social'">Servicio social</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en administracion logistica'">Tecnico en administracion logistica</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en educacion especial' ">Tecnico en educacion especial</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en educacion parvularia'"> Tecnico en educacion parvularia</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en enfermeria'">Tecnico en enfermeria</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en enfermeria gineco – Obstétrica y Neonatal'">Tecnico en enfermeria gineco – Obstétrica y Neonatal</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en hoteleria y turismo'">Tecnico en hoteleria y turismo</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en laboratorio clinico'">Tecnico en laboratorio clinico</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en odontologia mencion higienista dental'">Tecnico en odontologia mencion higienista dental</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico laboratorista dental'">Tecnico laboratorista dental</li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en trabajo social'">Tecnico en trabajo social    </li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico en veterinaria'">Tecnico en veterinaria </li>
            <li v-on:click="$store.state.carreraDesktopNav='tecnico juridico'">Tecnico juridico</li>
        </div>
        <h1 v-if="$store.state.carreraDesktopNav !== '' && navDisplayed==false"  >¡Estos son los ramos de tu carrera!:</h1>
   
     <h1 class="carreer" v-if="$store.state.carreraDesktopNav !== '' && navDisplayed==false"  >{{$store.state.carreraDesktopNav }}</h1>  
         <!-- Carrera: Analista Programador -->
         <ul v-if="navDisplayed == false && $store.state.carreraDesktopNav === 'analista programador'">
          
           <li v-for="(ramo, index) in ramosObject.ramosAnalistaProgramador" :key="index">
             <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosAnalistaProgramadorLinks[index]">{{ ramo }}</router-link>
           </li>
           <li>    <router-link to="/encuestas/encuestasPorRamo/TallerDeHabilidadesTic">Taller de habilidades tic</router-link></li>
           <li>    <router-link to="/encuestas/encuestasPorRamo/SistemasOperativosLinux">Sistemas operativos linux</router-link></li>
           <li>    <router-link to="/encuestas/encuestasPorRamo/ProgramacionOrientadaAObjetos">Programación orientada a objetos</router-link></li>
           <li>    <router-link to="/encuestas/encuestasPorRamo/NegociacionYAdaptacionALosCambios">Negociacion y adaptacion a los cambios</router-link></li>
           <li>    <router-link to="/encuestas/encuestasPorRamo/ProbabilidadYEstadistica">Probabilidad y estadistica</router-link></li>
          </ul>
       <!-- Carrera: servicios aerocomerciales y transportes turisticos -->
       <ul v-if="navDisplayed == false && $store.state.carreraDesktopNav === 'servicios aerocomerciales y transportes turisticos'">
           <li v-for="(ramo, index) in ramosObject.ramosServiciosAerocomerciales" :key="index">
             <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosServiciosAerocomercialesLinks[index]">{{ ramo }}</router-link>
           </li>
           <li>    <router-link to="/encuestas/encuestasPorRamo/TecnicasDeServicioYProtocoloEnElTurismo">Tecnicas de servicio y protocolo en el turismo</router-link></li>
          </ul>

    <!-- Carrera: Gastronomia -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'gastronomia'">
      <li v-for="(ramo, index) in ramosObject.ramosGastronomia" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosGastronomiaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Servicio Social -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'servicio social'">
      <li v-for="(ramo, index) in ramosObject.ramosServicioSocial" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosServicioSocialLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Laboratorista Dental -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico laboratorista dental'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoLaboratoristaDental" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoLaboratoristaDentalLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Juridico -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico juridico'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoJuridico" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoJuridicoLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>
    <!-- Carrera: Ramos Tecnico Veterinaria -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en veterinaria'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoVeterinaria" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoVeterinariaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Trabajo Social -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en trabajo social'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoTrabajoSocial" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoTrabajoSocialLinks[index]">{{ ramo }}</router-link>
      </li>
      
      <li>    <router-link to="/encuestas/encuestasPorRamo/TallerDeVinculacionLaboralIRSYMedioAmbiente">Taller de vinculacion laboral IRS y medio ambiente</router-link></li>
    </ul>

    <!-- Carrera: Ramos Tecnico Odontologia Higienista -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en odontologia mencion higienista dental'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoOdontologiaHigienista" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoOdontologiaHigienistaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Ing Logistica -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'ingenieria en logistica'">
      <li v-for="(ramo, index) in ramosObject.ramosIngLogistica" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosIngLogisticaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

  
    <!-- Carrera: Ramos Ejecucion Administracion -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'ejecucion en administracion'">
      <li v-for="(ramo, index) in ramosObject.ramosEjecucionAdministracion" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosEjecucionAdministracionLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/probabilidadyestadistica">Probabilidad y estadistica</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/Economia">Economia</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/TallerDeIdentidadPersonalYSocial">Taller de identidad personal y social</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/HerramientasTecnologicasIntermedia">Herramientas tecnologicas intermedia</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/HerramientasTecnologicasOfimata">Herramientas tecnologicas ofimata</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/SoftwareERP">Software ERP</router-link></li>
    </ul>

    <!-- Carrera: Ramos Ejecucion Admin Continuidad -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'ejecucion en administracion CONTINUIDAD'">
      <li v-for="(ramo, index) in ramosObject.ramosEjecucionAdminContinuidad" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosEjecucionAdminContinuidadLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/TallerDeDesarrolloPersonal2">Taller de desarrollo personal 2</router-link></li>
    </ul>

    <!-- Carrera: Ramos Ing Agricola Continuidad -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'ingenieria agricola CONTINUIDAD'">
      <li v-for="(ramo, index) in ramosObject.ramosIngAgricolaContinuidad" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosIngAgricolaContinuidadLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/CostosYPresupuestos">Costos y presupuestos</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/probabilidadyestadistica">Probabilidad y estadistica</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/TallerDeDesarrolloPersonal2">Taller de desarrollo personal 2</router-link></li>
    </ul>

    <!-- Carrera: Ramos Tecnico Admin Logistica -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en administracion logistica'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoAdminLogistica" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoAdminLogisticaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Comercio Exterior -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en comercio exterior'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoComercioExterior" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoComercioExteriorLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Educacion Especial -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en educacion especial'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoEducacionEspecial" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoEducacionEspecialLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Educacion Parvularia -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en educacion parvularia'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoEducacionParvularia" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoEducacionParvulariaLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/InteraccionYComprensionDelEntorno3erNivel">Interaccion y comprension del entorno 3er nivel</router-link></li>
    </ul>

    <!-- Carrera: Ramos Ing Admin Recursos Humanos -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'administracion de recursos humanos'">
      <li v-for="(ramo, index) in ramosObject.ramosIngAdminRecursosHumanos" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosIngAdminRecursosHumanosLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/HerramientasTecnologicasIntermedia">Herramientas tecnologicas intermedia</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/HerramientasTecnologicasOfimata">Herramientas tecnologicas ofimata</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/DerechoSindicalYNegociacionColectiva">Derecho sindical y negociacion colectiva</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/EticaProfesional">Etica profesional</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/OrganizacionesPublicas">Organizaciones publicas</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/ValoracionDeCargosYDesempeno">Valoracion de cargos y desempeño</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/ProbabilidadYEstadistica">Probabilidad y estadistica</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/PlanificacionEstrategicaDeRRHH">Planificacion estretegica de RRHH</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/ProgramaDeBienestarYSustentabilidad">Programa de bienestar y sustentabilidad</router-link></li>
    </ul>

    <!-- Carrera: Ramos Tecnico Enfermeria -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en enfermeria'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoEnfermeria" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoEnfermeriaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>
<!-- Carrera: Ramos Tecnico Enfermeria Gineco -->
<ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en enfermeria gineco – Obstétrica y Neonatal'">
  <!-- LA LINEA DE ABAJO ES LA LINEA 180! -->
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoEnfermeriaGineco" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoEnfermeriaGinecoLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Hoteleria Turismo -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en hoteleria y turismo'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoHoteleriaTurismo" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoHoteleriaTurismoLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Contabilidad General -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'contabilidad general'">
      <li v-for="(ramo, index) in ramosObject.ramosContabilidadGeneral" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosContabilidadGeneralLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>

    <!-- Carrera: Ramos Tecnico Laboratorio Clinico -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en laboratorio clinico'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoLaboratorioClinico" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoLaboratorioClinicoLinks[index]">{{ ramo }}</router-link>
      </li>
      <li><router-link to="/encuestas/encuestasPorRamo/AdministracionYRegistroInformaticoEnElLaboratorio">Adminsitracion y registro informatico en el laboratorio</router-link></li>
      <li><router-link to="/encuestas/encuestasPorRamo/MicrobiologiaAplicadaAlLaboratorio">Microbiologia aplicada al laboratorio</router-link></li>
      <li><router-link to="/encuestas/encuestasPorRamo/ProcesosHetamologicosYBioseguridadEnLaboratorioClinico">Procesos hetamologicos y bioseguridad en laboratorio clinico</router-link></li>
    </ul>

    <!-- Carrera: Ramos Ing Informatica -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'ingenieria en informatica'">
      <li v-for="(ramo, index) in ramosObject.ramosIngInformatica" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosIngInformaticaLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/probabilidadyestadistica">Probabilidad y estadistica</router-link></li>
    </ul>

    <!-- Carrera: Ramos Tecnico Administracion -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico en administracion'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoAdministracion" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoAdministracionLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/ProbabilidadYEstadistica">Probabilidad y estadistica</router-link></li>
    </ul>

    <!-- Carrera: Ramos Tecnico Agricola -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'tecnico agricola'">
      <li v-for="(ramo, index) in ramosObject.ramosTecnicoAgricola" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosTecnicoAgricolaLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/LaboresFruticolasDeInvierno">Labores fruticolas de invierno</router-link></li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/LaboresFruticolasDeVerano">Labores fruticolas de verano</router-link></li>
    </ul>

    <!-- Carrera: Ramos Ing Comercio Exterior -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'Comercio exterior'">
      <li v-for="(ramo, index) in ramosObject.ramosIngComercioExterior" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosIngComercioExteriorLinks[index]">{{ ramo }}</router-link>
      </li>
      <li>    <router-link to="/encuestas/encuestasPorRamo/TCLYCertificadosDeOrigen">TCL y certificados de origen</router-link></li>
    </ul>

    <!-- Carrera: Ramos Psicopedagogia -->
    <ul v-if="navDisplayed==false && $store.state.carreraDesktopNav === 'psicopedagogia'">
      <li v-for="(ramo, index) in ramosObject.ramosPsicopedagogia" :key="index">
        <router-link :to="'/encuestas/encuestasPorRamo/' + $store.state.mappedCarrerasData.ramosPsicopedagogiaLinks[index]">{{ ramo }}</router-link>
      </li>
    </ul>





    </div>

</template>
<script>
import { ramosObject } from '../router/index.js'; // Asegúrate de usar { } para importar objetos específicos
import { store } from 'vuex';

  

export default {

  name: 'encuestasporramo',
  components: {},
 data() {
    return {
      message: "el socket no ha funcionado",
      times: [],
      navDisplayed: false,
      ramosObject:ramosObject,
      ramosAnalistaProgramador:[],
      carrerasListas:false,
      mappedCarrerasData:""
    };
  },
  mounted() {
    
    this.navDisplayed = false;
    this.mappedLinks() 

  },
  beforeDestroy() {

    this.navDisplayed = false;
  },
  methods: {
    toPascalCase(str) {
      return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (match, index) {
        return match.toUpperCase();
      }).replace(/\s+/g, '');
    },
    mappedLinks() {
      console.log("se ejecuta la funcion mappedLinks")
      const mappedCarreras = {};
    if(this.ramosObject !== undefined){
      for (const carrera in this.ramosObject) {
        mappedCarreras[carrera + "Links"] = this.ramosObject[carrera].map((element) => {
        
            const routeName = this.toPascalCase(element);
            return routeName
        });
      }
    }else{
      alert("ramosObject undefined!")
    }

      this.carrerasListas=true
      this.$store.state.mappedCarrerasData= mappedCarreras;
    }
  }
};

</script>
<style scoped>
ul{
  background-color:#004036 ;
  width: 40vw;
  animation: fadeIn 2s ease-in-out forwards;
}
ul h1{
  color:#fff;
  text-align:center;
}
.carreer
{
  animation: fadeIn 2s ease-in-out forwards;
color:#004036;

}
   .locationDiv{
    width: 80vw;
    max-width: 80vw;
    height: 9vh;
    margin-left: 20vw;
    background-color:#004036 ;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .encuestasWrapper{
    width: 40vw;
    height: 30vh;
    overflow: scroll;
    background-color: #000;
   }
   .ramos{
    height: min-content;
     width: 40vw;
     display: flex;
     flex-direction: column;
     justify-content:center;
     overflow: hidden;
     padding-top:4vh;
     padding-bottom:4vh;
     transition:1s;
   }
   .menu::-webkit-scrollbar-thumb {
      background-color: #333;
      border-radius: 5px;
    }

    /* Estilo del fondo de la barra de desplazamiento */
    .menu::-webkit-scrollbar-track {
      background-color: #f1f1f1;
      border-radius: 5px;
    }

    /* Estilo del pulgar de la barra de desplazamiento al pasar el cursor sobre él */
    .menu::-webkit-scrollbar-thumb:hover {
      background-color: #555;
    }
    a{
      color:#fff;
    }
   .ramos li{
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #000;
   color:#fff;
   height: 7vh;
 text-align:center;
   }
   .ramos li:hover{
   width: 40vw;
   display: flex;
   justify-content: center;
   align-items: center;
   background-color: #004036;
   color:#fff;
   height: 7vh;
   }
   .menu{
    min-height: 80vh;
    max-height: min-content;
    margin-left: 20vw;
    width: 80vw;
    display:flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    overflow-y: scroll;
    animation: borderAnimation 3s linear infinite;
    padding-top:4vh;
    padding-bottom:5vh;
   }
.menu h1{
    font-size: 5vh;
    width: 70vw;
}
 ul li{
  width:100%,
  
 }

 @keyframes fadeIn {
   0% {
      opacity: 0;
      transform: scale(0.8);
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
}
    @media (max-width:980px) {
        .ramos{
 
     width:85vw;
     padding: 2vh;
   }
    ul{
      width:85vw;
    }

   .ramos li{
    width: 100%;
     height: 10vh;
   }
   .ramos li:hover{
    width: 100%;
     height: 10vh;
     display: flex;
     justify-content: center;
     align-items: center;
     background-color: #004036;
     color:#fff;

   }
   .menu{
    height: min-content;
    width: 100vw; 
    margin-left: 0;
    flex-direction: column;
   }
   .locationDiv{
    width: 100vw;
    max-width: 100vw;
    height: 9vh;
    margin-left: 0;
    background-color:#004036 ;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
   }

   .encuesta{
      width: 100vw;
      max-width: 100vw;
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin: 0;
      margin-left: 0;
      height: 25vh;
      background-color:#cc2d2d;
      border:2px solid white;

   }
   }
</style>