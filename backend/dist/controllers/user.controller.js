"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const user_1 = __importDefault(require("../models/user"));
class UserController {
    constructor() {
        this.allUsers = (req, res) => {
            user_1.default.find({}, (err, docs) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.status(200).json(docs);
                }
            });
        };
        this.login = (req, res) => {
            user_1.default.findOne({ username: req.body.username, password: req.body.password }, (err, doc) => {
                if (err) {
                    console.log(err);
                }
                else if (!doc) {
                    res.json({
                        message: "Invalid login data.",
                        user: null
                    });
                }
                else {
                    res.json({
                        message: "Success.",
                        user: doc
                    });
                }
            });
        };
    }
}
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map