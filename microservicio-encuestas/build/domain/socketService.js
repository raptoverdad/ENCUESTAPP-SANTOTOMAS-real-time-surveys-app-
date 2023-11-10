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
exports.socketService = void 0;
var http = require('http');
var testingconfig_1 = require("../config/testingconfig");
var socket_io_1 = require("socket.io");
var gateway_1 = require("../dataaccess/gateway");
var jwtFunctions_1 = require("./jwtFunctions");
var gateway = gateway_1.UserGateway.getInstance();
var socketService = /** @class */ (function () {
    function socketService() {
        var _this = this;
        this.key = "skrillex";
        this.io = new socket_io_1.Server(http.createServer().listen(3001), {
            cors: {
                origin: "*",
                methods: ["GET", "POST"],
                credentials: false,
            },
        });
        console.log("conectado en", " ", 3001);
        this.io.use(function (sockete, next) { return __awaiter(_this, void 0, void 0, function () {
            var frontendKey;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, sockete.handshake.query.key];
                    case 1:
                        frontendKey = _a.sent();
                        if (frontendKey !== this.key) {
                            throw new Error("invalid socket connection");
                        }
                        else {
                            next();
                        }
                        return [2 /*return*/];
                }
            });
        }); });
        this.io.on("connection", function (socket) { return __awaiter(_this, void 0, void 0, function () {
            var materia, _a, result, token, result, _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, socket.handshake.query.materia];
                    case 1:
                        materia = _c.sent();
                        if (!(materia != undefined && materia != "estadisticas" && materia != "misVotos")) return [3 /*break*/, 3];
                        _a = this.sendSurveyVotes;
                        return [4 /*yield*/, (materia)];
                    case 2:
                        _a.apply(this, [_c.sent()]);
                        return [3 /*break*/, 9];
                    case 3:
                        if (!(materia == "estadisticas")) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.sendStatistics()];
                    case 4:
                        result = _c.sent();
                        if (result != null && result != "noVotes") {
                            console.log("enviando soket estadisticas");
                            socket.emit('estadisticas', result);
                        }
                        else if (result == "noVotes") {
                            console.log("enviando soket estadisticasNoVotes");
                            socket.emit('estadisticasNoVotes');
                        }
                        else if (result == null) {
                            console.log("enviando soket estadisticasError");
                            socket.emit('estadisticasError');
                        }
                        else {
                            socket.emit('estadisticasError');
                        }
                        return [3 /*break*/, 9];
                    case 5:
                        if (!(materia == "misVotos")) return [3 /*break*/, 9];
                        return [4 /*yield*/, socket.handshake.query.token];
                    case 6:
                        token = _c.sent();
                        _b = this.sendUserVotes;
                        return [4 /*yield*/, (token)];
                    case 7: return [4 /*yield*/, _b.apply(this, [_c.sent()])];
                    case 8:
                        result = _c.sent();
                        if (result != null || result != "no votes") {
                            socket.emit('respuestaMisVotos', result);
                        }
                        else if (result == "no votes") {
                            socket.emit('respuestaMisVotos', "no votes");
                        }
                        else if (result == null) {
                            socket.emit('respuestaMisVotos', "no votes");
                        }
                        else {
                            socket.emit('respuestaMisVotos', "no votes");
                        }
                        _c.label = 9;
                    case 9:
                        try {
                            socket.on("newvote", function (json, senderSocket) { return __awaiter(_this, void 0, void 0, function () {
                                var tokenValido, pakete, encuesta, insertVote;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("el mensaje enviado con newvote:", json);
                                            return [4 /*yield*/, (0, jwtFunctions_1.decodeToken)(json.token, testingconfig_1.CONFIG.JWT_SECRET)];
                                        case 1:
                                            tokenValido = _a.sent();
                                            return [4 /*yield*/, console.log("TOKEN ENVIADO AL FRONT:", tokenValido)];
                                        case 2:
                                            _a.sent();
                                            if (!(tokenValido != null)) return [3 /*break*/, 9];
                                            return [4 /*yield*/, console.log("EL TOKEN NO ES NULL:", tokenValido)];
                                        case 3:
                                            _a.sent();
                                            pakete = json;
                                            encuesta = json.encuesta;
                                            return [4 /*yield*/, gateway];
                                        case 4: return [4 /*yield*/, (_a.sent()).insertVote(pakete)];
                                        case 5:
                                            insertVote = _a.sent();
                                            console.log("este es el pakete que le metiste a insertVote:", pakete);
                                            if (!(insertVote == true)) return [3 /*break*/, 7];
                                            return [4 /*yield*/, this.sendSurveyVotes(encuesta)];
                                        case 6:
                                            (_a.sent());
                                            console.log("tiene que ser true para responderle:", insertVote);
                                            return [3 /*break*/, 8];
                                        case 7:
                                            socket.emit("voteError");
                                            console.log("tiene que ser true para responderle:", insertVote);
                                            _a.label = 8;
                                        case 8: return [3 /*break*/, 10];
                                        case 9:
                                            socket.emit("notValidToken");
                                            console.log("emmiting not valid token");
                                            _a.label = 10;
                                        case 10: return [2 /*return*/];
                                    }
                                });
                            }); });
                            socket.on("anularVoto", function (json, senderSocket) { return __awaiter(_this, void 0, void 0, function () {
                                var tokenValido, deleteVote;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log("el mensaje enviado con newvote:", json);
                                            return [4 /*yield*/, (0, jwtFunctions_1.decodeToken)(json.token, testingconfig_1.CONFIG.JWT_SECRET)];
                                        case 1:
                                            tokenValido = _a.sent();
                                            if (!(tokenValido != null)) return [3 /*break*/, 4];
                                            return [4 /*yield*/, gateway];
                                        case 2: return [4 /*yield*/, (_a.sent()).anularVoto(json.pregunta, json.encuesta, tokenValido.data)];
                                        case 3:
                                            deleteVote = _a.sent();
                                            if (deleteVote == true) {
                                                socket.emit("notValidToken");
                                            }
                                            else {
                                                socket.emit("votoAnulado", { encuesta: json.encuesta, pregunta: json.pregunta });
                                            }
                                            return [3 /*break*/, 5];
                                        case 4:
                                            socket.emit("notValidToken");
                                            console.log("emmiting not valid token");
                                            _a.label = 5;
                                        case 5: return [2 /*return*/];
                                    }
                                });
                            }); });
                        }
                        catch (error) {
                            console.log("chatVisitor error:", error);
                        }
                        return [2 /*return*/];
                }
            });
        }); });
    }
    //fin constructor - inicio metodos de la clase
    socketService.prototype.sendSurveyVotes = function (survey) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gateway];
                    case 1: return [4 /*yield*/, (_a.sent()).getSurveyVotes(survey)];
                    case 2:
                        result = _a.sent();
                        if (this.io) {
                            if (result != null) {
                                this.io.sockets.emit('surveyvotes', { "encuesta": survey, "preguntasyrespuestas": result });
                            }
                        }
                        else {
                            console.log("enviar una respuesta de error");
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    socketService.prototype.sendStatistics = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gateway];
                    case 1: return [4 /*yield*/, (_a.sent()).getStatistics()];
                    case 2:
                        result = _a.sent();
                        if (this.io) {
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, "error"];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //decifrar token y ver si es valid. luego, dar los votos del user.resolver  a partir si devuelve rows, "noVotes" o null.
    socketService.prototype.sendUserVotes = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, gateway];
                    case 1: return [4 /*yield*/, (_a.sent()).getMyVotes(token)];
                    case 2:
                        result = _a.sent();
                        if (this.io) {
                            return [2 /*return*/, result];
                        }
                        else {
                            return [2 /*return*/, "error"];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return socketService;
}());
exports.socketService = socketService;
