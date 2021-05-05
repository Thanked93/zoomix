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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = require("dotenv");
const mongoose_1 = require("./database/connection/mongoose");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        dotenv_1.config();
        const app = express_1.default();
        app.use(cors_1.default({
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
        }));
        app.listen(process.env.PORT || 5000, () => console.log("server is running"));
        yield mongoose_1.createConnection();
    });
}
main();
//# sourceMappingURL=server.js.map