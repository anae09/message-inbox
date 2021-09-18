"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const thread_routes_1 = __importDefault(require("./routes/thread.routes"));
const message_routes_1 = __importDefault(require("./routes/message.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = express_1.default();
app.use(cors_1.default());
app.use(body_parser_1.default.json());
try {
    mongoose_1.default.connect("mongodb://localhost:27017/inbox");
}
catch (error) {
    console.log("Mongo connection failed");
}
const connection = mongoose_1.default.connection;
connection.once('open', () => {
    console.log('MongoDB working');
});
const router = express_1.default.Router();
router.use("/threads", thread_routes_1.default);
router.use("/messages", message_routes_1.default);
router.use("/users", user_routes_1.default);
app.use("/", router);
// app.get('/', (req, res) => res.send('Hello World!'));
app.listen(4000, () => console.log(`Express server running on port 4000`));
//# sourceMappingURL=server.js.map