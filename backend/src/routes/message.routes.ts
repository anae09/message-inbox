import express from 'express'
import { MessageController } from '../controllers/message.controller';


const messageRouter = express.Router();

messageRouter.post("/sendMessage", (req, res) => {
    new MessageController().sendMessage(req, res);
});

messageRouter.get("/getMessages/:threadId", (req, res) => {
    new MessageController().getMessages(req, res);
});


export default messageRouter;