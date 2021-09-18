"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageController = void 0;
const message_1 = __importDefault(require("../models/message"));
class MessageController {
    constructor() {
        this.sendMessage = (req, res) => {
            let message = new message_1.default({
                threadId: req.body.threadId,
                sender: req.body.sender,
                receiver: req.body.receiver,
                timestamp: req.body.timestamp,
                body: req.body.body
            });
            message.save().then(doc => {
                console.log(doc);
                res.status(200).json({
                    message: "Message sent"
                });
            });
        };
        this.getMessages = (req, res) => {
            let threadId = req.params['threadId'];
            message_1.default.find({ threadId: threadId }, (err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json(docs);
                }
            });
        };
    }
}
exports.MessageController = MessageController;
//# sourceMappingURL=message.controller.js.map