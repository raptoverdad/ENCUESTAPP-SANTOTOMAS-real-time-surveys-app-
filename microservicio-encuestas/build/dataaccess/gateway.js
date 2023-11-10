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
exports.UserGateway = void 0;
var mysql = require("mysql2/promise");
var testingconfig_1 = require("../config/testingconfig");
var jwtFunctions_1 = require("../domain/jwtFunctions");
var UserGateway = /** @class */ (function () {
    function UserGateway() {
        this.pool = null;
    }
    UserGateway.getInstance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var setup;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!UserGateway.instance) return [3 /*break*/, 2];
                        UserGateway.instance = new UserGateway();
                        return [4 /*yield*/, UserGateway.instance.setupDatabase()];
                    case 1:
                        setup = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, UserGateway.instance];
                }
            });
        });
    };
    UserGateway.prototype.insertVote = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var finalResult, userQuery, encuesta, pregunta, usuariodecodificado, usuariofinal, voto, requestValue, result, insertNewVote, insertNewVoteValues, sqlQuery, removeVote, removeValues, resultado, affectedRows, insertVote, insertVoteValues, insertResult, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        finalResult = false;
                        userQuery = 'SELECT * FROM preguntasyrespuestas WHERE encuesta=? and pregunta=? and usuario=?;';
                        console.log("DATOS QUE LLEGARON:");
                        encuesta = data.encuesta;
                        console.log("ENCUESTA:", encuesta);
                        pregunta = data.pregunta;
                        console.log("PREGUNTA:", pregunta);
                        return [4 /*yield*/, (0, jwtFunctions_1.decodeToken)(data.token, testingconfig_1.CONFIG.JWT_SECRET)];
                    case 1:
                        usuariodecodificado = _a.sent();
                        usuariofinal = usuariodecodificado.data;
                        console.log("USUARIO:", usuariofinal);
                        voto = data.voto;
                        console.log("VOTO:", voto);
                        requestValue = [encuesta, pregunta, usuariofinal];
                        console.log("BIENVENIDO A GATEWAY.TS Y AL METODO INSERTVOTE DEL USERGATEWAY");
                        if (!this.pool) return [3 /*break*/, 12];
                        console.log("LA BASE DE DATOS ESTÁ ONLINE!!");
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 10, , 11]);
                        return [4 /*yield*/, this.pool.execute(userQuery, requestValue)];
                    case 3:
                        result = (_a.sent())[0];
                        if (!(result.length == 0)) return [3 /*break*/, 5];
                        console.log("result.length == 0");
                        console.log("INSERTAREMOS EL VOTO POR QUE NO HAY REGISTROS DE ESTE USUARIO VOTANDO EN ESTA PREGUNTA");
                        insertNewVote = 'INSERT INTO preguntasyrespuestas (encuesta,pregunta,usuario,voto) VALUES (?,?,?,?)';
                        insertNewVoteValues = [encuesta, pregunta, usuariofinal, voto];
                        return [4 /*yield*/, this.pool.execute(insertNewVote, insertNewVoteValues)];
                    case 4:
                        sqlQuery = (_a.sent())[0];
                        console.log("SE HA INSERTADO?", "RESPUESTA:", sqlQuery, " ", "(resultado del query)");
                        if (sqlQuery) {
                            console.log("VALORES A INSERTAR:", insertNewVoteValues);
                            console.log("");
                            finalResult = true;
                        }
                        else {
                            finalResult = false;
                        }
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(result.length > 0)) return [3 /*break*/, 9];
                        console.log("result.length MAYOR A 0");
                        console.log("ELIMINAREMOS EL VOTO POR QUE HAY REGISTROS DE ESTE USUARIO VOTANDO EN ESTA PREGUNTA");
                        removeVote = "DELETE FROM preguntasyrespuestas WHERE pregunta = ? AND usuario = ? AND encuesta=?;";
                        removeValues = [pregunta, usuariofinal, encuesta];
                        return [4 /*yield*/, this.pool.execute(removeVote, removeValues)];
                    case 6:
                        resultado = _a.sent();
                        if (!Array.isArray(resultado)) return [3 /*break*/, 9];
                        affectedRows = resultado[0].affectedRows;
                        if (!(affectedRows !== undefined && affectedRows > 0)) return [3 /*break*/, 8];
                        console.log("Valores eliminados correctamente.");
                        insertVote = 'INSERT INTO preguntasyrespuestas (voto, encuesta, pregunta, usuario) VALUES (?, ?, ?, ?)';
                        insertVoteValues = [voto, encuesta, pregunta, usuariofinal];
                        return [4 /*yield*/, this.pool.execute(insertVote, insertVoteValues)];
                    case 7:
                        insertResult = (_a.sent())[0];
                        console.log("RESPUESTA DE LA INSERCION DEL BOTO:", insertResult);
                        if ('affectedRows' in insertResult && insertResult.affectedRows > 0) {
                            console.log("Voto insertado correctamente.");
                            finalResult = true;
                        }
                        else {
                            console.log("Error al insertar el voto.");
                            finalResult = false;
                        }
                        return [3 /*break*/, 9];
                    case 8:
                        console.log("No se encontraron valores para eliminar.");
                        _a.label = 9;
                    case 9: return [3 /*break*/, 11];
                    case 10:
                        error_1 = _a.sent();
                        console.log("error en el insertVotes method", error_1);
                        finalResult = false;
                        return [3 /*break*/, 11];
                    case 11: return [3 /*break*/, 13];
                    case 12:
                        finalResult = false;
                        _a.label = 13;
                    case 13: return [2 /*return*/, finalResult];
                }
            });
        });
    };
    UserGateway.prototype.getSurveyVotes = function (encuesta) {
        return __awaiter(this, void 0, void 0, function () {
            var getVotesQuery, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getVotesQuery = "SELECT * FROM preguntasyrespuestas where encuesta=?";
                        values = [encuesta];
                        if (!!this.pool) return [3 /*break*/, 1];
                        throw new Error('No se pudo conectar a la base de datos');
                    case 1: return [4 /*yield*/, this.pool.execute(getVotesQuery, values)];
                    case 2:
                        result = (_a.sent())[0];
                        if (result.length > 0) {
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserGateway.prototype.getMyVotes = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var usuario, getVotesQuery, values, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.pool) return [3 /*break*/, 1];
                        throw new Error('No se pudo conectar a la base de datos');
                    case 1: return [4 /*yield*/, (0, jwtFunctions_1.decodeToken)(token, testingconfig_1.CONFIG.JWT_SECRET)];
                    case 2:
                        usuario = _a.sent();
                        getVotesQuery = "SELECT * FROM preguntasyrespuestas where usuario=?";
                        values = [usuario.data];
                        return [4 /*yield*/, this.pool.execute(getVotesQuery, values)];
                    case 3:
                        result = (_a.sent())[0];
                        if (result.length > 0) {
                            return [2 /*return*/, result];
                        }
                        else if (result.length == 0 || undefined) {
                            return [2 /*return*/, "no votes"];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UserGateway.prototype.anularVoto = function (pregunta, encuesta, usuario) {
        return __awaiter(this, void 0, void 0, function () {
            var success, removeVote, removeValues, resultado, affectedRows;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        success = false;
                        removeVote = "DELETE FROM preguntasyrespuestas WHERE pregunta = ? AND usuario = ? AND encuesta=?;";
                        removeValues = [pregunta, usuario, encuesta];
                        if (!(this.pool != null)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.pool.execute(removeVote, removeValues)];
                    case 1:
                        resultado = _a.sent();
                        if (Array.isArray(resultado)) {
                            affectedRows = resultado[0].affectedRows;
                            if (affectedRows !== undefined && affectedRows > 0) {
                                success = true;
                            }
                            else {
                                success = false;
                            }
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, success];
                }
            });
        });
    };
    UserGateway.prototype.getStatistics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getVotesQuery, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getVotesQuery = "SELECT encuesta,pregunta,voto FROM preguntasyrespuestas";
                        if (!!this.pool) return [3 /*break*/, 1];
                        throw new Error('No se pudo conectar a la base de datos');
                    case 1: return [4 /*yield*/, this.pool.execute(getVotesQuery)];
                    case 2:
                        result = (_a.sent())[0];
                        if (result.length > 0) {
                            return [2 /*return*/, result];
                        }
                        else if (result.length == 0 || undefined) {
                            return [2 /*return*/, "no votes"];
                        }
                        else {
                            return [2 /*return*/, null];
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    UserGateway.prototype.setupDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var connected, _a, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        connected = false;
                        _b.label = 1;
                    case 1:
                        if (!!connected) return [3 /*break*/, 7];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, 4, , 6]);
                        _a = this;
                        return [4 /*yield*/, mysql.createPool({
                                host: "microservicios-db",
                                user: "root",
                                password: "123456",
                                database: "encuestapphttp",
                            })];
                    case 3:
                        _a.pool = _b.sent();
                        console.log("connected to database");
                        connected = true; // Establecemos la conexión con éxito
                        return [3 /*break*/, 6];
                    case 4:
                        error_2 = _b.sent();
                        console.log("ERRORRRRRR");
                        connected = false;
                        console.error("Error al conectar a la base de datos:", error_2);
                        // Esperamos antes de intentar nuevamente
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 2000); })];
                    case 5:
                        // Esperamos antes de intentar nuevamente
                        _b.sent(); // Puedes ajustar el tiempo de espera según tus necesidades
                        return [3 /*break*/, 6];
                    case 6: return [3 /*break*/, 1];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    return UserGateway;
}());
exports.UserGateway = UserGateway;
