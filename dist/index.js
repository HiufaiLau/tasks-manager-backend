"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// instantiate express app
const app = (0, express_1.default)();
// define sever port 
const port = 5000;
// create a default route
app.get('/', (req, res) => {
    res.send('Express + TS server is running');
});
// Start listenng to the requests on the defined port
app.listen(port);
