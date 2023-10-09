<template>
  <div>
    <div class="locationDiv">
      <h1>Encuestas</h1>
    </div>
    <div class="encuestasWrapper">
      <div class="encuesta">
        <h1>1-Encuestas por ramo</h1>
        <p>Responde preguntas sobre cada uno de tus ramos.</p>
        <router-link to="/encuestas/encuestasPorRamo" class="enlace" active-class="activo" exact-active-class="exacto">
          Ir a la encuesta
        </router-link>
      </div>
      <div class="encuesta">
        <h1>2-Encuesta bienestar social</h1>
        <p>
          ¿Te sientes bien con tus compañeros y docentes? ¿Sientes que hay algo por mejorar? ¡Responde la encuesta!
        </p>
        <router-link to="/encuestas/encuestaBienestarSocial" class="enlace" active-class="activo" exact-active-class="exacto">
          Ir a la encuesta
        </router-link>
      </div>
      <div class="encuesta">
        <h1>3-Encuesta profesores</h1>
        <p>Existen evaluaciones internas en Santo Tomás, pero... ¿qué tal si como alumnos aportamos también?</p>
        <router-link to="/encuestas/encuestaProfesores" class="enlace" active-class="activo" exact-active-class="exacto">
          Ir a la encuesta
        </router-link>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'encuestas',
  components: {},
  data() {
    return {
      message: "el socket no ha funcionado",
      times: [],
      token: localStorage.getItem("token") || false,
      email: localStorage.getItem("email") || "",
    };
  },
  mounted() {},
};
</script>

<style scoped>
.encuestasWrapper {
  display: grid;
  grid-template-rows: repeat(3, 20vh);
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 80vw;
  overflow: hidden;
  padding: 10px;
  margin-left: 20vw;
}

.encuesta {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ddd;
  border: 2px solid white;
  padding: 10px;
}

.encuesta p {
  text-align: center;
  margin-bottom: 10px;
}

.encuesta h1 {
  font-size: xx-large;
}

.locationDiv {
  width: 80vw;
  height: 9vh;
  background-color: #004036;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-left:20vw;
}
@media (max-width:980px ) {
  .encuestasWrapper {
  display: grid;
  grid-template-rows: repeat(3, auto);
  grid-template-columns: 1fr;
  grid-gap: 10px;
  width: 100vw;
  overflow: hidden;
  padding: 10px;
  margin-left: 0vw;
    
}
.locationDiv {
  width: 100vw;
  height: 9vh;
  background-color: #004036;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
    margin-left: 0vw;
}
  
}
</style>
