"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const thread_controller_1 = require("../controllers/thread.controller");
const threadRouter = express_1.default.Router();
threadRouter.post("/createThread", (req, res) => {
    new thread_controller_1.ThreadController().createThread(req, res);
});
threadRouter.get("/userThreads/:username", (req, res) => {
    new thread_controller_1.ThreadController().userThreads(req, res);
});
threadRouter.delete("/deleteThread/:_id", (req, res) => {
    new thread_controller_1.ThreadController().deleteThread(req, res);
});
exports.default = threadRouter;
//# sourceMappingURL=thread.routes.js.map