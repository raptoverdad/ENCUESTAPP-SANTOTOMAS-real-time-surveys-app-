"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenData = exports.getToken = void 0;
var CONFIG = require('../config/testingconfig').CONFIG;
var jwt = require('jsonwebtoken');
function getToken(payload) {
    var expiresIn = '3h'; // Expira en 3 horas
    var token = jwt.sign({ data: payload }, CONFIG.JWT_SECRET_WORD, { expiresIn: expiresIn });
    return token;
}
exports.getToken = getToken;
console.log('archivo jwt', CONFIG.JWT_SECRET_WORD);
function getTokenData(token) {
    var data = null;
    jwt.verify(token, CONFIG.JWT_SECRET_WORD, function (err, decoded) {
        if (err) {
            data = null;
        }
        else {
            data = decoded;
        }
    });
    return data;
}
exports.getTokenData = getTokenData;
