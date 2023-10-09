const jwt = require('jsonwebtoken');

export function decodeToken(token:string, secret:string) {
  try {
    const decoded = jwt.verify(token, secret);
    return decoded;
  } catch (error) {
    // Manejo de errores en caso de que el token no sea válido
    console.error('Error al decodificar el token:', error);
    return null;
  }
}