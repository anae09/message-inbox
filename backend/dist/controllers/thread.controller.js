"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThreadController = void 0;
const thread_1 = __importDefault(require("../models/thread"));
class ThreadController {
    constructor() {
        this.createThread = (req, res) => {
            let thread = new thread_1.default({
                title: req.body.title,
                participants: req.body.participants
            });
            thread.save().then(doc => {
                console.log(doc);
                res.status(200).json({
                    message: "Thread created",
                    thread: doc
                });
            });
        };
        this.userThreads = (req, res) => {
            let user = req.params['username'];
            console.log("Find threads for", user);
            thread_1.default.find({ participants: user }, (err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json(docs);
                }
            });
        };
        this.deleteThread = (req, res) => {
            let threadId = req.params['_id'];
            thread_1.default.deleteOne({ _id: threadId }, (err) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json({ message: "Thread deleted" });
                }
            });
        };
    }
}
exports.ThreadController = ThreadController;
//# sourceMappingURL=thread.controller.js.map