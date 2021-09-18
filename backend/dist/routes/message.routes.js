"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const message_controller_1 = require("../controllers/message.controller");
const messageRouter = express_1.default.Router();
messageRouter.post("/sendMessage", (req, res) => {
    new message_controller_1.MessageController().sendMessage(req, res);
});
messageRouter.get("/getMessages/:threadId", (req, res) => {
    new message_controller_1.MessageController().getMessages(req, res);
});
exports.default = messageRouter;
//# sourceMappingURL=message.routes.js.map