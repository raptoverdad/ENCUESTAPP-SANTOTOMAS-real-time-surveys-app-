
import {ALFREDGATEWAY}  from "../dataaccess/gateway"
const brcryptjs= require('bcryptjs')
let mysqlGateway=ALFREDGATEWAY.getInstance()
import { getToken,getTokenData } from "./jwtService";

//insertar objeto estrategia de login
export class loginStrategy {
  private gateway: ALFREDGATEWAY | null;
  private constructor() {
    // Lógica del constructor privado
    this.gateway = null; // Inicializa la variable gateway
  }      


  public static createInstance(): loginStrategy {
    return new loginStrategy();
  }
  public async login(email: string, password: string): Promise<{token:string,usuario:string,carrera:string} | false> {
    try {
      let [result]:any = await (await mysqlGateway).getData("SELECT * FROM users WHERE usuario = ?", [email]);
      console.log("resultado de el usuario:",result)
      if (result !== undefined) {
           console.log("existe el usuario:",result)
          let compare = await brcryptjs.compareSync(password, result.contrasena);
          if (compare) {
            let token=await getToken(result.usuario)
            return {token:token,usuario:result.usuario,carrera:result.carrera};
          } else {
            console.log("contraseña incorrecta")
            return false
          }    
      } else if (result == undefined) {
        console.log("user not registered")
        return false
      }else{
        console.log("else")
        return false
      }
    } catch (error) {
      console.log("error en la funcion del login:",error)
      return false
    }
  }
  public async register(user:string,password:string,carrera:string): Promise<boolean> {
    let success=false
    try {

      let [result]:any = await (await mysqlGateway).getData("SELECT usuario FROM users where usuario=?", [user]);
   
      if(result == undefined){

        let contraseñaEncriptada = await brcryptjs.hash(password, 10);
        let resultInsert = await (await mysqlGateway).insertData("INSERT INTO users (usuario,contrasena,carrera) VALUES (?,?,?)", [user,contraseñaEncriptada,carrera]);

        if(resultInsert){
          success=true
          return success
        }else{
          return false
        }
      }else  if(result != undefined){
        console.log(result)
        success=false
       return success
      }    
    } catch (error) {
      success=false
      console.log(error)
      return success
    }
    return success
  }
  public async verifierData(user: string): Promise<null | {usuario: string;carrera:string;token:string}> {
    try {
      let [result]:any = await (await mysqlGateway).getData("SELECT * FROM users WHERE usuario = ?", [user]);
      console.log("aqui te traigo al problema:",result )
      if (result != undefined ) {
           
            let newToken=await getToken(result.usuario)
            const userData = {
              usuario: result.usuario,
              carrera:result.carrera,
              token:newToken
            };
            console.log("AKI ESTÁ LA DATA QUE SE ENVIA AL VERIFIER AL VERIFICAR EL TOKEN:",userData)
          return userData
      } else {
        return null
      }
    } catch (error) {
      console.log(error)
      return null
    }
  }
  public async changeUsername(olduser: string,newuser:string): Promise<boolean> {
    try {
      let [result]:any = await (await mysqlGateway).getData("SELECT usuario FROM users WHERE usuario = ?", [newuser]);
      console.log("aqui te traigo al problema:",result )
      if (result != undefined ) {         
          return false
      } else {
        let [result]:any = await (await mysqlGateway).getData("UPDATE users set usuario = ? where usuario=?", [newuser,olduser]);
        console.log("aqui te traigo al problema:",result )
        if (result != false) {       
             return true
        } else {
          return false
        }
      }
      
    } catch (error) {
      console.log(error)
      return false
    }
  }

}

