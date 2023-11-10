import { createPool,RowDataPacket } from 'mysql2';
import * as mysql from 'mysql2/promise';
import {CONFIG} from '../config/testingconfig'
import { ResultSetHeader } from 'mysql2/promise'; // Asegúrate de importar el tipo correcto

export class ALFREDGATEWAY{
    private pool: mysql.Pool | null;
    private static instance:ALFREDGATEWAY;
    private constructor() {
        this.pool = null;
      }
      public static async getInstance(): Promise<ALFREDGATEWAY> {
        if (!this.instance) {
          this.instance = new ALFREDGATEWAY();
          let setup = await ALFREDGATEWAY.instance.setupDatabase();
        }
        return this.instance
        }
    public async getData(sentence:string,  values: any[]): Promise<RowDataPacket[] |  RowDataPacket[][] | mysql.OkPacket | mysql.OkPacket[] | mysql.ResultSetHeader | Boolean>{

    if(this.pool != null){
      const sanitizedValues = values ? values.map(value => (value !== undefined ? value : null)) : [];
      const [result] = await this.pool.execute(sentence, sanitizedValues);
      return result;
    }else{
      return false
    }

    }
    
    public async insertData(sentence: string, values: any[]): Promise<boolean> {
      let success = false;
      if (this.pool != null) {
        const sanitizedValues = values ? values.map(value => (value !== undefined ? value : null)) : [];
        try {
          console.log("ejecutando consulta")
          const [result]: any = await this.pool.execute(sentence, sanitizedValues)
          console.log("RESULTADO DE LA insercion",result)
          if (result.affectedRows > 0) {
            console.log("affected rows")
            success=true
             return true
          }else{
            success=false
          }
        } catch (error) {
          console.log("Error inserting data:", error);
          success = false;
        }
      }
      return success;
    }

    
    
    public async removeData(sentence:string, values: string[]): Promise<RowDataPacket[] | boolean>{
      let success = false;
      if (this.pool != null) {
        const sanitizedValues = values ? values.map(value => (value !== undefined ? value : null)) : [];
        const [result] = await this.pool.execute(sentence, sanitizedValues);
       
        success = true;
        return success;
      }
      return success;
    }
    public async updateData(sentence:string, values: string[]): Promise<RowDataPacket[] | boolean>{
      let success = false;
      if (this.pool != null) {
        const sanitizedValues = values ? values.map(value => (value !== undefined ? value : null)) : [];
        const [result] = await this.pool.execute(sentence, sanitizedValues);
        if(result !== undefined){
          success = true;
        }
        
        return success;
      }
      return success;
    }
    private async setupDatabase(): Promise<void> {
      let connected = false;
    
      while (!connected) {
        try {
          this.pool = await mysql.createPool({
            host: "microservicios-db",
            user: "root",
            password: "123456",
            database: "encuestapphttp",
          });
          console.log("connected to database")
          connected = true; // Establecemos la conexión con éxito
        } catch (error) {
          console.error("ERROR. RESOLVIENDO EN 3,2,1...:", error);
          // Esperamos antes de intentar nuevamente
          connected=false
          await new Promise((resolve) => setTimeout(resolve, 2000)); // Puedes ajustar el tiempo de espera según tus necesidades
        }
  
      }
    }
}  