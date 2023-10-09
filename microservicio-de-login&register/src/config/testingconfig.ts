//PRUEBA
export let CONFIG={ 
    TEST:process.env.TEST || "it works!!!",
     MYSQL_HOST:process.env.MYSQL_HOST || "localhost",
     MYSQL_USER:process.env.MYSQL_USER || "root",
      MYSQL_DATABASE:process.env.MYSQL_DATABASE|| "encuestapphttp" ,
     MYSQL_PASSWORD:process.env.MYSQL_PASSWORD || "12345",
      PORT:process.env.PORT || 3000,
      JWT_SECRET_WORD:process.env.JWT_SECRET_WORD  || "skrillex"
  }
  
  