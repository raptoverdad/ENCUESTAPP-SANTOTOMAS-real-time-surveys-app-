
import { createPool,RowDataPacket } from 'mysql2';
import * as mysql from 'mysql2/promise';
import {CONFIG} from '../config/testingconfig'
import {decodeToken} from '../domain/jwtFunctions'


export class UserGateway {
  private static instance: UserGateway;
  private pool: mysql.Pool | null;

  private constructor() {
    this.pool = null;
  }

  public static async getInstance(): Promise<UserGateway> {
    if (!UserGateway.instance) {
      UserGateway.instance = new UserGateway();
      let setup = await UserGateway.instance.setupDatabase();
    }
    return UserGateway.instance;
  }

  public async insertVote(data: any): Promise<boolean > {
    let finalResult: boolean = false;
    let userQuery = 'SELECT * FROM preguntasyrespuestas WHERE encuesta=? and pregunta=? and usuario=?;';
    console.log("DATOS QUE LLEGARON:")
   
    let encuesta = data.encuesta
    console.log("ENCUESTA:",encuesta)
    let pregunta =data.pregunta
    console.log("PREGUNTA:",pregunta)
    let usuariodecodificado = await decodeToken(data.token,CONFIG.JWT_SECRET)
    let usuariofinal = usuariodecodificado.data
    console.log("USUARIO:",usuariofinal)
    let voto=data.voto
    console.log("VOTO:",voto)
    let requestValue=[encuesta,pregunta,usuariofinal]
    console.log("BIENVENIDO A GATEWAY.TS Y AL METODO INSERTVOTE DEL USERGATEWAY")
    if (this.pool) {
      console.log("LA BASE DE DATOS ESTÁ ONLINE!!")
      try {
        let [result] = await this.pool.execute<RowDataPacket[]>(userQuery, requestValue);
        if (result.length == 0) {
          console.log("result.length == 0")
          console.log("INSERTAREMOS EL VOTO POR QUE NO HAY REGISTROS DE ESTE USUARIO VOTANDO EN ESTA PREGUNTA")
   
          const insertNewVote = 'INSERT INTO preguntasyrespuestas (encuesta,pregunta,usuario,voto) VALUES (?,?,?,?)';
          let insertNewVoteValues = [encuesta,pregunta,usuariofinal,voto];
          let [sqlQuery] = await this.pool.execute(insertNewVote, insertNewVoteValues);
          console.log("SE HA INSERTADO?","RESPUESTA:",sqlQuery," ","(resultado del query)")
          if (sqlQuery) {
            console.log("VALORES A INSERTAR:",insertNewVoteValues)
            console.log("")
            finalResult = true;
          } else {
            finalResult = false;
          }
        } else if(result.length > 0){
          console.log("result.length MAYOR A 0")
          console.log("ELIMINAREMOS EL VOTO POR QUE HAY REGISTROS DE ESTE USUARIO VOTANDO EN ESTA PREGUNTA")
          let removeVote="DELETE FROM preguntasyrespuestas WHERE pregunta = ? AND usuario = ? AND encuesta=?;"
          let removeValues=[pregunta,usuariofinal,encuesta]
          let resultado = await this.pool.execute(removeVote, removeValues);
          if (Array.isArray(resultado)) {
            const affectedRows = (resultado[0] as any).affectedRows;
          if (affectedRows !== undefined && affectedRows > 0) {
            console.log("Valores eliminados correctamente.");
            let insertVote = 'INSERT INTO preguntasyrespuestas (voto, encuesta, pregunta, usuario) VALUES (?, ?, ?, ?)';
            let insertVoteValues = [voto, encuesta, pregunta, usuariofinal];
            const [insertResult] = await this.pool.execute(insertVote, insertVoteValues);
            console.log("RESPUESTA DE LA INSERCION DEL BOTO:",insertResult)
           if ('affectedRows' in insertResult && insertResult.affectedRows > 0) {
             console.log("Voto insertado correctamente.");
             finalResult = true;
           } else {
             console.log("Error al insertar el voto.");
             finalResult = false;
           }
          } else {
            console.log("No se encontraron valores para eliminar.");
          }
       }
        }
      } catch (error) {
        console.log("error en el insertVotes method",error)
        finalResult = false;
      }
    } else {
      finalResult = false;
    }
    return finalResult;
  }

  public async getSurveyVotes(encuesta:string): Promise<RowDataPacket[] | null> {
    let getVotesQuery="SELECT * FROM preguntasyrespuestas where encuesta=?"
    let values = [encuesta];
    if (!this.pool) {
      throw new Error('No se pudo conectar a la base de datos');
    }else{
      let [result] = await this.pool.execute<RowDataPacket[]>(getVotesQuery, values);
      if(result.length > 0){
        return result
      }else{
        return null
      }
    }

  }       
  public async getMyVotes(token:string): Promise<RowDataPacket[] | null | string> {

    if (!this.pool) {
      throw new Error('No se pudo conectar a la base de datos');
    }else{
      let usuario=await decodeToken(token,CONFIG.JWT_SECRET)
      let getVotesQuery="SELECT * FROM preguntasyrespuestas where usuario=?"
      let values = [usuario.data];
      let [result] = await this.pool.execute<RowDataPacket[]>(getVotesQuery, values);
      if(result.length > 0){
        return result
      }else if(result.length == 0 || undefined){
        return "no votes"
      }else{
        return null
      }
    }

  }   
  public async anularVoto(pregunta:string,encuesta:string,usuario:string) :Promise<boolean> {
    let success=false
    let removeVote="DELETE FROM preguntasyrespuestas WHERE pregunta = ? AND usuario = ? AND encuesta=?;"
    let removeValues=[pregunta,usuario,encuesta]
    if(this.pool!= null){
      let resultado = await this.pool.execute(removeVote, removeValues);
      if (Array.isArray(resultado)) {
        const affectedRows = (resultado[0] as any).affectedRows;
      if (affectedRows !== undefined && affectedRows > 0) {
         success=true
       }else{
        success= false
      }
     }
     
    }
    return success
  }
  public async getStatistics(): Promise<RowDataPacket[] | null | string> {
    let getVotesQuery="SELECT encuesta,pregunta,voto FROM preguntasyrespuestas"

    if (!this.pool) {
      throw new Error('No se pudo conectar a la base de datos');
    }else{
      let [result] = await this.pool.execute<RowDataPacket[]>(getVotesQuery);
      if(result.length > 0){
        return result
      }else if(result.length == 0 || undefined){
        return "no votes"
      }else{
        return null
      }
    }

  } 
  private async setupDatabase(): Promise<void> {
    try {
      this.pool = mysql.createPool({
        host:"microservicio-encuestas-db",
        user: "root",
        password: "123456",
        database: "encuestappsockets",
      });
      console.log('DATA ACCESS:Connection established')
      }catch{
        console.log("ERROR: BASE DE DATOS NO SE CONECTÓ ")
      }}}
