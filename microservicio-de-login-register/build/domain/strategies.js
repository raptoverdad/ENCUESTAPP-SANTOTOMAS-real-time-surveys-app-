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
exports.loginStrategy = void 0;
var gateway_1 = require("../dataaccess/gateway");
var brcryptjs = require('bcryptjs');
var mysqlGateway = gateway_1.ALFREDGATEWAY.getInstance();
var jwtService_1 = require("./jwtService");
//insertar objeto estrategia de login
var loginStrategy = /** @class */ (function () {
    function loginStrategy() {
        // Lógica del constructor privado
        this.gateway = null; // Inicializa la variable gateway
    }
    loginStrategy.createInstance = function () {
        return new loginStrategy();
    };
    loginStrategy.prototype.login = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var result, compare, token, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        return [4 /*yield*/, mysqlGateway];
                    case 1: return [4 /*yield*/, (_a.sent()).getData("SELECT * FROM users WHERE usuario = ?", [email])];
                    case 2:
                        result = (_a.sent())[0];
                        console.log("resultado de el usuario:", result);
                        if (!(result !== undefined)) return [3 /*break*/, 7];
                        console.log("existe el usuario:", result);
                        return [4 /*yield*/, brcryptjs.compareSync(password, result.contrasena)];
                    case 3:
                        compare = _a.sent();
                        if (!compare) return [3 /*break*/, 5];
                        return [4 /*yield*/, (0, jwtService_1.getToken)(result.usuario)];
                    case 4:
                        token = _a.sent();
                        return [2 /*return*/, { token: token, usuario: result.usuario, carrera: result.carrera }];
                    case 5:
                        console.log("contraseña incorrecta");
                        return [2 /*return*/, false];
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        if (result == undefined) {
                            console.log("user not registered");
                            return [2 /*return*/, false];
                        }
                        else {
                            console.log("else");
                            return [2 /*return*/, false];
                        }
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_1 = _a.sent();
                        console.log("error en la funcion del login:", error_1);
                        return [2 /*return*/, false];
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    loginStrategy.prototype.register = function (user, password, carrera) {
        return __awaiter(this, void 0, void 0, function () {
            var success, result, contraseñaEncriptada, resultInsert, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        success = false;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, mysqlGateway];
                    case 2: return [4 /*yield*/, (_a.sent()).getData("SELECT usuario FROM users where usuario=?", [user])];
                    case 3:
                        result = (_a.sent())[0];
                        if (!(result == undefined)) return [3 /*break*/, 7];
                        return [4 /*yield*/, brcryptjs.hash(password, 10)];
                    case 4:
                        contraseñaEncriptada = _a.sent();
                        return [4 /*yield*/, mysqlGateway];
                    case 5: return [4 /*yield*/, (_a.sent()).insertData("INSERT INTO users (usuario,contrasena,carrera) VALUES (?,?,?)", [user, contraseñaEncriptada, carrera])];
                    case 6:
                        resultInsert = _a.sent();
                        if (resultInsert) {
                            success = true;
                            return [2 /*return*/, success];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 8];
                    case 7:
                        if (result != undefined) {
                            console.log(result);
                            success = false;
                            return [2 /*return*/, success];
                        }
                        _a.label = 8;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_2 = _a.sent();
                        success = false;
                        console.log(error_2);
                        return [2 /*return*/, success];
                    case 10: return [2 /*return*/, success];
                }
            });
        });
    };
    loginStrategy.prototype.verifierData = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, newToken, userData, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 6, , 7]);
                        return [4 /*yield*/, mysqlGateway];
                    case 1: return [4 /*yield*/, (_a.sent()).getData("SELECT * FROM users WHERE usuario = ?", [user])];
                    case 2:
                        result = (_a.sent())[0];
                        console.log("aqui te traigo al problema:", result);
                        if (!(result != undefined)) return [3 /*break*/, 4];
                        return [4 /*yield*/, (0, jwtService_1.getToken)(result.usuario)];
                    case 3:
                        newToken = _a.sent();
                        userData = {
                            usuario: result.usuario,
                            carrera: result.carrera,
                            token: newToken
                        };
                        console.log("AKI ESTÁ LA DATA QUE SE ENVIA AL VERIFIER AL VERIFICAR EL TOKEN:", userData);
                        return [2 /*return*/, userData];
                    case 4: return [2 /*return*/, null];
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        error_3 = _a.sent();
                        console.log(error_3);
                        return [2 /*return*/, null];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    loginStrategy.prototype.changeUsername = function (olduser, newuser) {
        return __awaiter(this, void 0, void 0, function () {
            var result, result_1, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 7, , 8]);
                        return [4 /*yield*/, mysqlGateway];
                    case 1: return [4 /*yield*/, (_a.sent()).getData("SELECT usuario FROM users WHERE usuario = ?", [newuser])];
                    case 2:
                        result = (_a.sent())[0];
                        console.log("aqui te traigo al problema:", result);
                        if (!(result != undefined)) return [3 /*break*/, 3];
                        return [2 /*return*/, false];
                    case 3: return [4 /*yield*/, mysqlGateway];
                    case 4: return [4 /*yield*/, (_a.sent()).getData("UPDATE users set usuario = ? where usuario=?", [newuser, olduser])];
                    case 5:
                        result_1 = (_a.sent())[0];
                        console.log("aqui te traigo al problema:", result_1);
                        if (result_1 != false) {
                            return [2 /*return*/, true];
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        _a.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_4 = _a.sent();
                        console.log(error_4);
                        return [2 /*return*/, false];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return loginStrategy;
}());
exports.loginStrategy = loginStrategy;
