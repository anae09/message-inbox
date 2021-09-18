import express from 'express'
import Thread from '../models/thread'


export class ThreadController {
    createThread = (req: express.Request, res: express.Response) => {
        let thread = new Thread({
            title: req.body.title,
            participants: req.body.participants
        });
        thread.save().then(doc => {
            console.log(doc);
            res.status(200).json({
                message: "Thread created",
                thread: doc
            })
        });
    }

    userThreads = (req: express.Request, res: express.Response) => { 
        let user = req.params['username'];
        console.log("Find threads for", user);
        Thread.find({ participants: user}, (err, docs)=> {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(docs);
            }
        });
    }

    deleteThread = (req: express.Request, res: express.Response) => {
        let threadId = req.params['_id'];
        Thread.deleteOne({_id: threadId}, (err)=> {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json({message: "Thread deleted"});
            }
        })
    }
}