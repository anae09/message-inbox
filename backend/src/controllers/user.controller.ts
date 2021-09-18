import express from 'express'
import User from '../models/user'

export class UserController {
    allUsers = (req: express.Request, res: express.Response) => {
        User.find({}, (err, docs)=> {
            if (err) {
                console.log(err);
            } else {
                res.status(200).json(docs);
            }
        })
    }

    login = (req: express.Request, res: express.Response) => {
        User.findOne({username: req.body.username, password: req.body.password}, (err, doc)=> {
            if (err) {
                console.log(err);
            } else if (!doc) {
                res.json({
                    message: "Invalid login data.",
                    user: null
                });
            } else {
                res.json({
                    message: "Success.",
                    user: doc
                });
            }
        });
    }
}