import express from 'express'
import Message from '../models/message';

export class MessageController {
    sendMessage = (req: express.Request, res: express.Response) => {
        let message = new Message({
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
        })
    }

    getMessages = (req: express.Request, res: express.Response) => {
        let threadId = req.params['threadId'];
        Message.find({threadId: threadId}, (err, docs) => {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(docs);
            }
        });
    }


}