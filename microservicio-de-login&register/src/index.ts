import  { NextFunction, Request, Response } from 'express';
import { loginStrategy } from './domain/strategies';
const cors=require("cors")
const express = require("express");
const app =  express();
import {CONFIG} from './config/testingconfig'
import {getToken,getTokenData} from './domain/jwtService'
const {body,validationResult, param}=require('express-validator')
const cookieParser = require('cookie-parser');
import rateLimit from 'express-rate-limit'
//import {getToken,getTokenData} from './domain/jwtService';

app.use(express.json());
app.use(cookieParser());
//app.use((req:Request, res:Response, next:NextFunction) => {
//  res.header("Access-Control-Allow-Origin", "https://encuestapp-santotomas.com/");
//  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Agrega los métodos HTTP permitidos
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Agrega los encabezados permitidos
//  res.header("Access-Control-Allow-Credentials", "true"); // Habilita el envío de cookies con la solicitud
//  next();
//});
console.log("hola")

// Configura el middleware cors para permitir solicitudes desde los orígenes válidos con credenciales
app.use(cors({
  origin: '*', // Agrega el dominio de tu frontend aquí
  methods: 'GET, POST, PUT, DELETE, OPTIONS', // Agrega los métodos permitidos
  credentials: false,
  allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization' // Agrega los encabezados permitidos
}));

 let strategiaDeLogin = loginStrategy.createInstance();
 const confirmCarreraMatch = (value: string) => {
  const carreras = [
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


  if (!carreras.includes(value)) {
    throw new Error('La carrera no es válida');
  }

  return true;
};
app.set('trust proxy', true);
const registerLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // Máximo 5 peticiones por minuto
});
app.post('/register', registerLimiter,
[    body('registerUsername')
    .toLowerCase()
    .notEmpty()
    .isLength({ min: 5 }),
    body('registerPassword') 
    .notEmpty()
    .isLength({ min: 6 }),
    body('registerCarrera') 
    .notEmpty()
    .custom(confirmCarreraMatch),
],async (req: Request, res:Response)=>{
    console.log("--------------------------------START OF REGISTER ENDPOINT PETITION----------------------------------")
  
 try {
  let errors=validationResult(req)
  if(errors.isEmpty()){
   
      let register=await (await strategiaDeLogin).register(req.body.registerUsername,req.body.registerPassword,req.body.registerCarrera)
      console.log("este es el register:",register)
      if(register) {
        res.status(200).send("datos validos");
      }else{
        res.status(404).send("el usuario existe")
      }
     
  }else{
    console.log("error")
    console.log(errors)
  res.status(400).json(errors)
  }
 } catch (error) {
  console.log(error)
 }
 console.log("-------------------------------END OF REGISTER ENDPOINT PETITION----------------------------------")
})
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5, // Máximo 5 peticiones por minuto
});
app.post('/login', loginLimiter,
[    body('loginUsername')
    .toLowerCase()
    .isLength({ min: 5 }),
    body('loginPassword') .notEmpty()
    .isLength({ min: 6 }),
],async (req: Request, res:Response)=>{
    console.log("--------------------------------START OF LOGIN ENDPOINT PETITION----------------------------------")
  
 try {
  let errors=validationResult(req)
  if(errors.isEmpty()){
    console.log("empty")
      let loginUsername=req.body.loginUsername
      let loginPassword=req.body.loginPassword
      let login=await (await strategiaDeLogin).login(loginUsername,loginPassword)
      console.log("este es el login:",login)
      if(login !== false) {
        console.log("enviando token y status 200")
        res.status(200).json(login)
        console.log("cookie enviada")
      }else{
        console.log("recurso no encontrado")
        res.status(404).send("resource not found")
      }
     
  }else{
    console.log("error")
    console.log(errors)
  res.status(400).json(errors)
  }
 } catch (error) {
  console.log(error)
 }
 console.log("-------------------------------END OF LOGIN ENDPOINT PETITION----------------------------------")
})



// Agregar el middleware a una ruta específica o a nivel de aplicación
app.post("/verify",async (req: Request, res:Response)=>{
   console.log("------------------------------------TOKEN ENDPOINT PETITION-------------------------------------------")
    try{  
          let username=await getTokenData(req.body.token)
          console.log("no hay errores en la validacion de parametros")
          console.log("este es el nombre de usuario:",username)
          if(username !== null){
            console.log("username no es null")
            let verify=await (await strategiaDeLogin).verifierData(username.data)
            if(verify !== null){
              console.log("verificacion exitosa")
            await res.status(200).json(verify) 
            }else{
              console.log("RESULTADO DE LA VERIFICACION:",verify)
              console.log("verificacion NO exitosa")
              res.status(400).send("not-valid-token")
            }
           
           
          }else if(username == null){
   
            console.log("username es null")
              res.status(400).send("not-valid-token")
          }else{
            console.log("es else")
          }
   
    }catch(e){
        console.log(e)
    }
    console.log("------------------------------------END TOKEN OF ENDPOINT PETITION-------------------------------------------")
})
app.post("/cambiarNombre",async (req: Request, res:Response)=>{
  console.log("------------------------------------CHANGE USERNAME ENDPOINT PETITION-------------------------------------------")
   try{  
         let username=await getTokenData(req.body.token)
         console.log("no hay errores en la validacion de parametros")
         console.log("este es el nombre de usuario:",username)
         if(username !== null){
           console.log("username no es null")
           let cambiarNombre=await (await strategiaDeLogin).changeUsername(username.data,req.body.nombre)
           if(cambiarNombre == true){
     
           await res.status(200).json(
            {nombre:req.body.nombre,token:await getToken(req.body.nombre)}
           ) 
           }else{
             res.status(400).send("not-valid-username")
           }
          
          
         }
  
   }catch(e){
    res.status(400).send({error:"server-error"})
   }
   console.log("------------------------------------END OF CHANGE USERNAME PETITION-------------------------------------------")
})
app.listen(3000,()=>{
    console.log("LISTENING!!!!! on",+" "+3000)
})
