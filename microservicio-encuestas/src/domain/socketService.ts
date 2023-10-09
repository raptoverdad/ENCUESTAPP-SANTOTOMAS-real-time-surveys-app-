const http = require('http');
import {CONFIG} from '../config/testingconfig'
import { Server, Socket } from 'socket.io';
import {UserGateway} from '../dataaccess/gateway'
import { decodeToken } from './jwtFunctions';
let gateway= UserGateway.getInstance()

export class socketService {
  private io: Server;
  private key:string;
  private usersConected:any;

  constructor() {
    this.key="skrillex"
    this.io = new Server(
      http.createServer().listen(3001),
      {
        cors: {
          origin: "*",
          methods: ["GET", "POST"],
          credentials: false,
        },
      }
    );
   console.log("conectado en"," ",3001)
    this.io.use(async (sockete:any, next:any) => {
      let frontendKey = await sockete.handshake.query.key;
      if (frontendKey !== this.key) {
        throw new Error("invalid socket connection")
      } else {
        next();
      }
    });

    this.io.on("connection", async(socket:any) => {
      let materia:string=await socket.handshake.query.materia
      if(materia !=undefined && materia != "estadisticas" && materia != "misVotos"){
        this.sendSurveyVotes(await(materia))
      }else if(materia=="estadisticas"){
        let  result=await this.sendStatistics()
        if(result!=null && result!="noVotes"){
          console.log("enviando soket estadisticas")
          socket.emit('estadisticas',result)
        }else if( result=="noVotes"){
          console.log("enviando soket estadisticasNoVotes")
          socket.emit('estadisticasNoVotes')  
        }else if( result==null){
          console.log("enviando soket estadisticasError")
          socket.emit('estadisticasError')  
        }else{
          socket.emit('estadisticasError')  
        }
     
      }else if(materia=="misVotos"){
        let token:string=await socket.handshake.query.token
        let result=await this.sendUserVotes(await(token))
        
        if(result!=null || result!="no votes"){  
          socket.emit('respuestaMisVotos',result)
        }else if(result=="no votes"){
          socket.emit('misVotosNoVotes')  
        }else if( result==null){
          socket.emit('misVotosError')  
        }else{
          socket.emit('misVotosError')  
        }
      }

  try {

  socket.on("newvote", async (json: any, senderSocket:any) => {  
     console.log("el mensaje enviado con newvote:",json)
    let tokenValido=await decodeToken(json.token,CONFIG.JWT_SECRET)

    if(tokenValido != null){
      let pakete=json
      let encuesta=json.encuesta
      let insertVote=await (await gateway).insertVote(pakete)
      console.log("este es el pakete que le metiste a insertVote:",pakete)
      if(insertVote ==true){ 
        (await this.sendSurveyVotes(encuesta))
        console.log("tiene que ser true para responderle:",insertVote)
      }else{
        socket.emit("voteError")
        console.log("tiene que ser true para responderle:",insertVote)
      }
    }else{
      socket.emit("notValidToken")
      console.log("emmiting not valid token")
    }

});
socket.on("anularVoto", async (json: any, senderSocket:any) => {  
  console.log("el mensaje enviado con newvote:",json)
 let tokenValido=await decodeToken(json.token,CONFIG.JWT_SECRET)

 if(tokenValido != null){

   let deleteVote=await (await gateway).anularVoto(json.pregunta,json.encuesta,tokenValido.data)

   if(deleteVote ==true){ 
    socket.emit("notValidToken")
   }else{
     socket.emit("votoAnulado",{encuesta:json.encuesta,pregunta:json.pregunta})
   }
 }else{
   socket.emit("notValidToken")
   console.log("emmiting not valid token")
 }
 //VERIFICAR QUE EL TOKEN SEA VALIDO         

});
      }catch(error){
        console.log("chatVisitor error:", error);
      }

    });
  }

  //fin constructor - inicio metodos de la clase
  private async sendSurveyVotes(survey:string){

    let result=await(await gateway).getSurveyVotes(survey)

    if(this.io)
    {
      if(result!=null){
        this.io.sockets.emit('surveyvotes',{"encuesta":survey,"preguntasyrespuestas":result})
        
      }
     
    }else
    {
      console.log("enviar una respuesta de error")
    }
  }
 
  private async sendStatistics(){
    let result=await(await gateway).getStatistics()
    if(this.io)
    {
     return result
    }else
    {
     return "error"
    }
  }
  //decifrar token y ver si es valid. luego, dar los votos del user.resolver  a partir si devuelve rows, "noVotes" o null.
  private async sendUserVotes(token:string){
    let result=await(await gateway).getMyVotes(token)
    if(this.io)
    {

      return result
     
    }else
    {
      return "error"
    }
  }
  }
 

