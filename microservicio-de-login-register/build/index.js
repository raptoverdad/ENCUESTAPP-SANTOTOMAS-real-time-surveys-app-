"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var strategies_1 = require("./domain/strategies");
var cors = require("cors");
var express = require("express");
var app = express();
var jwtService_1 = require("./domain/jwtService");
var _a = require('express-validator'), body = _a.body, validationResult = _a.validationResult, param = _a.param;
var cookieParser = require('cookie-parser');
var express_rate_limit_1 = require("express-rate-limit");
//import {getToken,getTokenData} from './domain/jwtService';
app.use(express.json());
app.use(cookieParser());
//app.use((req:Request, res:Response, next:NextFunction) => {
//  res.header("Access-Control-Allow-Origin", "https://encuestapp-santotomas.com/");
//  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); // Agrega los métodos HTTP permitidos
//  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization"); // Agrega los encabezados permitidos
//  res.header("Access-Control-Allow-Credentials", "true"); // Habilita el envío de cookies con la solicitud
//  next();
//});
console.log("hola");
// Configura el middleware cors para permitir solicitudes desde los orígenes válidos con credenciales
app.use(cors({
    origin: '*',
    methods: 'GET, POST, PUT, DELETE, OPTIONS',
    credentials: false,
    allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization' // Agrega los encabezados permitidos
}));
var strategiaDeLogin = strategies_1.loginStrategy.createInstance();
var confirmCarreraMatch = function (value) {
    var carreras = [
        "Analista programador",
        "Contabilidad general",
        "Gastronomia",
        "Ingenieria agricola",
        "Ejecucion en administracion",
        "Ejecucion en administracion continuidad",
        "Ingenieria en recursos humanos",
        "Tecnico en recursos humanos",
        "Ingenieria en comercio exterior",
        "Tecnico en comercio exterior",
        "Ingenieria en informatica",
        "Ingenieria en logistica",
        "Psicopedagogia",
        "Servicios aerocomerciales y transportes",
        "Tecnico en administracion",
        "Tecnico agricola",
        "Servicio social",
        "Tecnico en administracion logistica",
        "Tecnico en educacion especial",
        "Tecnico en educacion parvularia",
        "Tecnico en enfermeria",
        "Tecnico en enfermeria gineco",
        "Tecnico en hoteleria y turismo",
        "Tecnico en laboratorio clinico",
        "Tecnico en odontologia",
        "Tecnico laboratorista dental",
        "Tecnico en trabajo social",
        "Tecnico en veterinaria",
        "Tecnico juridico",
    ];
    if (!carreras.includes(value)) {
        throw new Error('La carrera no es válida');
    }
    return true;
};
app.set('trust proxy', true);
var registerLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 5, // Máximo 5 peticiones por minuto
});
app.post('/register', registerLimiter, [body('registerUsername')
        .toLowerCase()
        .notEmpty()
        .isLength({ min: 5 }),
    body('registerPassword')
        .notEmpty()
        .isLength({ min: 6 }),
    body('registerCarrera')
        .notEmpty()
        .custom(confirmCarreraMatch),
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, register, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("--------------------------------START OF REGISTER ENDPOINT PETITION----------------------------------");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                errors = validationResult(req);
                if (!errors.isEmpty()) return [3 /*break*/, 4];
                return [4 /*yield*/, strategiaDeLogin];
            case 2: return [4 /*yield*/, (_a.sent()).register(req.body.registerUsername, req.body.registerPassword, req.body.registerCarrera)];
            case 3:
                register = _a.sent();
                console.log("este es el register:", register);
                if (register) {
                    res.status(200).send("datos validos");
                }
                else {
                    res.status(404).send("el usuario existe");
                }
                return [3 /*break*/, 5];
            case 4:
                console.log("error");
                console.log(errors);
                res.status(400).json(errors);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_1 = _a.sent();
                console.log(error_1);
                return [3 /*break*/, 7];
            case 7:
                console.log("-------------------------------END OF REGISTER ENDPOINT PETITION----------------------------------");
                return [2 /*return*/];
        }
    });
}); });
var loginLimiter = (0, express_rate_limit_1.default)({
    windowMs: 60 * 1000,
    max: 5, // Máximo 5 peticiones por minuto
});
app.post('/login', loginLimiter, [body('loginUsername')
        .toLowerCase()
        .isLength({ min: 5 }),
    body('loginPassword').notEmpty()
        .isLength({ min: 6 }),
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, loginUsername, loginPassword, login, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("--------------------------------START OF LOGIN ENDPOINT PETITION----------------------------------");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 6, , 7]);
                errors = validationResult(req);
                if (!errors.isEmpty()) return [3 /*break*/, 4];
                console.log("empty");
                loginUsername = req.body.loginUsername;
                loginPassword = req.body.loginPassword;
                return [4 /*yield*/, strategiaDeLogin];
            case 2: return [4 /*yield*/, (_a.sent()).login(loginUsername, loginPassword)];
            case 3:
                login = _a.sent();
                console.log("este es el login:", login);
                if (login !== false) {
                    console.log("enviando token y status 200");
                    res.status(200).json(login);
                    console.log("cookie enviada");
                }
                else {
                    console.log("recurso no encontrado");
                    res.status(404).send("resource not found");
                }
                return [3 /*break*/, 5];
            case 4:
                console.log("error");
                console.log(errors);
                res.status(400).json(errors);
                _a.label = 5;
            case 5: return [3 /*break*/, 7];
            case 6:
                error_2 = _a.sent();
                console.log(error_2);
                return [3 /*break*/, 7];
            case 7:
                console.log("-------------------------------END OF LOGIN ENDPOINT PETITION----------------------------------");
                return [2 /*return*/];
        }
    });
}); });
// Agregar el middleware a una ruta específica o a nivel de aplicación
app.post("/verify", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, verify, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                console.log("------------------------------------TOKEN ENDPOINT PETITION-------------------------------------------");
                _a.label = 1;
            case 1:
                _a.trys.push([1, 10, , 11]);
                return [4 /*yield*/, (0, jwtService_1.getTokenData)(req.body.token)];
            case 2:
                username = _a.sent();
                console.log("no hay errores en la validacion de parametros");
                console.log("este es el nombre de usuario:", username);
                if (!(username !== null)) return [3 /*break*/, 8];
                console.log("username no es null");
                return [4 /*yield*/, strategiaDeLogin];
            case 3: return [4 /*yield*/, (_a.sent()).verifierData(username.data)];
            case 4:
                verify = _a.sent();
                if (!(verify !== null)) return [3 /*break*/, 6];
                console.log("verificacion exitosa");
                return [4 /*yield*/, res.status(200).json(verify)];
            case 5:
                _a.sent();
                return [3 /*break*/, 7];
            case 6:
                console.log("RESULTADO DE LA VERIFICACION:", verify);
                console.log("verificacion NO exitosa");
                res.status(400).send("not-valid-token");
                _a.label = 7;
            case 7: return [3 /*break*/, 9];
            case 8:
                if (username == null) {
                    console.log("username es null");
                    res.status(400).send("not-valid-token");
                }
                else {
                    console.log("es else");
                }
                _a.label = 9;
            case 9: return [3 /*break*/, 11];
            case 10:
                e_1 = _a.sent();
                console.log(e_1);
                return [3 /*break*/, 11];
            case 11:
                console.log("------------------------------------END TOKEN OF ENDPOINT PETITION-------------------------------------------");
                return [2 /*return*/];
        }
    });
}); });
app.post("/cambiarNombre", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var username, cambiarNombre, _a, _b, e_2;
    var _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                console.log("------------------------------------CHANGE USERNAME ENDPOINT PETITION-------------------------------------------");
                _d.label = 1;
            case 1:
                _d.trys.push([1, 9, , 10]);
                return [4 /*yield*/, (0, jwtService_1.getTokenData)(req.body.token)];
            case 2:
                username = _d.sent();
                console.log("no hay errores en la validacion de parametros");
                console.log("este es el nombre de usuario:", username);
                if (!(username !== null)) return [3 /*break*/, 8];
                console.log("username no es null");
                return [4 /*yield*/, strategiaDeLogin];
            case 3: return [4 /*yield*/, (_d.sent()).changeUsername(username.data, req.body.nombre)];
            case 4:
                cambiarNombre = _d.sent();
                if (!(cambiarNombre == true)) return [3 /*break*/, 7];
                _b = (_a = res.status(200)).json;
                _c = { nombre: req.body.nombre };
                return [4 /*yield*/, (0, jwtService_1.getToken)(req.body.nombre)];
            case 5: return [4 /*yield*/, _b.apply(_a, [(_c.token = _d.sent(), _c)])];
            case 6:
                _d.sent();
                return [3 /*break*/, 8];
            case 7:
                res.status(400).send("not-valid-username");
                _d.label = 8;
            case 8: return [3 /*break*/, 10];
            case 9:
                e_2 = _d.sent();
                res.status(400).send({ error: "server-error" });
                return [3 /*break*/, 10];
            case 10:
                console.log("------------------------------------END OF CHANGE USERNAME PETITION-------------------------------------------");
                return [2 /*return*/];
        }
    });
}); });
app.listen(3000, function () {
    console.log("LISTENING!!!!! on", +" " + 3000);
});
