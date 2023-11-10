 USE encuestapphttp
 CREATE TABLE users (
              id INT AUTO_INCREMENT PRIMARY KEY,
              usuario VARCHAR(250),
              contrasena VARCHAR(250),
              carrera VARCHAR(250)
            );

CREATE TABLE preguntasyrespuestas(
    id INT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(250),
    pregunta VARCHAR(250),
    voto VARCHAR(250),
    encuesta VARCHAR(250)
);