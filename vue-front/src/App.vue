<template>



<desktopNav></desktopNav>
<mobileNav></mobileNav>

  <router-view/>
</template>
<script>
import axios from 'axios'

import desktopNav from '@/components/desktopNav.vue'
import mobileNav from '@/components/mobileNav.vue'




export default {
      name: 'HomeView',
      components: {
       desktopNav,mobileNav
  },data(){
       return {
   
    }
      },
  mounted() {


this.verifySession()


  },
  beforeDestroy() {
    
  },methods:{
  closeMobileNav:()=>{
    document.querySelector("#navbarNav").classList.toggle("show")
    },
    verifySession(){
      //hacer modal y sacarlo cuando todo termine de cargar
      console.log("EL TOKEN QUE VAMOS A ENVIAR!",localStorage.getItem("token"))
      axios.post("http://localhost:3000/verify", {
        token: localStorage.getItem("token")})
      .then((res)=>{

        this.$store.dispatch("setData", {token:res.data.token,usuario:res.data.usuario,carrera:res.data.carrera });
      }).catch(err=>
        {
          localStorage.clear()
        })
    },


    }


     }
</script>
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
  font-size: large;
}
img{
  animation: spin 8s infinite linear;
  height: 28vh;
}
#serviciosDropdown{
  font-size:3vh;
  margin-top: 3vh;
}
.broughtDown{

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
        background-color:#fff;
        display:flex;
        color:#000;
        font-family: 'Poppins', sans-serif;
        text-align:center;

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
    .dropdown{
      display: flex;
      justify-content: center;
      align-items: center;
      width:20vw;
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
/*subirlo de 980 haria tener problemas al mobilenav*/
@media (max-width:980px) {
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
}

</style>

