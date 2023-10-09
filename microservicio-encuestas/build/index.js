"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var socketService_1 = require("./domain/socketService");
var server = new socketService_1.socketService();
//const express = require('express');
//const app = express();
//const limiter = rateLimit({
//  windowMs: 60 * 60 * 1000, // 1 hora
//  max: 1000000, // Máximo 110 conexiones por IP por hora
//});
//app.set('trust proxy', true); 
//app.use(limiter);
