import { socketService } from "./domain/socketService";
import rateLimit from 'express-rate-limit'
let server=new socketService()
const express = require('express');
//const app = express();
//const limiter = rateLimit({
//  windowMs: 60 * 60 * 1000, // 1 hora
//  max: 1000000, // Máximo 110 conexiones por IP por hora
//});
//app.set('trust proxy', true); 
//app.use(limiter);

