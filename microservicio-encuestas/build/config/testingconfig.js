"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONFIG = void 0;
//PRUEBA
exports.CONFIG = {
    TEST: process.env.TEST || "it works!!!",
    MYSQL_HOST: process.env.MYSQL_HOST || "localhost",
    MYSQL_USER: process.env.MYSQL_USER || "root",
    MYSQL_DATABASE: process.env.MYSQL_DATABASE || "",
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD || "123456",
    TELEGRAM_TOKEN: process.env.TELEGRAM_TOKEN || "6033550902:AAG7FQDmtqmu5CVz7h-bZMg8P4EI65vVOho",
    PORT: process.env.PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET || 'Bnx6aw300172_'
};
