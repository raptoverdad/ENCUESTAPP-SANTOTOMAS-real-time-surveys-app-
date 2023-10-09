let {CONFIG}=require('../config/testingconfig')
const jwt = require('jsonwebtoken')
 
export function getToken(payload:string) {
  const expiresIn = '3h'; // Expira en 3 horas

  const token = jwt.sign({ data: payload }, CONFIG.JWT_SECRET_WORD, { expiresIn });

  return token;
}

console.log('archivo jwt',CONFIG.JWT_SECRET_WORD)
export function getTokenData(token:any):any{
    let data =null
    jwt.verify(token,CONFIG.JWT_SECRET_WORD,(err:any,decoded:any)=>{
        if(err){
           data=null
        }else{
           data=decoded  
        }
    })
    return data
}

