import { createStore } from 'vuex'
import axios from 'axios'
import store from './index';

//tecnico recursos humanos y tecnico comercio exterior se consideran en ing rrhh e ing comex
// fin configuracion de sockets
export default createStore({
  state: {
    logged:false,
    socketId:null,
    clicked:false,
    encuesta:null,
    carreraMobileNav:"",
    usernameModalClicked:false,
    carreraDesktopNav:"",
    registerUser:'',
    registerUsername:'',
    registerPassword:'',
    registerPassword2:'',
    registerCarrera:'',
    registerSuccess:false,
    loginUsername:'',
    loginPassword:'',
    usuario: false,
    emailError:false,
    registerSuccess:false,
    userNotVerified:false,
    mappedCarrerasData:"",
    carrera:false,
    userData:[],
    votosDeEncuesta:[],
    votoDelUsuario:[],
    token:localStorage.getItem("token") || false,
    carreras:[
      "Analista programador",
      "Contabilidad general",
      "Gastronomia",
      "Ingenieria agricola",
      "Ejecucion en administracion",
       "Ejecucion en administracion continuidad",
      "Ingenieria en recursos humanos",
      "Tecnico en recursos humanos",
      "Ingenieria en comercio exterior",
      "Tecnico en comercio exterior",
      "Ingenieria en informatica",
      "Ingenieria en logistica",
      "Psicopedagogia",
      "Servicios aerocomerciales y transportes",
      "Tecnico en administracion",
      "Tecnico agricola",
      "Servicio social",
      "Tecnico en administracion logistica",
      "Tecnico en educacion especial",
      "Tecnico en educacion parvularia",
      "Tecnico en enfermeria",
      "Tecnico en enfermeria gineco",
      "Tecnico en hoteleria y turismo",
      "Tecnico en laboratorio clinico",
      "Tecnico en odontologia",
      "Tecnico laboratorista dental",
      "Tecnico en trabajo social" ,
      "Tecnico en veterinaria",
      "Tecnico juridico",
      ]
  },
  getters: {
  },
  mutations: {
 

    updateVotosDeEncuestas(state,value){
      state.votosDeEncuesta=value
    },
    updateVotosSocketId(state,value){
      state.socketId=value
    },
  
 goLogin:(state)=>{
      state.registerSuccess=false
},goRegister:(state)=>{
   state.userError=false
},goVerify(state){
   state.userNotVerified=false
},goError(state){
  state.loginError=false
},userStatus(state){

console.log(state.token)
}
,cerrarSesion(){
  localStorage.clear()
  window.location.href="https://localhost:8080/"
},   goToHome:()=>{
  this.$router.push('homeView')
},
isClicked:async(state)=>{
      state.clicked=true
},
REMOVE_DATA(){
  localStorage.removeItem("token")
},
SET_DATA(state,data) {
  console.log("MUTATION: loggeando usuario usuario")
  console.log("setDATA MUTATION: ESTE ES EL USUARIO Y EL TOKEN",data.token," ",data.usuario)
  state.logged=true
  localStorage.setItem("token",data.token)
  state.usuario=data.usuario
  state.carrera=data.carrera
  document.getElementById("usuarioDesconectado").style.display="none"
  const Element = document.getElementById("usuario");
  // Crear un fragmento
const fragment = document.createDocumentFragment();

// Crear un elemento h1
const h1 = document.createElement("h1");
h1.textContent =`Bienvenid@ ${data.usuario}!`;
h1.style.textAlign="center"
h1.style.fontSize="20px"
h1.style.fontFamily="Avenir, Helvetica, Arial, sans-serif"
fragment.appendChild(h1);
Element.appendChild(fragment);
  //tenemos planes mas grandes que tu this.$router.push("/");
},
},
  actions: {
 
      setData({ commit }, data) {
        commit('REMOVE_DATA');
        console.log("setDATA ACTION: ESTE ES EL USUARIO Y EL TOKEN",data.token," ",data.usuario)
        console.log("setDATA ACTION: esta es la carrera",data.carrera)
        commit('SET_DATA', data);
      },
  
  },
  modules: {
  }
})