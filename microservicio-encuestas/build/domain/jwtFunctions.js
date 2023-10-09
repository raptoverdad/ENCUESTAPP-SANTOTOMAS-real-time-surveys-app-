"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeToken = void 0;
var jwt = require('jsonwebtoken');
function decodeToken(token, secret) {
    try {
        var decoded = jwt.verify(token, secret);
        return decoded;
    }
    catch (error) {
        // Manejo de errores en caso de que el token no sea válido
        console.error('Error al decodificar el token:', error);
        return null;
    }
}
exports.decodeToken = decodeToken;
